---
layout: page
title: Lectures
permalink: /lectures/
active: 'lectures'
---

This page will contain the slides, notes, and example code pertaining to lecture.

* [Tentative Course Schedule]({{ site.baseurl }}/syllabus): See the roadmap for the semester.

---

### May 20: Back-end development: servers, nodeJS, npm and express.
- **Slides:** [lecture18.pdf]({{ site.baseurl }}/lectures/lecture18.pdf)
  - Servers
  - NodeJS
  - npm
  - Express
  - fetch() to localhost


### May 18: Interactions with D3.
- **Slides:** [lecture17.pdf]({{ site.baseurl }}/lectures/lecture17.pdf)
  - Interactions with D3
    - Listening for click events
    - Unidirectional data flow
    - Selecting marks by clicking or hovering
    - Capturing mouse motion to render text


### May 13: The general update pattern of D3.
- **Slides:** [lecture16.pdf]({{ site.baseurl }}/lectures/lecture16.pdf)
  - The general update pattern of D3
    - Another view on enter, update and exit
    - Animated transitions
    - Object constancy
    - Nested and single elements


### May 11: CSV files; Introduction to axes and scales.
- **Slides:** [lecture15.pdf]({{ site.baseurl }}/lectures/lecture15.pdf)
  - Making a bar chart with D3
    - Bind CSV files to SVG shapes
    - Introduction to axes and scales


### May 04: Scalable Vector Graphics; Data-driven Documents lib
- **Slides:** [lecture14.pdf]({{ site.baseurl }}/lectures/lecture14.pdf)
  - SVG: Scalable Vector Graphics
  - D3: Data-driven Documents
    - Selections
    - Data joins


### Apr 27: RESTful APIs; Fetch API; JS Event loop.
- **Slides:** [lecture13.pdf]({{ site.baseurl }}/lectures/lecture13.pdf)
  - Querying REST APIs
    - Form submission
  - Fetch API gotchas
    - CORS and Closures
  - Single-threaded asynchrony
    - JS Event loop


### Apr 20: Fetch API; JSON; Promises; REST API.
- **Slides:** [lecture12.pdf]({{ site.baseurl }}/lectures/lecture12.pdf)
  - Fetch
    - JSON
    - Fetch in an class
  - Promises
  - Querying REST APIs
    - Form submission
- **Code**:
  - [fetch-images]({{ site.baseurl }}/pages/fetch-images)
  - [tvmaze-search]({{ site.baseurl }}/pages/tvmaze-search)


### Apr 15: Functional JS; Fetch API; Introduction to Promises; JSON.
- **Slides:** [lecture11.pdf]({{ site.baseurl }}/lectures/lecture11.pdf)
  - Callbacks
  - Functional JavaScript
    - Closures
    - Anonymous functions
    - Closures
  - Loading data from files
    - Fetch API
    - Promises
    - JSON


### Apr 13: Callbacks; currying; closures; anonymous functions
- **Slides:** [lecture10.pdf]({{ site.baseurl }}/lectures/lecture10.pdf)
  - Callbacks
  - Functional JavaScript
    - Closures
    - Anonymous functions
    - Closures


### Apr 06: NO CLASS
- A1 week


### Apr 08: NO CLASS
- A1 week


### Apr 01: NO CLASS
- Semana Santa


### Mar 30: Classes; custom events; callbacks
- **Slides:** [lecture09.pdf]({{ site.baseurl }}/lectures/lecture09.pdf)
  - Classes and objects in JavaScript
  - `this` keyword and `bind`
  - Custom events
  - Callbacks


### Mar 25: CSS animations; classes; custom events; callbacks
- **Slides:** [lecture08.pdf]({{ site.baseurl }}/lectures/lecture08.pdf)
  - CSS animations
  - Classes and objects in JavaScript
  - `this` keyword and `bind`
  - Introduction to Custom events
  - Introduction to callbacks and functional programming


### Mar 23: Event propagation; casy study
- **Slides:** [lecture07.pdf]({{ site.baseurl }}/lectures/lecture07.pdf)
  - JS Events in detail
  - Other JavaScript events
  - Case Study: photo-album
- **Code**:
  - [key-events]({{ site.baseurl }}/pages/key-events)
  - [photos-start]({{ site.baseurl }}/pages/photos-start)
  - [photos-key-events]({{ site.baseurl }}/pages/photos-key-events)
  - [photos-touch-events]({{ site.baseurl }}/pages/photos-touch-events)


### Mar 18: More DOM; case study
- **Slides:** [lecture06.pdf]({{ site.baseurl }}/lectures/lecture06.pdf)
  - Adding and removing elements from DOM
  - Case Study: tic-tac-toe
  - Traversing the DOM
- [Homework 2]({{ site.baseurl }}/homework/2-tv-show-episodes) <span class="label">HW2 assigned</span>
- <span class="label">HW1 DUE</span>
- **Code**:
  - [html]({{ site.baseurl }}/pages/tic-tac-toe/index.html) / [css]({{ site.baseurl }}/pages/tic-tac-toe/style.css) / [js]({{ site.baseurl }}/pages/tic-tac-toe/script.js): Case study: tic-tac-toe.


### Mar 16: Introduction to JavaScript; DOM and events
- **Slides:** [lecture05.pdf]({{ site.baseurl }}/lectures/lecture05.pdf)
  - Start JavaScript
    - How to connect to HTML (<script defer>)
    - Language tour
    - Some form elements (input, textarea) and maybe how to style them
  - Basic event handling
  - Introducing the DOM: Document Object Model


### Mar 11: More flexbox and layout; position; Mobile web
- **Slides:** [lecture04.pdf]({{ site.baseurl }}/lectures/lecture04.pdf)
  - More flexbox: shrink and grow
  - `height`/`width` percentage quirks: `vh`/`vw` and `box-sizing`
  - `position`
  - Useful `background-image` properties
  - Mobile CSS
  - Relative sizes: `em` and `rem`
- **Code**:
  - [html]({{ site.baseurl }}/pages/bedford/index.html) / [css]({{ site.baseurl }}/pages/bedford/style.css): A rough copy of the Bedford Squarespace template. Be sure to inspect elements and view the source to see how it works!
  - [html]({{ site.baseurl }}/pages/bedford/index-mobile.html) / [css]({{ site.baseurl }}/pages/bedford/style-mobile.css): The mobile version of our Squarespace layout.


### Mar 9: CSS Box Model; Flexbox
- **Slides:** [lecture03.pdf]({{ site.baseurl }}/lectures/lecture03.pdf)
  - The CSS Box model
  - Debugging with Chrome Inspector
  - Case study: Squarespace Layout
  - Flexbox
- [Homework 1]({{ site.baseurl }}/homework/1-tv-show-list) <span class="label">HW1 assigned</span>
- <span class="label">HW0 DUE</span>


### Mar 4: Block vs inline; classes and ids; complex selectors
- **Slides:** [lecture02.pdf]({{ site.baseurl }}/lectures/lecture02.pdf)
  - Block vs inline
  - `div` and `span`
  - `class`es and `id`s
  - Combining selectors; cascading; inheritance
  - [Block vs inline guide](https://web.stanford.edu/class/archive/cs/cs193x/cs193x.1176/lectures/05/block-inline)


### Mar 2: Course overview and basic HTML/CSS
- **Slides:** [lecture01.pdf]({{ site.baseurl }}/lectures/lecture01.pdf)
  - Syllabus and course info
  - HTML and CSS basics: syntax; element selector
- [Homework 0]({{ site.baseurl }}/homework/0-welcome) <span class="label">HW0 assigned</span>