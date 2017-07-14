# todo list
1. 搜索用户组
2. 用户找回密码
3. 用户修改密码
 
 
# 接口
 
 
### 搜索用户 search
```
var username = 'shangwenhe';
$.ajax({
    url: ['/search'].join('/'),
    type: 'POST',
    data:{
      username
  },
    success:function(data){
        console.log(data);
    }
});
```
### 搜索用户组
### 检索出用户组成员
```
  $.ajax({
    url:'http://uuap.test.com/common/guserlist/技术平台3部',
    type:'POST',
    success: function(data){
      console.log(data);
    }
  })
``` 
 
### 删除用户 delete
```
// 以samid删除用户  
http://uuap.test.com/common/udelete/shangwenhe1
// 删除某组内的成员
http://uuap.test.com/common/udelete/shangwenhe10/移动产品部1
```
 
### 删除用户组 delete
```
// 说明
// /gdeletd/需要删除的组/被删除组的父级组
http://uuap.test.com/common/gdelete/%E7%A7%BB%E5%8A%A8%E4%BA%A7%E5%93%81%E9%83%A811/xiaodutv
```
 
 
### 添加用户 add
    
```
var username = 'shangwenhe';
var dept = '移动产品部1';
var display = '商文河';
$.ajax({
    url: ['/common/uadd',username,dept].join('/'),
    type: 'POST',
    data:{
  "samid": username,
  "upn": username+'@itv.baidu.com',
  "fn": display.replace(/^(.{1})(.*)$/,'$1'),
  "ln": display.replace(/^(.{1})(.*)$/,'$2'),
  "display": display,
  "pwd": "#fdsfd@23",
  "desc": display,
  "office": "F3-A017",
  "tel": "15810179305",
  "email": username+'@itv.baidu.com',
  "mobile": "15810179305",
  "webpg": "http://wiki.xiaodutv.com",
  "title": dept+display,
  "dept": dept
  },
    success:function(data){
        console.log(data);
    }
})
```
 
### 添加用户组 addgroup
    
```
var dept = '移动产品部11';
var parentdept = 'xiaodutv';

$.ajax({
    url: ['/common/gadd',dept,parentdept].join('/'),
    type: 'POST',
    data:{
    "desc": dept,
    "dept":dept
  },
    success:function(data){
        console.log(data);
    }
});
```
 
### 修改用户属性
```
var username = 'shangwenhe3';
var dept = '移动产品部1';
var display = '阿商';
$.ajax({
    url: ['/common/umodify',username,dept].join('/'),
    type: 'POST',
    data:{
  "upn": username+'@itv.baidu.com',
  "fn": display.replace(/^(.{1})(.*)$/,'$1'),
  "ln": display.replace(/^(.{1})(.*)$/,'$2'),
  "display": display,
  "pwd": "#fdsfd@23",
  "desc": display,
  "office": "F3-A017",
  "tel": "15810179305",
  "email": username+'@itv.baidu.com',
  "mobile": "15810179305",
  "webpg": "http://wiki.xiaodutv.com",
  "title": dept+display,
  "dept": dept,
  'disabled':'yes'
  },
    success:function(data){
        console.log(data);
    }
})
```
 
### 修改组属性
#### 查找并修改
```
$.ajax({
    url:'http://uuap.test.com/common/gmodify/移动产品部1',
    type:'POST',
    data:{
        desc: '移动产品部-0相关说明'
    },
    success: function(data){
        console.log(data)
    }
})
``` 
#### 通过父级组查找组并修改
``` 
$.ajax({
    url:'http://uuap.test.com/common/gmodify/移动产品部1/移动产品部12',
    type:'POST',
    data:{
        desc: '移动产品部-0 相关说明'
    },
    success: function(data){
        console.log(data)
    }
})
```
