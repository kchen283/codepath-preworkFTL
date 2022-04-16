# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Keri Chen**

Time spent: **6** hours spent in total

Link to project: (https://vivid-phrygian-gazelle.glitch.me/)

## Required Functionality

The following **required** functionality is complete:

* [ ] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [ ] "Start" button toggles between "Start" and "Stop" when clicked. 
* [ ] Game buttons each light up and play a sound when clicked. 
* [ ] Computer plays back sequence of clues including sound and visual cue for each button
* [ ] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [ ] User wins the game after guessing a complete pattern
* [ ] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [ ] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![Screen Recording 2022-03-29 at 8 32 26 PM](https://user-images.githubusercontent.com/64931036/160746890-1fc3395d-d9dd-43f1-88ab-d60a7082a841.gif)
)
!![Screen Recording 2022-03-29 at 8 41 31 PM](https://user-images.githubusercontent.com/64931036/160747174-1238408b-78ca-4227-83c1-fe5cfe108897.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
Used stackOverflow, geeksforgeeks, w3schools for reference. 
https://tutorial.eyehunts.com/js/javascript-setinterval-method-stop-loop-examples/
https://modernweb.com/audio-synthesis-javascript/

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
A challenge I faced was getting the drum sound sequence to work correclty and only play through it once. I don't know a lot about Audio Context and how it works, so I had to research more about that and how that works. First I had to research how maps worked in Javascript, since I was only familiar with how it works in Java, and then I had to figure out how to create an array within the map for the different drum sound sequence. Then, I experimented around with calling the sounds from the array to see how it worked, and what I would need to do. I searched up some more things, and found out a function called setInterval and setTimeout, which would allow me to call the function multiple times or wait a certain amount of time before calling the function. Another issue I had with this was that for the html section 'onmouseup' for the drum button it would be hard to play the full sequence within the allocated time of the user since it's hard to say how long they will hold it for, so I deleted this part and just changed 'onmousedown' to the new and separate drum function I made. 


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
Some questions I have about web development is one, how the computer is able to generate the sounds and tones based off the numbers that is given to them. I suspect that there must be a pre-determined range of numbers that is possible, which then gives the computer/webpage the abilty to then produce the default tones. Another question I have is would it be possible to create a software where you type in a certain phrase, like "draw a box with the title: Welcome" and then through the programming, the computer would be able to then translate that into a different aspects of a webpage. Additionally, when creating webpages and the different types of code that go along with it, how does one know exactly what types of functions to write and if it is more efficient to write it in as html or css, or something else. And besides the 3 main coding language for web development, are there other types that are used in conjunction to help create websites.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
If I had a few more hours, I would like to make my code more efficient and neater, so there is less repeititiveness and it looks cleaner overall. I would also love to add some other fun animations in the background or for the buttons when they are clicked. I would also want to clean up the overall design of the website and make it look more asthetic, so the heading and title blend in together with the background like they are one cohesive unit instead of different elemements kind of mashed up together. The last feature I want to add is to make the timer look better by having it in a box like the header, and have it more bolded and kind of popping out of the page to make it stand out more. 


## Interview Recording URL Link

[My 5-minute Interview Recording](https://youtu.be/cgv1QeRaLTc)


## License

    Copyright [Keri Chen]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
