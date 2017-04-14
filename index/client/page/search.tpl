{% extends 'common:page/layout.tpl' %}

{% block content %}
     {% widget 'index:widget/header/header.tpl' %}
     <div id="pages-container">
         {% widget 'index:widget/search/search.tpl' %}
     </div>
 {% endblock %}
