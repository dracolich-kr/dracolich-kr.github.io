---
title: "Daily"
layout: archive
permalink: /categories/daily
author_profile: true
types: posts
sidebar:
    nav: "sidebar-category"
---

{% assign posts = site.categories['Daily']%}
{% for post in posts %}
  {% include archive-single2.html type=page.entries_layout %}
{% endfor %}
