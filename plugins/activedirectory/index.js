/**
 * @file: activedirectory.js
 * @author: shangwenhe@itv.baidu.com
 * @date: 2017-04-10
 * @description: this is a <js> file
 */
/* eslint-disable */
var ActiveDirectory = require('activedirectory');
module.exports.activedirectory = function(app, conf) {
    return {
        ad: new ActiveDirectory(conf)
    }
};
/* eslint-enable */
