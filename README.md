# DUMP THE CHUMP!
![DUMP THE CHUMP!](https://github.com/LosGimenos/dumpthechump/blob/gh-pages/img/screens/Screen%20Shot%202016-09-05%20at%209.25.11%20PM.png?raw=true)

---
SuperFresh dance game built with HTML, CSS, and JavaScript.

This project started by watching disembodied divs fly around with CSS animations. Thanks to the brain's natural ability to want to turn things into people, odd shapes and proportions work just fine. I started with sketching some animations on divs; placing divs in other divs for more options. In time, I had a person that could move around via keystroke. Great. What in the world was I going to do with that in terms of a game?

![DUMP THE CHUMP!](https://github.com/LosGimenos/dumpthechump/blob/gh-pages/img/screens/Screen%20Shot%202016-09-05%20at%209.26.39%20PM.png?raw=true)

I decided that I would have the game itself tell you what it wanted. I created a prompt engine that would randomize moves and body parts. It would be up to the player to get them right and earn points. I then thought, 'Hey! I like bonuses!'. So there is an option to hit a hot move if you score enough correct moves in a row. Hitting the button then sends you flailing around by animating the entire player. This makes landing moves more difficult but you also earn more points for successful while going ham. When the timer is over the game will judge you based on performance and let you know just how it feels about you...
![DUMP THE CHUMP!](https://github.com/LosGimenos/dumpthechump/blob/gh-pages/img/screens/Screen%20Shot%202016-09-05%20at%209.27.05%20PM.png?raw=true)

The game was just the dancy part at first so I developed an opening splash and a little tutorial to glance at before the game actually started. Doing this basically broke everything in the game. Apparently JavaScript makes references to things at a certain point in time and they are sometimes frozen that way forever and ever. Most of my declarations went kaput. I ended up moving them into methods themselves so as to generate some fresh versions. 
![DUMP THE CHUMP!](https://github.com/LosGimenos/dumpthechump/blob/gh-pages/img/screens/Screen%20Shot%202016-09-05%20at%209.25.31%20PM.png?raw=true)

---

## Installation
Nothing to install. Works right from the browser.

---

## Challenges
Hooboy...After SplashScreenPocalypse I took it easy on the additions. I still can't get points to score on the fly. Instead, they are assessed at the end of the turn. Likewise, I'm currently unable to just reset the current instance of the game without descending into some strange object within object universe from whence we will never return again. Even after clearing everything that the Game object created...I think I had about 20 running at the same time. Maybe that should be the game? In this iteration resetting means just a soft refresh taking you back to the awesome splash screen again. 

