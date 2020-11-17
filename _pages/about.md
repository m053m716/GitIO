---
permalink: /
title: "Home"
date: 2020-11-16
excerpt: "About me."
author_profile: true
redirect_from: 
  - "/about/"
  - "/about.html"
---

{% include base_path %}

## About Me ##
I just recently (2020-10-09) finished my PhD in Bioengineering. I studied motor recovery from stroke in a rat reaching model in the lab of Randy Nudo at the University of Kansas Medical Center. My thesis looks at how the neural population dynamics change as the rat improves at pellet retrievals. 

---

## News ##
{% include base_path %}
{% capture written_year %}'None'{% endcapture %}
{% for post in site.news reversed %}
  {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
  {% if year != written_year %}
    {% capture written_year %}{{ year }}{% endcapture %}
  {% endif %}
  {% include archive-single.html %}
{% endfor %}