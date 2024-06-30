---
permalink: /deprecated/about
title: "Home"
date: 2021-01-16
excerpt: "About me."
author_profile: true
redirect_from: 
  - "/deprecated/home/"
  - "/deprecated/home.html"
  - "/deprecated/about/"
  - "/deprecated/about.html"
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

## Calendars ##

<html>
<script>
    function openCalendar(evt, calName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++){
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(calName).style.display = "block";
        evt.currentTarget.className += " active";
    }
</script>

<div id="Work" class="tabcontent">
  <h3>Work Calendar</h3>
  <iframe src="https://exchange.andrew.cmu.edu/owa/calendar/4b5cd1db3d14429e9fab34fc7f67964f@andrew.cmu.edu/b0a1aa7acfc44c7a87080d082545e12d13403533102358856879/calendar.html"; height=600px; width=800px></iframe>
</div>

<div class="tab">
  <button class="tablinks" onclick="openCity(event, 'Work')">Work</button>
  <button class="tablinks" onclick="openCity(event, 'Personal')">Personal</button>
</div>

<div id="Personal" class="tabcontent">
  <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FKentucky%2FLouisville&amp;src=bWF4Lm11cnBoeTExQGdtYWlsLmNvbQ&amp;src=Yzhnb2xtcTlmcHJsM3M3djY5NDN0bnIzZWFqaTF0b29AaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;color=%23EF6C00&amp;color=%23ae4e00&amp;showPrint=0&amp;title=Max&#39;s%20Calendar&amp;showCalendars=1" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
</div>

</html>
