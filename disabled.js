



var params = {
	user :'shangwenhe',
	 disabled : 'yes'
}


var cmd = 'dsquery  user  -samid '+ params.user ;
var exec = require('child_process').exec;	
var ;
exec(cmd, function(error, stdout, stderr) {
	var cmdmod = 'dsmod '+ stdout + ' -disabled ' + params.disabled;
	exec(cmdmod, function(error, stdout, stderr) {
		console.log(stdout);
	});
	
});

// -disabled {yes | no} 