---
layout: "../../layouts/BlogPost.astro"
title: "Second Post"
description: "Hello!"
pubDate: "Oct 11 2023"
heroImage: "/placeholder-hero.jpg"
minutes: 1
tags: ["tech"]
---

This idea sprouted not too long ago, but I never really took it seriously until speaking with my friend about the potential *positive* sides to a website being available to the university like this. There are things people are not comfortable sharing if their label is attached to it, whether it be a confession, accusation, or idea, and this could be a platform for all of that to be free. I had only recognized the negative sides, and while there are many, the positive sides could create an impact that I would like to see across the university, and so I set forth on this mission of developing an anonymous image board for my university.

First, I looked at all of the different frameworks and templates available for a 4chan-esque imageboard. As it goes with open-source, the idea is always better than the execution.
> Why are they all so hard to use? Why are there so many npm errors? It baffles me that the last push to this repo was last week and yet there are seventeen outdated packages. It makes no sense!

I had no choice but to take it upon myself to create my own imageboard.
With not a drop of web development experience. Here's what it needed.

## Features

- No advertisements. I am not here to make money.
- Verification for students to prevent spam and outsiders
- Several boards, including /study/, /library/, /cougargrounds/, /frat/, and so forth
- Easy image uploads
- A team of moderators

First things first. We need a name. Playing on it's inspiration, I decided to go with [****Chan].

## Tech

[****Chan] will use a number of technologies to work properly:

- [markdown-it] - Markdown parser done right. Fast and easy to extend.
- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework [@tjholowaychuk]
- [MongoDB](https://mongodb.com/) - convenient database with easy setup

And of course a server host, perhaps Heroku? It is not decided yet.
I would also like to add [****Chan] is open source with a [public repository](https://github.com/arrrshia) on GitHub.

