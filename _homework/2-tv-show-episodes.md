---
layout: homework
number: 2
title: 'TV Show List (JS)'
subtitle: 'Homework 2'
deadline: "Mar 30"
turnin: "https://forms.gle/HvALEHsgrQXpsYTV9"
github_assignment: "https://classroom.github.com/a/qjw-MrIN"
description: "In this homework, you will be practicing the JS we learned in class. You are given screenshots and a description of a specific web page to replicate. Most of the page style and appearance was already done in Homework 1. In this homework you will exercise some concepts of responsive web design and event-driven programming."
display: true
solution: true
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

Here is a miniature screenshot of the website you need recreate in this homework:

{% include screenshot.html src="hw2/whole_page.png" %}

A full-size screenshot of the entire page is linked below:
- [Full-size screenshot]({{ site.baseurl }}/assets/images/hw2/whole_page.png)


**Note the differences from Homework 1:**
- For each season of each show you have an episode list; each one of them has image, title, description, air date and duration.
- You also have a top disclaimer to show how much time you spent watching all those episodes.
- The content for shows and episodes are in the `constants.js` file.
- You should use the `style.css` you've made in the previous homework with small changes.
- Only the `head` section of the `index.html` should be modified to meet the criteria. **That means that all content should be inserted in the DOM through JS**.
- The images are also in the `images/` directory of the Homework 1 starter code.
</section>


<section class="part" markdown="1">
## Section measurements

### Total time spent
- The `Total Time Spent` block has the same `width` as the show list block, which is `70%` of the **page**.
- It has a `margin` of `60px` in the vertical direction.
- Between the title `Total Time Spent` and the actual value of the time spent, there is as much space as it fits.
{% include img.html src="hw2/total_time_spaces.png" %}

### Episode spacing
- Each episode component should have a `margin` of `15px` in the vertical direction.
- The space between the `checkbox` and the episode's title is `10px`.
- The image takes `25%` of the block's total width and the content takes the rest of it (`75%`, **including the padding**)
{% include img.html src="hw2/episode_space.png" %}

</section>


<section class="part" markdown="1">
## Font faces, sizes, and colors

**Total time spent title:**
{% include img.html src="hw2/font_total_time.png" %}
- The font face is `'Roboto Slab'` and the fallback font is `serif`.
- The font size is `27px`.
- The font weight is `bold`.
- The font color is `rgb(51, 51, 51)`.

**Season title:**
{% include img.html src="hw2/font_season.png" %}
- The font face is `'Roboto Slab'` and the fallback font is `serif`.
- The font size is `27px`.
- The font weight is `bold`.
- The font color is `rgb(66, 180, 214)`.

**Episode block text:**
{% include img.html src="hw2/font_episode.png" %}
- Title
  - The font face is `'Source Sans Pro'` and the fallback font is `sans-serif`.
  - The font size and weight:
    - The font size is `1.17em`.
    - The font weight is `bold`.
    - Note: you can get this features "for free" using `h3` tag.
  - The title color is `rgb(51, 51, 51)`.
- Date
  - The font face is `'Source Sans Pro'` and the fallback font is `sans-serif`.
  - The font size is `14px`.
  - The font weight is `normal`.
  - The title color is `gray`.
- Description
  - The font face is `'Source Sans Pro'` and the fallback font is `sans-serif`.
  - The font size is `18px`.
  - The line height `28px`.
  - The font color is `rgb(51, 51, 51)`.
</section>

<section class="part" markdown="1">
## Provided files

`index.html`  
- You will need to change some itens in the `head` section of your HTML.
- You should not change the `body` section of the provided `index.html` file.
- Everything must be added through JavaScript using DOM manipulation.

`style.css`
- You can start off using the `style.css` you created for Homework 1.
- Change the file to style the new comonents.
- Use relative font-sizes with media queries to make the page responsive.

`constants.js`
- This file contains the definition of the object `TV_SHOWS` with all information on TV Shows.
- Because this variable is declared in the global scope, you can access this variable in `script.js`.
- You should not have to modify this file to solve the homework.

`script.js`
- This is the file in which we expect you to implement the page behavior.
- You should define and attach event listeners in this file.
</section>


<section class="part" markdown="1">
## Interactive components

### The `select` element for TV shows seasons.
- When selecting a season from a given TV show, all the season information of that TV show must be hidden, except the selected season.
{% include img.html src="hw2/select_season.png" %}

### The `checkbox` for 'Marcar todos'.
- When checking the "Marcar todos" `checkbox`, all individual checkboxes for each episode of that TV show season must be checked.
- Upon the unchecking event, all must be unchecked as well.
{% include img.html src="hw2/check_all.png" %}

### The relation between the `checkbox` elements and the total time spent
- When checking a single `checkbox`, or even from the "Marcar todos" `checkbox`, you should sum the each episode's runtime to compute the total time spent watching all checked episodes.
- The runtime of each episode is available in the `constants.js` file.
- Hint: you can take advantage of the `data-` attributes.
{% include img.html src="hw2/time_spent.png" %}
</section>


<section class="part" markdown="1">

## Submit

Upload your completed homework to your GitHub repository and publish them, in the same way that you did with [Homework 0]({{ site.baseurl }}/homework/0-welcome).

</section>