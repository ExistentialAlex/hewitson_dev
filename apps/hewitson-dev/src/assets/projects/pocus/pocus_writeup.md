<p align="center"><img src="assets/projects/pocus/pocus_logo.svg" /></p>
<div align="center"><h1><u>Pocus</u></h1></div>

## Context

Over the lockdown of 2020 I had to find ways to stay focussed with the transition to working from home.

One thing that helped me do this was using pomodoro timers as a way to monitor when to work and when to take breaks. There are an incredible amount of tools that allow you to do this, from integrations in To-Do list apps like Tick-Tick or simple configurable timer apps that you can download. I tried quite a few of these but wanted something that was clean and simple to use for my day-to-day work and the opportunity to try out some new technologies in the process; thus I decided to make my own pomodoro timer using <a href="https://svelte.dev/" target="_blank">Svelte</a>.

## Prototyping

Before starting this project I created a basic mockup of what I wanted in codepen. The layout is simple, if in-elegant, using flex-box to position the timer in the center and then patching it together using basic html, css and javascript after that. The final result was a working timer that could be configured to different timer lengths and gave me a template to work from for creating a final app.

<img src="assets/projects/pocus/pocus_img0.png" width="100%">

You can view the initial prototype <a href="https://codepen.io/existentialex/pen/VwpvENM" target="_blank">here</a>

## Developing

I'd done some reading around Svelte and how it ditched the idea of using a virtual DOM to interact with the UI but didn't know too much other than that. I did some reading on the official site and dug briefly through the docs and the live editor to get to grips with some of its basic features. Overall it offered a similar suite of tools to Angular, though without a log of the boiler-plate and structure that Angular provides.

I don't touch on many of the features that Svelte offers, given the simplicity of the application that I was trying to build, however it was pleasent to dive into a new flavour of javascript framework. I found the lack of structure a little off putting at first, but quickly got to grips with the basics of interacting with the DOM and working with the .svelte files.

Unfortunately I found that performing certain operations proved to be a bit clumsy, which could be due to the lack of structure usually provided by the class syntax in Angular for example; I prefer this as it provides a certain amount of seperation of key parts of the application. If I had to develop it again I would split the application out into separate components to offer the same.

Overall it was a pleasant experience developing in Svelte and it would be nice to develop something a bit more complex with it, as given the scale of what I was trying to build it was a bit overkill to use a javascript framework but was fun nonetheless and made interacting with the UI easier.

## UI Aspects

I wanted to go for a minimal UI, with the focus being on the timer itself and having the interaction be as seamless as possible. This was also true for the settings, I wanted these to slide up from the bottom and then be hidden away quickly; I used CSS transitions to achieve this and I'm happy with the effect given the simple code.

<img src="assets/projects/pocus/pocus_img2.png" width="100%">

I stuck to a basic colour pallette and used this throughout to highlight the main elements at play. I'm happy with the choice of colours and it's encouraged my to create my own component library that I can use in projects going forward.

## Deploying

I chose Vercel as my deploy target as it was a service I hadn't used before and wanted to explore how I could use it in other projects in the future. I found the experience pretty painless and it made deploying the each subsequent version incredibly simple; even allowing me to simply push to master and have it automatically built and deployed.

In future I will definitely consider vercel for deploying small projects.
