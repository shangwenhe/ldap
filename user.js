var ldap = require('ldapjs');
var client = ldap.createClient({
  url: 'ldap://127.0.0.1'
});


emitter.on('user:add', function(params, callback){
	
	// dsadd user 'CN=商文河04,OU=技术平台1部,OU=xiaodutv,DC=xiaodutv,DC=com'  
	// -samid 'shangwenhe04'   
	// -dept '技术平台1部'  
	// -pwd 'UMyygyisk!1'  
	// -tel '15810479305' 
	//	-email shangwenhe04@xiaodutv.com 
	//	-title '前端开发工程师' 
	//	-fn '商' 
	//	-ln '文河04' 
	//  -display '商文河04'
	//	-u "testbyshangwenhe" 
	//  -p "UMyygyisk!1" 
	//	-upn 'shangwenhe04@xiaodutv.com' 
	//  -q   -mustchpwd  no 
	
	
	// var params = {
	// 	samid:'shangwenhe',
	// 	dept:'技术平台1部',
	// 	pwd: '',
	// 	tel: '',
	// 	email: '',
	// 	fn: '',
	// 	ln:'',
	// 	title : '',
	// }
	console.log(params);
	
	var exec = require('child_process').exec;	
	
	var paramsObj = {
		display: params.samid,
		u:'testbyshangwenhe',
		p:'UMyygyisk!1',
		upn: params.email,
		mustchpwd: 'no',
		desc: params.fn + params.ln 
	};
	
	for( key in params ){ paramsObj[key] = params[key];}
	var cmd = 'dsadd user "CN='+paramsObj.display+',OU='+paramsObj.dept+',OU=xiaodutv,DC=xiaodutv,DC=com" -q ';
	
	for(key in paramsObj){
		cmd += ' -'+key + ' "' + paramsObj[key] +'"';
	}
	exec(cmd, function(error, stdout, stderr) {
		
		var modgroup = 'dsmod group "CN=confluence-users,OU=xiaodutv,DC=xiaodutv,DC=com"  -addmbr  "CN='+paramsObj.display+',OU='+paramsObj.dept+',OU=xiaodutv,DC=xiaodutv,DC=com" -q ';
		
		console.log(modgroup);
		exec(modgroup,function(){
			if(error){
				callback(true, {
					data : paramsObj,
					cmd : cmd,
					err : 104
				});
			}else{
				paramsObj['err'] = 0;
				callback(false, paramsObj);
			}
		});
	});
});

emitter.on('user:rm', function(params, callback){
	
	if( !'name' in params || !'dept' in params ){
		
		callback(true, {
			err: 105,
			msg: 'params error'
		});
		return;
		
	}
	
	var cmd = 'dsrm "CN='+params.name+',OU='+params.dept+',OU=xiaodutv,DC=xiaodutv,DC=com"  -u "testbyshangwenhe" -p "UMyygyisk!1" -noprompt';
	
	var exec = require('child_process').exec;	
	exec(cmd, function(error, stdout, stderr) {
		if(error){
			callback(true, {
				data : params,
				cmd : cmd,
				msg : 'delete error',
				err : 105
			});
		}else{
			params['err'] = 0;
			callback(false, params);
		}
	});
});


emitter.on('user:mod', function(params, callback){
	

	var cmdmod = 'dsmod user "CN='+ params.user +',OU='+ params.dept +',OU=xiaodutv,DC=xiaodutv,DC=com" -u "testbyshangwenhe" -p "UMyygyisk!1"  -disabled ' + params.disabled;
	
	var exec = require('child_process').exec;
	exec(cmdmod, function(error, stdout, stderr) {
		if(error){
			callback(true, {
				data : params,
				cmd : cmdmod,
				msg : 'disabled error',
				err : 106
			});
		}else{
			params['err'] = 0;
			callback(false, params);
		}
	});			

});

emitter.on('user:login', function(params, callback){
	
	client.bind( 'xiaodutv\\'+ params.user, params.pwd, function( err, info ){
		
		if(err){
			callback(true, {err: 102, msg: 'bind error'});
		}else{

			var opts = {
			  filter: '(&(sAMAccountName='+params.user+'))',
			  scope: 'sub',
			  attributes: []
			};
			
			
			client.search('OU=xiaodutv,dc=xiaodutv,dc=com', opts, function(err, res) {
				  res.on('searchEntry', function(entry) {
					  callback(false, entry.object);
				  });
				  res.on('error', function(err, data) {
					 console.log(err,data);
					callback(true, err);
				  });
				  res.on('end', function(result) {	
					if(result.status == 0){
					}else{
						callback(true);
					}
				  })
			});

		}
	});

});

