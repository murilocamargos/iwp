---
layout: homework
number: 3
title: 'Classes and Animations'
subtitle: 'Homework 3'
deadline: "Apr 8"
turnin: "https://forms.gle/3safY87tUBc9Uz7u5"
github_assignment: "https://classroom.github.com/a/A9tPGmPI"
description: "In this homework, you will be practicing the JS we learned in class. You are given videos and a description of a specific web page to replicate. In Homework 1 you wrote most of the HTML and CSS; in Homework 2, you wrote the JS code to render all components through DOM manipulation. In this homework you will organize your JS code using ES6 classes, use CSS animations and exercise the use of pointer events."
display: false
---

* TOC
{:toc}

<section class="part" markdown="1">
## Getting started

### 1. Accept the HW{{ page.number }} assignment
{:.no_toc}

- [Follow this link]({{ page.github_assignment }}), where HW{{ page.number }} is stored on GitHub Classroom.
- Accept the homework and download the starter code as you did in previous homework.

</section>


<section class="part" markdown="1">
## Overall appearance

The overall appearance is the same as the previous homework. However, the behavior will be much more interactive. See below two videos: the behavior in a browser and the behavior in a small screen (e.g. mobile):

<iframe width="100%" height="400" src="https://www.youtube.com/embed/eoiftwplDW4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="100%" height="400" src="https://www.youtube.com/embed/e853rCErEYk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</section>

<section class="part" markdown="1">
## The class scheme

Before getting your hand dirt with all the interactive behavior in the video, you must organize your code from HW2. The work of breaking down your app into different components is already done:
- **App**: the main component of your application. It contains a header, a time-keeper and a list of tv shows.
- **Header**: the header of your app must contain the top image as well as the profile information.
- **TimeKeeper**: the time-keeper holds the total time spent in front of tv.
- **TvShow**: each tv show has some information and contains a list of seasons.
- **Season**: each season has some information and contains a list of episodes.
- **Episode**: each episode has some information.

{% include img.html src="hw3/oop_scheme.png" %}
</section>

<section class="part" markdown="1">
## The CSS animations

### Season choice
- When choosing a season, the information appears from below in `1s`.
- Its inactive state consists of `display: none`, no opacity and a `translateY(30%)` that changes the element's position in the Y axis.
- When the user actives that component by choosing from the `select` box, the `display` will be `block`, with the maximum opacity and no translate in the Y axis;
- **Hint**: use the `animation-fill-mode` to retain the style values from the last keyframe when the animation ends.

### Episode dragging
- Note that when the user releases a dragged episode, it smoothly returns to the original position.
- To achieve this behavior, you can set a `transition` on the changed CSS property (i.e. `transform`).

</section>


<section class="part" markdown="1">
## CSS backgrounds

You can use the CSS `background-` properties to achieve the results of **Marcar Todos** button and the **checked** state in the episode figure.

### The "Marcar Todos" button
- In the previous HW we used a checkbox. Now we need to replace this by the image of a gray "eye". This "eye" turns "green" when the user hovers or click on the element:
{% include img.html src="hw3/eye_btn.png" %}
- You can achieve this behavior by changing the `background-image` of the element in the CSS.

### The checked episode
- Whenever the user "checks" an episode as watched, instead of using checkboxes, this inforomation will be displayed with a "checked" icon on top of a transparent green background:
{% include img.html src="hw3/checked_ep.png" %}
- You can achieve this behavior by playing with positions and including an element of top the figure. Changing this element's `background-` properties is sufficient to create this effect.
- **Hint**: you can select elements in your CSS using the `data-` attributes. You can apply this overlay component on all elements with `data-watched=true`, for example.

</section>

<section class="part" markdown="1">
## Homework requirements

You are totally free to choose content, styles and programming patterns. However, in this homework, there are some general requirements:
- **One class definition per script file**: You should define one class per file.
- **No additional global variables**: For full credit, you may not add any additional global variables to your app, other than the existing app variable defined in `app.js`.
- **Use ES6 classes**: To complete this assignment, you do not need to know about other ways of creating objects, such as via `prototype`. You should practice using classes as described in lecture.
- **OO-design**: We are not going to grade on object-oriented design. We may award bonus points for particularly well-composed apps, but your main concern should be to get the functionality working.
- **Comments, variable names, etc.**: We are also not grading on general good coding style, such as having comments or using good variable names. However, we encourage you to practice good coding style.
- **CSS Animations**: You must use at least one CSS animation or transition.
- **Callbacks**: You must correctly use a callback at least once.

</section>


<section class="part" markdown="1">

## Submit

Upload your completed homework to your GitHub repository and publish them, in the same way that you did before.

</section>