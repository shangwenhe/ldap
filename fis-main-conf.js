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

fis.match('**.tmpl', {
    parser: fis.plugin('utc', {
        variable: 'data'
    }),
    isJsLike: true,
    release: false
});

fis.match('*', {
    deploy: fis.plugin('http-push', {
        // receiver: 'http://newldap.xiaodutv.com/yog/upload',
        receiver: 'http://uuap.xiaodutv.com/yog/upload',
        to: '/'
    })
});
/* eslint-enable */
