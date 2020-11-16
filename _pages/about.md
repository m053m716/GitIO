---
permalink: /
title: "Home"
date: 2020-11-13
excerpt: "About me."
author_profile: true
redirect_from: 
  - "/about/"
  - "/about.html"
---

{% include base_path %}

About Me
======
Short (1-2 sentence) about me goes here.

News
------
{% include base_path %}
{% capture written_year %}'None'{% endcapture %}
{% for post in site.news %}
  {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
  {% if year != written_year %}
    {% capture written_year %}{{ year }}{% endcapture %}
  {% endif %}
  {% include archive-single.html %}
{% endfor %}