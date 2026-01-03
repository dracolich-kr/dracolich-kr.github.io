---
title: "Daily"
layout: archive
permalink: /categories/github
author_profile: true
types: posts
sidebar_main: true
---

{% assign posts = site.categories['GitHub']%}
{% for post in posts %}
  {% include archive-single2.html type=page.entries_layout %}
{% endfor %}
