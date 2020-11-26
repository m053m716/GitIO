---
layout: archive
title: "Curriculum Vitae"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
  - /cv.html
---

{% include base_path %}
{% capture written_label %}'None'{% endcapture %}

---

## Education ##
* B.S. in Biology, Stanford University, 2011
  + 2-time All-American (Fencing)
* Ph.D in Bioengineering, University of Kansas, 2020
  + Thesis: *Neurophysiological mechanisms of sensorimotor recovery from stroke*

---

## Skills ##
* Full stack neurophysiology engineer
  * CAD for physical device design
  * FPGA/microcontroller for closed-loop
  * C/C++ real-time GUI
  * Simulink for simulation and state control
  * Matlab/Python/Tableau for analysis
  * CSS/JS for web design
* Rat pellet retrieval motor model

---

## Work experience ##
### 2014 - 2020: Graduate Research Assistant, KUMC ###
* Cortical Plasticity Lab
  + PI: Randy Nudo
  + Supervisor: David Guggenmos
* Developed data pipelines from "the edge" to "the cloud."
* Applied control systems models to cortical activity in relation to motor rehabilitation.

### 2013 - 2014: Research Technician, Lawrence KS ###
* Identigen North America
  + Supervisor: Stacie Eliades-Becker
* Assisted in installation of high-throughput tape-based liquid-handling system.
* Day-to-day involved conducting SNP-genotype array tests for bovine heritage.

---

## Publications ##

  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

---
  
## Talks ##
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html %}
  {% endfor %}</ul>

---

## Service ##
See my thoughts on service **[here](https://m053m716.github.io/posts/2020-11-16-Service)**. In general, I am happy to assist those who come to me with honest questions or to collaborate and assist in any capacity that I am able given constraints of time and bandwidth.

---