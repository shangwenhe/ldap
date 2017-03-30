var index = require('../model/index.js');
var util = require('../lib/util.js');

module.exports = function(req, res){
    res.send('{}');
    // res.render('index/page/index.tpl', index.getData());
};


module.exports.get = function(req, res, next){
    res.send('get book ' + req.params.id);
};

module.exports.post = function(req, res, next){
    next(new Error('not implemented'));
};

module.exports.put = function(req, res, next){
    res.send('put book');
};

module.exports.delete = function(req, res, next){
    res.send('delete book ' + req.params.id);
};

