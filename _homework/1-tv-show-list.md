---
layout: homework
number: 1
title: 'TV Show List'
subtitle: 'Homework 1'
deadline: "Mar 18"
turnin: "https://forms.gle/LWg4agQmRX8DyCar7"
github_assignment: "https://classroom.github.com/a/m25Yc5ar"
description: "In this homework, you will be practicing the HTML and CSS that we learned in lecture. You are given screenshots and a description of a specific web page to replicate. You will recreate the web page exactly as shown in the provided screenshots."
display: true
solution: true
---

* TOC
{:toc}

<section class="part" markdown="1">
## Getting started

### 1. Accept the HW1 assignment
{:.no_toc}

- [Follow this link]({{ page.github_assignment }}), where HW1 is stored on GitHub Classroom.
- Accept the homework and download the starter code as you did in [Homework 0]({{ site.baseurl }}/homework/0-welcome).

</section>


<section class="part" markdown="1">
## Overall appearance

Here is a miniature screenshot of the website you need recreate in this homework:

{% include screenshot.html src="hw1/1.png" %}

A full-size screenshot of the entire page is linked below:
- [Full-size screenshot]({{ site.baseurl }}/assets/images/hw1/1.png)

**Note that you do not have to type in the contents of the page.**
- The text of the article is contained within `tv-shows.txt`, which is included in your Homework 1 starter code.
- Copy and paste the text of `tv-shows.txt` into your `index.html` file, then add the HTML tags necessary to style the page.
- The images are also in the `images/` directory of the Homework 1 starter code.
</section>


<section class="part" markdown="1">
## Section measurements

{% include img.html src="hw1/2.png" %}
</section>


<section class="part" markdown="1">
## Font faces, sizes, and colors

**Page Title:**
{% include img.html src="hw1/3.png" %}
- The font face is `'Roboto Slab'` and the fallback font is `serif`.
- The font size is `36px`.
- The font weight is `normal` (not bold).
- The font color is `white`.
- The title is vertical and center aligned to the header image.

**Profile Text:**
{% include img.html src="hw1/4.png" %}
- The font face is `'Source Sans Pro'` and the fallback font is `sans-serif`.
- The font size is `18px`.
- The font weight for the author name ("Murilo Camargos") is `bold`
- The font color is `rgb(51, 51, 51)`.

**Body Text:**
{% include img.html src="hw1/5.png" %}
- Heading
  - The font face is `'Roboto Slab'` and the fallback font is `serif`.
  - The font size is `36px`.
  - The font weight is `bold`.
  - The title color is `rgb(51, 51, 51)`.
- Address
  - The address under the heading is a link and is described in the [Links section](#links).
- Paragraphs
  - The font face is `'Source Sans Pro'` and the fallback font is `sans-serif`.
  - The font size is `18px`.
  - The line height `32px`.
  - The font color is `rgb(51, 51, 51)`.

**Genres list:**
{% include img.html src="hw1/6.png" %}
- The font face is `'Source Sans Pro'` and the fallback font is `sans-serif`.
- The font size is `18px`.
- The font weight is `bold`.
- The font color is `rgb(51, 51, 51)`.
- Each genre
  - The font color is `rgb(230, 181, 11)`
  - The background color is `rgba(230, 181, 11, 0.1)`
  - The font size is `16px`

**Season list:**
{% include img.html src="hw1/7.png" %}
- The font face is `'Source Sans Pro'` and the fallback font is `sans-serif`.
- The background color is `rgba(66, 180, 214, 0.05)`
- The border color is `rgba(66, 180, 214, 0.5)`
- You should use a component you don't know yet: `select`
  - The syntax is quite simple:

```
<select>
  <option value="valor-1">Valor 1</option>
  <option value="valor-2">Valor 2</option>
</select>
```
- To override the browser's default border behavior you can use `outline: none;`
</section>


<section class="part" markdown="1">
## Links

Here is a description of how links should work on your page:

- Each address of the page is a link. The URL for each link is listed in `tv-shows.txt`.
- The link color is `rgba(66, 180, 214)`.
- The link is not bold, and the link is not underlined unless you hover over the link.
- When you hover over the link, the link becomes underlined.
- Hints:
  - To remove an underline, you can use CSS property `text-decoration: none;`
  - To add an underline, you can use CSS property `text-decoration: underline;`
</section>


<section class="part" markdown="1">
## Images

- Header image
  - The header is a background image (`images/header.jpg`).
    - **Note:** To reference the image from the css/ folder, the path needs to be `../images/header.jpg`
  - The background does not repeat.
  - The background's size is set to `cover`.
  - The background position is anchored to the `top`.
  - Its height is `400px`.
  - There is a semi-transparent color overlay on top of the header image, which is `rgba(0, 0, 0, .3)`   
    - **Note:** You can achieve this using the following CSS rule:  
      `background-image: linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .3)), url(../images/header.jpg);`
- Profile image
  - The profile image is `images/profile.png`
    - **Note:** To reference the image from the css/ folder, the path needs to be `../images/profile.png`
  - Its width is `100px`.
  - It has rounded corners with radius `100px`.
</section>


<section class="part" markdown="1">
## HTML and CSS style requirements

For full credit, please abide by the following:

- **Use HTML and CSS we've learned in class.** You should be able to complete this homework using HTML and CSS we've learned in class through lecture 5 / Mar 16. While you are not strictly forbidden from using HTML/CSS we haven't talked about in class, if you use it incorrectly or if you make poor stylistic choices, you may be marked down.
- **Do not use JavaScript**. There's no need to use JavaScript in this assignment.
- **Respect Separation of Concerns**. Your HTML should describe the content of your page, and your CSS should describe your page's appearance.
- **Follow the best practices** that were described in lecture.
- **Reduce redundancy in CSS.** Try not to have too many redundant styles, if there are ways to use inheritance or special selectors to concisely define style rules.
- **Match the given appearance as closely as possible.** It's fine if your web page is off from our description by a few pixels here and there, but noticeable differences may result in a lower homework score.
- **Use descriptive names, consistent spacing,** and otherwise follow good code hygiene.

</section>


<section class="part" markdown="1">

## Submit

Upload your completed homework to your GitHub repository and publish them, in the same way that you did with [Homework 0]({{ site.baseurl }}/homework/0-welcome).

</section>