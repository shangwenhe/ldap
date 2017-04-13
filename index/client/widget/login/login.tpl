<!--
 @file: login.tpl
 @author: shangwenhe@itv.baidu.com
 @date: 2017-04-12
 @description: this is a <tpl> file
 @require ./login.jes
 @require ./login.less
-->

<div class='login-wrap'>

    <div class="" id='loginModal' tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">登录窗口</h4>
                </div>
                <div class="modal-body">
                        <div class="form-group">
                            <label for="inputEmail">登录用户名@xiaodutv.com</label>
                            <input type="email" class="form-control" id="inputEmail" placeholder="用户名">
                        </div>
                        <div class="form-group">
                            <label for="inputPassword">用户密码</label>
                            <input type="password" class="form-control" id="inputPassword" placeholder="Password">
                        </div>
                        <div class="checkbox">
                            <label>
                                <input type="checkbox" id='remember'>三周内免登录
                            </label>
                        </div>
                    <button type="submit" class="btn btn-default btn-block" id='submit'
                        data-state='false'>登录小度域</button>
                </div>
                <div class="modal-footer">
                    <a href='/reset/passwd' class='text-danger'>忘记密码</a>
                </div>
            </div>
        </div>
    </div>
</div>
{% script %}
require('./login.jes');
{% endscript %}
