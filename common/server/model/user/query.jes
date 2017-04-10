/**
 * @file: query.js
 * @author: shangwenhe@itv.baidu.com
 * @date: 2017-04-10
 * @description: this is a <js> file
 */
/* eslint-disable */

var ActiveDirectory = require('activedirectory');
var config = {
    url: 'ldap://172.18.20.239:389',
    baseDN: 'OU=xiaodutv,DC=xiaodutv,DC=com',
    username: 'testbyshangwenhe',
    password: 'UMyygyisk!1'
}
var ad = new ActiveDirectory(config);

ad.findUser('shangwenhe', function(err, user) {
    console.log(err, user);
})



// username = 'shangwenhe@itv.baidu.com';
// password = 'UMyygyisk!1';
// 
// ad.authenticate(username, password, function(err, auth) {
//     if (err) {
//         console.log('ERROR: ' + JSON.stringify(err));
//         return;
//     }
// 
//     if (auth) {
//         console.log('Authenticated!');
//     } else {
//         console.log('Authentication failed!');
//     }
// });

/* eslint-enable */
