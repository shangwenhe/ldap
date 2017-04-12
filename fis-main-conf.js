/**
 * @file: fis-main-conf.js
 * @author: shangwenhe@itv.baidu.com
 * @date: 2017-03-30
 * @description: this is a <js> file
 */
/* eslint-disable */

fis.match('**.jes', {
    parser: fis.plugin('babel-5.x', {
        blacklist: ['regenerator'],
        stage: 3
    }),
    rExt: 'js'
});


fis.match('*', {
    deploy: fis.plugin('http-push', {
        // receiver: 'http://newldap.xiaodutv.com/yog/upload',
        receiver: 'http://127.0.0.1:8100/yog/upload',
        to: '/'
    })
});
/* eslint-enable */
