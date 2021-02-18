---
layout: page
title: Homework
permalink: /homework/
active: 'homework'
---

This page contains the homework assigned in lectures.

---

{% for hw in site.homework %}
## Homework {{ hw.number }}
- [Homework {{ hw.number }}: {{ hw.title }}]({{ site.baseurl }}{{ hw.url }})
- Due to **{{ hw.deadline }}**
{% endfor %}