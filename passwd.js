/*
	shangwenhe@itv.baidu.com
*/

var ldap = require('ldapjs');
var client = ldap.createClient({
  url: 'ldap://127.0.0.1'
});

emitter.on('cmd:dsmodPwd',function(mod, callback){
		var exec = require('child_process').exec;
		var cmd = 'dsmod user "'+ mod.dn +'" -pwd "'+ mod.pwd  +'" -u "testbyshangwenhe" -p "UMyygyisk!1" -mustchpwd no -q';
		//console.log(cmd);
		exec(cmd, callback);

});



emitter.on('passwd:ch:cmd',function(client, user_name, params, callback){
	
 		var opts = {
 		  filter: '(&(sAMAccountName='+user_name+'))',
 		  scope: 'sub',
 		  attributes: []
 		};
		
 		client.search('OU=xiaodutv,dc=xiaodutv,dc=com', opts, function(err, res) {
			
 			  res.on('searchEntry', function(entry) {
				//console.log(entry);
				emitter.emit('cmd:dsmodPwd', { 
 			  			dn:entry.object.dn, 
 			  			pwd:params.password 
 			  		}, function(error, stdout, stderr) {
						
						if(error){
							callback(true,entry);
						}else{
							callback(false,entry);
						}
                
 				});
 			  });
 			  res.on('error', function(err, data) {
				 //console.log(err,data);
 				callback(true, err);
 			  });
 			  res.on('end', function(result) {
 				// console.log('status: ' + result.status);
 				
 				if(result.status == 0){
 				}else{
					callback(true);
				}
 			  });
 		});
	
});

emitter.on('passwd:ch',function(params, callback){


	var user_name = params.email.replace(/@.*$/,'');
	client.bind( 'xiaodutv\\'+ user_name, params.oldpassword, function( err, info ){
		
		if(err){
			callback(true, {err: 102, msg: 'bind error'});
		}else{
			emitter.emit('passwd:ch:cmd', client, user_name, params, function(err, info){
				if(err){
					callback(true, {err: 103, msg: 'chpassword error'});
				}else{
					callback(false, {err: 0, msg: 'chpassword OK'});
				}
			});
		}
	});
});


var db = require('node-mysql');
var cps = require('cps');
var DB = db.DB;

var box = new DB({
	host: '172.18.20.237',
	user: 'ldap',
	password: 'Ldap!1',
	database: 'TD_OA',
	port: 3336
	
});
var BaseRow = db.Row;
var BaseTable = db.Table;

emitter.on('passwd:reset',function(params, callback){
	
	box.connect(function(conn, callback) {
        cps.seq([
            function(_, callback) {
                conn.query('SELECT user.byname, hr_staff_info.staff_card_no, hr_staff_info.staff_phone,hr_staff_info.staff_mobile,user.email from user,hr_staff_info WHERE user.USER_ID=hr_staff_info.USER_ID and user.BYNAME=\''+ params.name+'\'', callback);
            },
            function(res, callback) {
                callback(null, res[0]);
            }
        ], callback);
    }, function(err, data){
		
		
		if( 
			!err && params.icarded == data.staff_card_no
			&& ( params.telephone == data.staff_mobile || params.telephone ==data.staff_phone)
			){
				
				client.bind( 'xiaodutv\\testbyshangwenhe', 'UMyygyisk!1', function( err, info ){
		
					if(err){
						callback(true, {err: 102, msg: 'bind error'});
					}else{
						
						emitter.emit('passwd:ch:cmd', 
							client, 
							params.name , {
								password:params.password
							}, function(err, info){
							if(err){
								callback(true, {err: 103, msg: 'chpassword error'});
							}else{
								callback(false, {err: 0, msg: 'chpassword OK'});
							}
						});
					}
				});
				
			}else{
				callback(true, {err: 105, msg: 'person info error'});
			}
	});
});



