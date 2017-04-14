/**
 * @file: index.js
 * @author: shangwenhe@itv.baidu.com
 * @date: 2017-04-13
 * @description: this is a <js> file
 */
/* eslint-disable */


const crypto = require('crypto');
const ALGORITHM = 'des3';

// 服务认证
class serviceAuthenticate {
    // 加密
    cipher(buf, salt) {
        let encrypted = "";
        let cip = crypto.createCipher(ALGORITHM, salt);
        encrypted += cip.update(buf, 'utf8', 'hex');
        encrypted += cip.final('hex');
        return encrypted;
    }

    // 解密
    decipher(encrypted, salt) {
            let decrypted = "";
            let decipher = crypto.createDecipher(ALGORITHM, salt);
            decrypted += decipher.update(encrypted, 'hex', 'utf8');
            decrypted += decipher.final('utf8');
            return decrypted;
        }
        // 随机生成字符串
    randomString(len = 32) {　　
        let chars = '1234567890abcdef1234567890abcdef';
        let maxPos = chars.length;　　
        let pwd = '';　　
        for (let i = 0; i < len; i++) {　　　　
            pwd += chars.charAt(Math.floor(Math.random() * maxPos));　　
        }　　
        return pwd;
    }
    sha1(content = this.randomString(8), len = 15) {
        let sha1 = crypto.createHash('sha1');
        sha1.update(content);
        return sha1.digest('hex').substr(0, len);
    }
    cipherWithSalt(str, salt, pos) {
        return str.substr(0, pos) + salt + str.substr(pos) + '::' + salt.length + '::' + pos;
    }
    decipherWithSalt(str, saltlen, pos) {
        let salt = str.substr(pos, saltlen);
        return [str.replace(salt, ''), salt];
    }
    decipherCookie(xduss) {
        let [cookievalue, saltlen, saltpos] = xduss.split('::');
        let [encrypted, salt] = this.decipherWithSalt(cookievalue, saltlen, saltpos);
        return this.decipher(encrypted, salt);
    }
}

let serviceAuthen = new serviceAuthenticate;

module.exports.xduuap = function(app, {path, query, protocol, server}) {
    
    return function() {
        app.use(function(req, res, next) {
            let url = req.protocol + '://' + req.get('host') + req.originalUrl;
            let loginUrl = protocol + '://' + server.host  + (server.port? ':'+server.port :'' ) +  '/login?service=' + encodeURIComponent(url);
            if (!req.cookies.INNERUSS) {
                res.redirect(loginUrl);
                return;
            }
            if(!req.session.uinfo){
                let { info } = JSON.parse(serviceAuthen.decipherCookie(req.cookies.INNERUSS));
                req.session.uinfo = Object.assign({},info, {
                    _id: info.cn,
                });
            }
            next();
        });
    }
};
/* eslint-enable */
