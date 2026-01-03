---
title: "Database"
layout: archive
permalink: /categories/redis
author_profile: true
types: posts
sidebar_main: true
---

{% assign posts = site.categories['Redis']%}
{% for post in posts %}
  {% include archive-single2.html type=page.entries_layout %}
{% endfor %}
