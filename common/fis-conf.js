/**
 * @file FIS 配置
 * @author
 */

fis.config.set('namespace', 'common');

// 插件存放位置
fis.match('plugins/(**)', {
    release: '/plugins/$1'
})
// 插件存放位置
fis.match('conf/(**)', {
    release: '/conf/$1'
})
var path = require('path');
var conf = require(path.resolve(__filename, '../../fis-main-conf.js'));
