/**
 * @file: activedirectory.js
 * @author: shangwenhe@itv.baidu.com
 * @date: 2017-04-10
 * @description: this is a <js> file
 */
/* eslint-disable */
module.exports.activedirectory = {
    url: 'ldap://172.18.20.239',
    baseDN: 'OU=xiaodutv,DC=xiaodutv,DC=com',
    username: 'testbyshangwenhe',
    password: 'UMyygyisk!1',
    referrals: {
        enabled: false,
        // Active directory returns the following partitions as default referrals which we don't
        // want to follow
        exclude: [
            'ldaps?://.*/CN=Configuration,.*'
        ]
    }
};
/* eslint-enable */
