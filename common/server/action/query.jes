/**
 * @file: query.js
 * @author: shangwenhe@itv.baidu.com
 * @date: 2017-03-30
 * @description: this is a <js> file
 */
/* eslint-disable */

module.exports = function(req, res) {

    var ad = yog.plugins.activedirectory.ad;
    ad.findUser('wangxiaohan', function(err, user) {
        console.log(JSON.stringify(user));
        res.send(JSON.stringify(user));
    });
    ad.userExists('panchunlei', function(err, user) {
        console.log(JSON.stringify(user));
    });
    ad.authenticate('shangwenhe@xiaodutv.com', 'UMyygyisk!1', function(err, auth) {
        if (err) {
            console.log('ERROR: ' + JSON.stringify(err));
            return;
        }

        if (auth) {
            console.log('Authenticated!');
        } else {
            console.log('Authentication failed!');
        }
    });

    // dsquery ou domainroot -name '战略投资部'
    ad.findGroup('xiaodu-wiki',function(err, groups){
        console.log(err, groups, '======') ;
    })

};
/* eslint-enable */
