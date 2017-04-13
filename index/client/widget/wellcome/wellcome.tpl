<!--
 @file: wellcome.tpl
 @author: shangwenhe@itv.baidu.com
 @date: 2017-04-12
 @description: this is a <tpl> file
 @require ./wellcome.jes
 @require ./wellcome.less
-->

<div class='wellcome-wrap'>
    <div class="row">
        <div class="col-xs-2 col-md-3">
        </div>
        <div class="col-xs-8 col-md-6">
            {% widget 'index:widget/login/login.tpl' %}
        </div>
        <div class="col-xs-2 col-md-3">
        </div>
    </div>
</div>
