/**
 * @file: activedirectory.js
 * @author: shangwenhe@itv.baidu.com
 * @date: 2017-04-10
 * @description: this is a <js> file
 */
/* eslint-disable */
//  https://github.com/gheeres/node-activedirectory
'use strict';

var ActiveDirectory = require('activedirectory');

// import async from 'async';
//
// // 通过组名查找组
// ActiveDirectory.prototype.findGroupByName = function(groupname, callback) {
//
//     let client = this.createClient();
//     var opts = {
//         filter: '(&(ou=' + decodeURIComponent(groupname) + '))',
//         scope: 'sub',
//         attributes: ['dn', 'objectCategory', 'ou']
//     };
//
//     client.search('dc=xiaodutv,dc=com', opts, function(err, res) {
//
//         let results = [];
//         res.on('searchEntry', function(entry) {
//             results.push(entry.object);
//         });
//         res.on('error', function(err) {
//             client.unbind();
//             callback({
//                 errno: 40401,
//                 msg: 'find group error',
//             });
//         });
//         res.on('end', function(result) {
//             client.unbind();
//             if (result.status || !results.length) {
//                 callback({
//                     errno: 40402,
//                     msg: 'group non-existent',
//                 });
//                 return;
//             }
//             callback(null, {
//                 errno: 0,
//                 msg: '',
//                 groups: results
//             });
//         });
//     });
// }
//
// // 从域中某个组内查找用户
// ActiveDirectory.prototype.findUserFromGroup = function(username, domain, callback) {
//     domain = 'dc=xiaodutv,dc=com';
//     let client = this.createClient();
//     var opts = {
//         filter: '(&(objectCategory=person)(sAMAccountName=' + decodeURIComponent(username) + '))',
//         scope: 'sub',
//         attributes: ['dn', 'objectCategory', 'ou', 'displayName', 'mail', 'sAMAccountName']
//     };
//    
//     client.search(domain, opts, function(err, res) {
//         let results = [];
//         res.on('searchEntry', function(entry) {
//             results.push(entry.object);
//         });
//         res.on('error', function(err) {
//             callback({
//                 errno: 40405,
//                 msg: 'find user error',
//             });
//         });
//         res.on('end', function(result) {
//             if (result.status || !results.length) {
//                 callback({
//                     errno: 40404,
//                     msg: 'user non-existent',
//                 });
//                 return;
//             }
//             callback(null, {
//                 errno: 0,
//                 msg: '',
//                 users: results
//             });
//         });
//     });
// }
//
// // 从指定的组内取得用户
// ActiveDirectory.prototype.userExistInGroup = function(username, groupname, callback) {
//     let client = this.createClient();
//
//     async.waterfall([
//         (callback) => {
//             // 查找用户组是否存在
//             this.findGroupByName(groupname, function(err, info) {
//                 if (err) {
//                     callback(err)
//                     return;
//                 }
//                 if (info.groups.length > 1) {
//                     callback({
//                         errno: 40403,
//                         msg: 'find many groups',
//                     });
//                     return;
//                 }
//                 info.info = info.groups[0];
//                 callback(null, info);
//             });
//         }, (group, callback) => {
//             this.findUserFromGroup(username, group.info.dn, function(err, info) {
//                 if(err){
//                     callback(err);
//                     return;
//                 }
//                 info.info = info.users[0];
//                 callback(err, info);
//             });
//         }
//
//     ], function(error, result) {
//         callback(error, result)
//     });
// }
//
// // 为某个组添加用户
// ActiveDirectory.prototype.addUserForGroup = function(username, groupname, callback) {
//
//     this.userExistInGroup(username, groupname, function(err, info){
//         if(err) {
//        
//             return;
//         }
//         callback(err, info) ;
//     });
//
// }

module.exports.activedirectory = function (app, conf) {
    // 验证用户是否存在
    // let userExists = ad.userExists;
    // 查找用户
    // let findUser = ad.findUser;
    // 验证用户是否合法
    // let authenticate = ad.authenticate;
    var ad = new ActiveDirectory(conf);
    return ad;
};
/* eslint-enable */