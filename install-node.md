---
layout: page
title: Installing Node
permalink: /install-node/
active: 'install-node'
---
{% assign lvl = page.url | append:'X' | split:'/' | size %}
{% capture relative %}{% for i in (3..lvl) %}../{% endfor %}{% endcapture %}

This tutorial has sections covering the following topics:

* TOC
{:toc}

<section class="part" markdown="1">

## Installing Node.js

### 1) Download Installer for Node 14.17.0 LTS
{:.no_toc}

* Navigate to [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
* Select and download the installer for your operating system.
  * Most contemporary laptops will use a 64-bit distribution.
* **Click "Current"**: Latest features to download Node version 14.17.0.

{% include img.html src="install-node/download_page.png" %}

### 2) Just follow the installer instructions
{:.no_toc}


### 3) Testing Node.js
{:.no_toc}

* Open up Terminal (or your Windows command line interface)
* Type `node` after the command prompt and hit Enter
* You should get a JavaScript REPL, similar to the console in the Chrome inspector.
* Try a single line of JavaScript to test it out.
* Hit Ctrl-C twice to exit the REPL
* Run `node -v` in terminal and then make sure you have `v14.17.0` installed.

{% include img.html src="install-node/node-repl.png" %}
{% include img.html src="install-node/node-version.png" %}


### 4) Testing `npm`
{:.no_toc}

`npm` stands for `Node Package Manager`. Packages are like libraries. The Node runtime has provided a handy way of accessing, installing and managing these libraries.

* At the command line, type `npm` after the command prompt and hit Enter
* You should see the following:
  {% include img.html src="install-node/npm.png" %}

### 5) OPTIONAL: Install `http-server`
{:.no_toc}

The `http-server` command is the NodeJS equivalent of Python's `SimpleHTTPServer`. This is not necessary for our course, but you may find it useful in general.

* Download `http-server` by running `npm install http-server -g` at the command line.
* Documentation for `http-server`: `https://www.npmjs.com/package/http-server`
* You will see a progress bar and a bunch of text ouput.
* Spin up a local server by running `http-server` at the command line.
* You should see the following:
  {% include img.html src="install-node/http-server.png" %}
* Visit the address specified on the command line in your browser (in this case `http://127.0.0.1:8080`)
* You should see the following (note the node.js runtime in the red circle):
  {% include img.html src="install-node/http-server-browser.png" %}

</section>

<section class="part" markdown="1">

## Credits
{:.no_toc}

This tutorial was written by [Zach Maurer](https://web.stanford.edu/class/archive/cs/cs193x/cs193x.1176/install-node/).
</section>