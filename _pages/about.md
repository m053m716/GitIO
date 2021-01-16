---
permalink: /
title: "Home"
date: 2021-01-16
excerpt: "About me."
author_profile: true
redirect_from: 
  - "/home/"
  - "/home.html"
  - "/about/"
  - "/about.html"
---

{% include base_path %}

## About Me ##
I am a full stack engineer working at the intersection of neuroscience and mechatronics to develop novel therapeutic interfaces capable of integrating multimodal sensory information. 

For my doctorate, I studied motor recovery from stroke in a **[rat reaching model](https://m053m716.github.io/files/Whishaw-and-Pellis_1990_Structure-of-rat-reaching.pdf)** in the lab of **[Randy Nudo](https://scholar.google.com/citations?user=TlPPA0UAAAAJ&hl=en&oi=sra)** at the **[University of Kansas Medical Center](https://bioengr.ku.edu/)**. My doctoral **[thesis](https://m053m716.github.io/files/Murphy_2020_thesis_Sensorimotor-recovery-from-stroke.pdf)** looks at how the **[neural population dynamics](https://www.nature.com/articles/nature11129)** change as the rat improves at pellet retrievals. 

---

### News ###
{% include base_path %}
{% capture written_year %}'None'{% endcapture %}
{% for post in site.news reversed %}
  {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
  {% if year != written_year %}
    {% capture written_year %}{{ year }}{% endcapture %}
  {% endif %}
  {% include archive-single.html %}
  
  ---
{% endfor %}