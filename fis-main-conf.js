/**
 * @file: fis-main-conf.js
 * @author: shangwenhe@itv.baidu.com
 * @date: 2017-03-30
 * @description: this is a <js> file
 */
/* eslint-disable */
fis.match('*', {
    deploy: fis.plugin('http-push', {
        receiver: 'http://newldap.xiaodutv.com/yog/upload',
        to: '/'
    })
});
/* eslint-enable */
