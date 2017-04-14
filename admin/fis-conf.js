/**
 * @file FIS 配置
 * @author
 */

fis.config.set('namespace', 'admin');

fis.match('client/widget/{**.js,**.jes}',{
    isMod: true 
});
var path = require('path');
var conf = require(path.resolve(__filename, '../../fis-main-conf.js'));
