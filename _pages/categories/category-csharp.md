---
title: "C#"
layout: archive
permalink: /categories/csharp
author_profile: true
types: posts
sidebar:
    nav: "sidebar-category"
---

{% assign posts = site.categories['CSharp']%}
{% for post in posts %}
  {% include archive-single2.html type=page.entries_layout %}
{% endfor %}
