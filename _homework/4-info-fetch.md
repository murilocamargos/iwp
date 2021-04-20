---
layout: homework
number: 4
title: 'Using Fetch API'
subtitle: 'Homework 4'
deadline: "May 11"
turnin: "https://forms.gle/e5io5tQTFyGNQ4Rr8"
github_assignment: "https://classroom.github.com/a/teJ02YFa"
description: "In this homework, you will be practicing the how to fetch data from publicly available resources using the fetech API. You are given videos and a description of a specific web page to replicate. For simplicity, use the organization you create in HW 3."
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

The overall appearance is the same as the previous homework. However, the behavior will be much more interactive. See below two videos: the behavior in a browser and the behavior in a small screen (e.g. mobile):

<iframe width="100%" height="400" src="https://www.youtube.com/embed/eiZGN78aRhQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</section>

<section class="part" markdown="1">
## Milestone 1

The first milestone of this homework consists in adapting the code from the last HW to work with the new data format in the `constants.js` file. Altough the difference is small, it needs some adaptations.

- Check if your previous code work with the new `constants.js` and make the adjustments so they can work with it **without changing** the `constants.js` file.

- The summaries of both TV shows and episodes has some HTML code in it, basically to emphasize some words. **Assume that these are safe HTML tags** and display them.
    - *Hint*: check the difference between `textContent` and `innerHTML`.
    - {% include img.html src="hw4/innerhtml.png" %}

- Change the format of all dates from `yyyy-mm-dd` to `dd/mm/yyyy`.

- Take a look at the last episode of **The Witcher**; it is a special episode without a number. Add a fallback for `null` episode numbers replacing the pattern **S00E00** to the word **Special**.
    - *Hint*: create a function to format the episode name.
    - {% include img.html src="hw4/epname.png" %}
</section>

<section class="part" markdown="1">
## Milestone 2

The second milestone is to create the search form below the header title.

- The form container has `50%` of the page size with a space of `0.3em` between it and the `h1`. In mobile devices, the form container should have `90%` of the page's width.
    {% include img.html src="hw4/searchform.png" %}

- This form contains an `input` and a `button` HTML tags.
    - The `button` element should be a square with both `width` equal to `50px`. Use the provided file `lupa.svg` as a background to this button and tweak the CSS background properties to centralize this SVG image in the button and resize it to `25px`.
    - The `input` element should have the maximum allowed `width` respecting the container's width and the button width. Its `height` is `50px` with a `font-size` of `1.5em` and a `padding` of `5px 15px`.
        {% include img.html src="hw4/searchinput.png" %}
        - Take a look the the `placeholder` HTML property to put the word "Search" in the text box.
    - *Hint*: change the `outline` to override the default browser behavior on inputs and buttons. 

- **Be aware** of how the total container width and the paddings are related.
    - *Hint*: take a look at the `box-sizing` property.
</section>

<section class="part" markdown="1">
## Milestone 3

