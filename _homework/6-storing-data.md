---
layout: homework
number: 6
title: 'Storing data in MongoDB'
subtitle: 'Homework 6'
deadline: "Jun 23"
turnin: "https://forms.gle/d5rcdfw2PZ25txtb7"
github_assignment: "https://classroom.github.com/a/dlr1CT_k"
description: "In this homework, you will be practicing how to store data from public APIs to a database system creating a communication channel between frontend and backend. For simplicity, the homework initial code provides all authentication features you'll need."
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
## Milestone 1

Read and understand how login and handlebars works. In this HW, you won't need to deal with authentication and handlebars templates, just use them. You can modify them if you want, of course.

- Authentication files:
  - `public/index-script.js`: manages login (`home.handlebars`) and app (`show.handlebars`) pages
  - `public/tracker-app.js`: manages our TV tracking app; this is the `app.js` file from previous HWs.
    - **Note**: If the user is not logged in, the page is redirected to `home`
  - `public/login-manager.js`: manages the google auth Api
- View files:
  - `views/home.handlebars`: login page HTML code
  - `views/show.handlebars`: app page HTML code; our previous `index.html`

I created a Google App to manage our logins. It provides me with a `CLIENT_ID` I can use to verify user data.
</section>


<section class="part" markdown="1">
## Milestone 2

In this Milestone, you should make your previous code work on this new starter-code (i.e., with authentication).

- Create a file named `.env` in your project's root folder with the following content
```
MONGODB_URI=mongodb://localhost:27017/my-tv
PORT=3000
```
    - these environment variables will be available in your JS code through the library `dotenv` (1st line of `app.js`)
- You should also start the MongoDB database:
  - Open CMD/terminal and go to MongoDB install folder: `cd C:\Program Files\MongoDB\Server\4.4\bin`
  - Run the command `mongo` and see if you can connect to `mongodb://127.0.0.1:27017/`
  - If you get a connection error, start MongoDB service:
    - Hit `Win + R`, then execute `services.msc`
      {% include img.html src="hw6/executar.png" %}
    - Find `MongoDB Server (MongoDB)`, click with right button, then `start`
    {% include img.html src="hw6/servicos.png" %}
- Then, add your public JS/CSS/images files from HW5 in `public`
- You must change `view/show.handlebars` accordinly with the content of your `index.html`
- You can also change `view/home.handlebars` if you want
- Test your code running the app with `npm start`
</section>

<section class="part" markdown="1">
## Milestone 3

In this milestone you will create the database schemas to model the information you'll need to store. I created three of them to serve as example so you can create yours:
  - `schemas/user-schema.js`: stores user info (Name and Email)
  - `schemas/show-schema.js`: stores show info (TVMaze ID and Name) and you'll need to store more than this!
  - `schemas/watched-show-schema.js`: stores a link between a logged user and a saved show
    - Our app may have multiple users, the show itself does not have an owner, but you need to keep track of the shows eash user watches.
- You should create other schemas to model the information you want to store (eg. seasons, episodes, watched episodes)
- **Note**: a show have a list of seasons, you can create this type of relation very easily with mongoose
  [https://mongoosejs.com/docs/schematypes.html#what-is-a-schematype](https://mongoosejs.com/docs/schematypes.html#what-is-a-schematype)
- **IMPORTANT**: you don't need to follow this path. You may remove all created schemas and make your own!
</section>

<section class="part" markdown="1">
## Milestone 4

Now, you need to make your front-end (in `/public` folder) communicate with the back-end
- I added two sets of routes for you:
  - `routes/display.js`: two endpoints to render either the login page or the shows page (in `/views` folder)
  - `routes/api.js`: all endpoints that will receive/deliver messages from the front-end and query/store them into our database
- You must create the endpoints required to list and add new TV shows, seasons and episodes to the database
  - We created an example (`http://localhost:3000/api/show`) that will query all the watched tv shows from the logged user and send them back as a JSON
    - **Note**: A show have seasons, this is modeled in the database as a list of season IDs, to get the full information of a season ID, you can *populate* the query instead of creating multiple queries to the database.
    [https://mongoosejs.com/docs/populate.html](https://mongoosejs.com/docs/populate.html)
  - The front-end must fetch this endpoint sending the logged `userToken` as a query parameter
- Example of functionality: if a user add a show via search bar, your back-end must add the show info on the Show schema but also add an entry to the WachedShow schema so when the user logs out and in again, the information is preserved.
</section>



<section class="part" markdown="1">

## Submit

Upload your completed homework to your GitHub repository and publish them, in the same way that you did before.

</section>