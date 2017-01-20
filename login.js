/*
	shangwenhe@itv.baidu.com
*/












var sessionData = {
	
	// Information required to access the LDAP directory:
	// URL, suffix, and admin (or read only) credentials.
	//
	// In a normal application this would be in the
	// configuration parameters, but in this application we
	// want people to be able to use their own LDAP server.
	ldap: {
		url: '',
		dn: 'xiaodutv\\shangwenhe',
		passwd: 'UMyygyisk!1',
		suffix: ''
	},
		
	// Information related to the current user
	uid: '',
	passwd: 'UMyygyisk@2',
	dn: "",    // No DN yet
	
	// Authorizations we already calculated - none so far
	authList: {}
};


var ldap = require('ldapjs');
var client = ldap.createClient({
  url: 'ldap://127.0.0.1'
});

// bind(dn, password, controls, callback)
client.bind( 'xiaodutv\\'+ 'shangwenhe04', 'UMyygyisk!1',
	function(err, info) {	
		
		console.log(err, info);
		
	}
);






 // dsmod user "CN=商文河,OU=技术平台1部,OU=xiaodutv,DC=xiaodutv,DC=com" -pwd "UMyygyisk!123";


