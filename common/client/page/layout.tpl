<!doctype html>
{% html lang="en" framework="common:static/js/mod.js" %}
    {% head %}
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        <meta name="description" content="">
        <meta name="author" content="">
        <link rel="icon" href="/static/favicon.ico">
        <title>{{ title }}</title>
        {% require "common:static/js/jquery.js" %}
        {% require "common:static/exotic/bootstrap-3.3.7-dist/js/bootstrap.min.js" %}
        {% require "common:static/exotic/bootstrap-3.3.7-dist/css/bootstrap.min.css" %}
        {% require "common:static/exotic/bootstrap-3.3.7-dist/css/bootstrap-theme.min.css" %}
        {% require "common:static/css/layout.css" %}
    {% endhead %}

    {% body %}
        <div id="wrapper">
            {% block content %}
            {% endblock %}
        </div>

    {% endbody %}

{% endhtml %}
