---
layout: page
title: Homework
permalink: /homework/
active: 'homework'
---

This page contains the homework assigned in lectures.

---

{% for hw in site.homework reversed %}
{% if hw.display %}
## Homework {{ hw.number }}
- [Homework {{ hw.number }}: {{ hw.title }}]({{ site.baseurl }}{{ hw.url }})
- HW {{ hw.number }} Turn-in: [Submission Form]({{ hw.turnin }})
- Due to **{{ hw.deadline }}**
{% if hw.solution %}- Solution: [GitHub](https://github.com/murilocamargos/iwp/tree/main/pages/hw-{{ hw.number }}-solution) / [Live]({{ site.baseurl }}/pages/hw-{{ hw.number }}-solution){% endif %}
{% endif %}
{% endfor %}