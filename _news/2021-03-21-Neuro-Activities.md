---
title: 'Neuro-Activities'
date: 2021-03-21
collection: 'news'
permalink: /posts/2021/03/Neuro-Activities/
tags:
  - blog
  - neuroscience
  - outreach
  - service
---

### Neuro-Activities ###
One of the graduate students at our lab [(Monica)](https://mfliu.github.io/) made **[this](https://mfliu.github.io/neuroActivities)** really cool website with interactive neuroscience activities for teaching key concepts related to some of the more abstract parts of research going on in motor systems neuroscience.

#### Center-Out Task #####
I made a fork of her repository and added some **[minor adjustments](https://m053m716.github.io/neuroActivities/activities/stateCoding/stateCoding.html)** to simulate some parts of the NHP task I'll be using for my research. This state-coding demo is still a work-in-progress, but the objective is to illustrate how we can play on the expected movements of the virtual cursor to test hypotheses about how individuals control movement. Currently, there is a jitter component that will eventually include a slider to scale the magnitude of the cursor jitter in order to inhibit feedforward prediction of where the cursor will be as the mouse moves. After a limited number of trials, the cursor movements are perturbed using a fixed angular offset, which the brain realizes relatively quickly and corrects on ensuing trials. Eventually, I would also like to add functionality that gradually weans reliance on visual position of the cursor in order to collect pilot data on how well uninstructed individuals are able to correct for the perturbation in the absence of visual feedback (I suspect that it will be quite difficult, but may be facilitated by allowing a very brief indication of how the perturbation is influencing motion).
  