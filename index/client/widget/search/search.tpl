<!--
 @file: search.tpl
 @author: shangwenhe@itv.baidu.com
 @date: 2017-04-14
 @description: this is a <tpl> file
 @require ./search.jes
 @require ./search.less
-->

<div class='search-wrap'>
    <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10">
            <div class="input-group input-group-lg">
                <span class="input-group-addon" id="sizing-addon1">输入用户名</span>
                <input type="text" class="form-control" id='username' placeholder="Username" aria-describedby="sizing-addon1" />
                <span class="input-group-btn">
                     <button id='search' class="btn btn-default" type="button">搜索用户</button>
                </span>
            </div>
            <div class='user-info'></div>
        </div>
        <div class="col-md-1"></div>
    </div>
</div>
{% script %}
    require('./search.jes');
{% endscript %}
