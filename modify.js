

 var cmd = 'dsquery  user "OU=xiaodutv,DC=xiaodutv,DC=com"  -o samid   -limit 500 -samid shangwenhe';
 
 var exec = require('child_process').exec;
 var iconv = require('iconv-lite');
 
 function dsquery (getalluser, i){
	 
	exec('dsquery  user '+ getalluser[i] + '  -o samid' , function(error, stdout, stderr){

		var username = stdout.replace(/["\r\n]/ig,'');
		var stdout = getalluser[i];
		console.log( getalluser[i],i);
		var email = username +'@xiaodutv.com';
		// console.log('dsquery  user  -o  dn  -samid ' +  username);
		
		var cmduser = 'dsmod user \"'+  stdout + '\" -u "testbyshangwenhe" -p "UMyygyisk!1" -email \"'+  email  + '\" -desc \"'+ stdout.replace(/CN=([^,]*),.*/,'$1') +'\"';
		console.log(cmduser);
		 exec(cmduser , function(error, stdoutuser, stderr){
		 	
		 	if(error){
		 		console.log('Error:'+ error);
		 		if( ++i < getalluser.length && getalluser[i] != ''){
		 			//dsquery(getalluser, i);
		 		}	
		 	}else{
		 		console.log('Success:' + cmduser);
				var cmd = 'dsmove \"'+  stdout + '\" -u "testbyshangwenhe" -p "UMyygyisk!1" -newname \"' +  username +'\"';
				console.log(cmd);
		 		exec(cmd , function(error, stdoutmove, stderr){
		 			console.log('CMD:' + cmd);
		 			if(error){
		 				console.log('Error:'+ error);
		 				
		 			}else{
		 				console.log('Success:' + cmd);
		 				console.log('\r\n');
		 			}
		 			if( ++i < getalluser.length && getalluser[i] != ''){
		 				//dsquery(getalluser, i);
		 			}	
		 		});					
		 	}
		 });	
		
	});	 
	 
 }
 
 
 //exec(cmd, function(error, stdout, stderr) {
	
	//var getalluser = stdout.split('\r\n');
	var getalluser = require('./allCN');
	//console.log(getalluser.user);
	//dsquery(getalluser.user, 0);
	
	
	
 //});