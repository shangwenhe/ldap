/*
	shangwenhe@itv.baidu.com
*/

//  配置文件
var conf = require('./conf/config');

// 全局事件中心
var events = require('events');
global.emitter = new events.EventEmitter();
global.util = require('util');
global.async = require('async');
global._ = require('underscore');
global.fs = require('fs');

var path = require('path');


// express 设置
var express = require('express');
var app = express();
app.set('env', conf.env || 'pro');
app.set('port', conf.port || 8099);
app.set('views', path.join(__dirname, conf.views));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', function (req, res) {
  res.send('Hello World!');
});


app.get('/passwd', function (req, res) {
	res.render('./page/passwd.html',{ title: '修改密码' });
});

require('./passwd');
app.post('/chpasswd', function (req, res) {
	
	emitter.emit('passwd:ch', req.body, function( err, result){
		if(err){
			res.send(JSON.stringify(result));
			
		}else{
			res.send(JSON.stringify(req.body));	
		}
	});
	
});

require('./user');
app.post('/adduser', function (req, res) {
	
	emitter.emit('user:add', req.body, function( err, result){
		if(err){
			res.send(JSON.stringify(result));
			
		}else{
			res.send(JSON.stringify(req.body));
			
		}
		
	});
	
});
app.post('/rmuser', function (req, res) {
	emitter.emit('user:rm', req.body, function( err, result){
		if(err){
			res.send(JSON.stringify(result));
			
		}else{
			res.send(JSON.stringify(req.body));
			
		}
		
	});
	
});
app.post('/disabled', function (req, res) {
	emitter.emit('user:mod', req.body, function( err, result){
		if(err){
			res.send(JSON.stringify(result));
			
		}else{
			res.send(JSON.stringify(req.body));
		}
		
	});
});
app.get('/login', function (req, res) {
	
	emitter.emit('user:login', req.query , function( err, result){
		if(!!result['userPassword']){
			result['userPassword'] = null;
		}
		var result = JSON.stringify(result);
		if( req.query.callback ){
			result = req.query.callback + '(' + result + ')';
		}
		res.send(result);
	});
});



// 密码重置
app.get('/passwd/reset', function (req, res) {
	res.render('./page/passwdReset.html',{ title: '重置密码' });
});
app.post('/passwd/postreset', function (req, res) {	
	emitter.emit('passwd:reset', req.body, function( err, result){
		res.send(JSON.stringify(result));
	});
});


var server = app.listen(8099, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});