The third milestone consists of using the fetch API to fetch data from a public API instead of using a `constants.js` file. For our specific example, there is an available API provided by [TVMaze](http://tvmaze.com/). This API provides an **endpoint** for querying TV shows by name (string) at `http://api.tvmaze.com/search/shows?q=`; after `q=` you should provide the searched string. Example: [query the word Dexter](http://api.tvmaze.com/search/shows?q=dexter).  

- The user should be able to trigger your search function by clicking the search form button or hitting the Enter key. You should be listening to two events but avoid repeating code.

- The TVMaze API returns a JSON that should be processed to show the show list between the profile picture and the total time counter.
{% include img.html src="hw4/searchres.png" %}

- The results container has `70%` (`90%` in mobile devices) of the page's width, centralized with `auto` margins. It contains, among the results themselves, a title with the options of "closing" the list.
    - The title font weight should be `normal` with the `lightgray` color and a size of `1.6em`.
    - The closing button should use the `close.svg` as a background with both `background-size` set as `18px`.
        - Clicking on this button should remove the search results from the page.
        - *Hint*: you can use `innerHTML`.

- The result list is a box with `5px` rounded corners and a `solid` border with `1px` thickness and the `lightgray` color. For each result item, you should check the following aspects:
    - It must take the full container's width implementing a bottom border with `1px solid lightgray` (**except for the last item**).
        - *Hint*: Take a look at the [`:last-child`](https://developer.mozilla.org/en-US/docs/Web/CSS/:last-child) pseudo-class.
    - The show name must take the maximum width respecting both the container and the **add** button widths. It also has a `10px` padding in all directions.
    - The **add** button should use the `plus.svg` as a background with `background-size` set as `20px`.
        - The whole button size is set to `40px`.
</section>

<section class="part" markdown="1">
## Milestone 4

This milestone consists of opening the TV show image to help the users identifying the exact TV show found.

- The TV show name container must listen to a `click` event to open a modal with the show's image. This modal is exactly the same shown in the [pizza album example]({{ site.baseurl }}/pages/photos-start).
{% include img.html src="hw4/searchnamecontainer.png" %}

- Check if the black background covers the whole page and if the vertical scroll bar disapears.
{% include img.html src="hw4/searchmodal.png" %}
- You also need to implement a `click` event to close the modal.
    - Use `pointerevents` to allow a more responsive web page.

- There are some shows without an image associated with it. Implement a fallback for these cases showing the `no-image-show.png` instead.
</section>

<section class="part" markdown="1">
## Milestone 5

You should be able to "add" a searched TV show to your list. As in the contents coming from `constants.js`, you can have variables to store and share all info between classes. You have also implemented functions to render these info on the screen. In this milestone you'll use this structure to add new TV shows to your list.

- Please, note that the TVMaze API does not return the exact same structure shown in `constant.js`. Each TV show in `constant.js` have a `season` list. Each item of this list is an object with the `season ID` and the `episode` list. You'll need two API calls to create this structure:
    - The first API call will be made to `http://api.tvmaze.com/shows/{TVShowID}`, where `{TVShowID}` is the numerical ID the search process will give you. The result will be a JSON with every basic information except the `season` list. You should create this `key` manually in your object. Example: [Find Dexter's info](http://api.tvmaze.com/shows/161).  

    - The secont API call will be made to `http://api.tvmaze.com/shows/{TVShowID}/seasons`. The result will have general info about each season of this specific show. Example: [Find Dexter's list of seasons](http://api.tvmaze.com/shows/161/seasons). With this information you can create your `season` list composed by N objects with the following keys:
        - id: the season ID
        - episodes: an empty list of episodes
    
    - *Hint*: Use `Promisse.all` to chain the two asyncronous API calls and execute something after both of them are fullfiled.

- In case the user tryies to add an already existing TV Show, you should not add it again.

- The last add TV Show must appear in the top of the list.
    - *Hint*: we'va learn how to `append`  items in the DOM, but you can also `prepend` them.  

- **Note:** in this milestone you have basic info of a TV Show and the its season list. You **should not** have episode info yet.
</section>

<section class="part" markdown="1">
## Milestone 6

For the final milestone, you should be able to fetch episode info for each selected season. For a newly added show, you have a list of season objects with an ID and an empty episode list. We'll need to populate this empty list.

- You can query the episode list of each specific season in TVMaze API. For that you will create an API call to the `http://api.tvmaze.com/seasons/{SeasonID}/episodes` endpoint, where `{SeasonID}` is the numeric season ID found in the previous milestone. Note that this is the TVMaze Season ID, e.g. [Dexter's first season](http://api.tvmaze.com/shows/161/seasons), has the Season ID equal to `719`. Example: [Dexter's first season episode list](http://api.tvmaze.com/seasons/719/episodes).

- After getting the results you can create a new instance of you `Season` class and add the info to the DOM.

- If you already had the chosen episode list in memory, you should not have to query the API again.

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