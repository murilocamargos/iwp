---
layout: homework
number: 5
title: 'Showing data with D3'
subtitle: 'Homework 5'
deadline: "Jun 03"
turnin: "https://forms.gle/xP2rzX9pdW4YH5C29"
github_assignment: "https://classroom.github.com/a/q5KYe4gx"
description: "In this homework, you will be practicing how to bind data to the document using D3 to create charts. You are given videos and a description of a specific web page to replicate. For simplicity, the homework initial code is the HW 3 code; you can also use your own structure."
display: true
---

* TOC
{:toc}

<section class="part" markdown="1">
## Getting started

### 1. Accept the HW{{ page.number }} assignment
{:.no_toc}

- [Follow this link]({{ page.github_assignment }}), where HW{{ page.number }} is stored on GitHub Classroom.
- Accept the homework and download the starter code as you did in previous homework.
- **Note**: in this homework you will be graded not only according to the requirements but also the milestones you are able to complete!

</section>


<section class="part" markdown="1">
## Overall appearance

The overall appearance is the same as the previous homework. However, you will add two graphs using the D3 library to show the time spent grouped by genre. You are **completly** free to change anything regarding colors, style, positions and design.

<iframe width="100%" height="400" src="https://www.youtube.com/embed/aVWY1FGqzKo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</section>

<section class="part" markdown="1">
## Milestone 1

The first milestone of this homework consists in creating two SVG graphs between the Time Keeper and the Show list. The graph container must occupy 70% of the page's width while each SVG figure will ocupy 48% of the container's width.

{% include img.html src="hw5/boxes-width.png" %}

**Hint**: use the `viewBox` property to be able to automatically resize your image without losing information.
- [https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox)
- [https://css-tricks.com/scale-svg/](https://css-tricks.com/scale-svg/)
</section>

<section class="part" markdown="1">
## Milestone 2

The second milestone is to create the bar chart that accounts for the **total** time spent grouped by genre.
- You must print the genre names
- It is **not** required that the bars are ordered
- You must implement the interactive behavior to display the total time spent for each genre when the user hovers the mouse over the bars:
  - **Hint**: use the `on` method in D3 to catch events such as `mouseover` and `mouseout`. You can use these events to change the opacity of the tooltip.
  {% include img.html src="hw5/bar-chart.png" %}
You are **completly** free to change anything regarding colors, style, positions and design.
</section>

<section class="part" markdown="1">
## Milestone 3

The third milestone is to create the donut chart that accounts for the **relative** time spent grouped by genre.
- You must implement the interactive behavior to display the relative time spent for each genre when the user hovers the mouse over the arcs:
  - **Hint**: use the `on` method in D3 to catch events such as `mouseover` and `mouseout`. You can use these events to change the opacity of the tooltip.
  {% include img.html src="hw5/donut-chart.png" %}
You are **completly** free to change anything regarding colors, style, positions and design.
</section>

<section class="part" markdown="1">
## Milestone 4

The last milestone will require you to update both graphs upon data change: episodes checked by users.

</section>


<section class="part" markdown="1">

## Submit

Upload your completed homework to your GitHub repository and publish them, in the same way that you did before.

</section>