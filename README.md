# Harry Potter Quiz

### Welcome to the Harry Potter Quiz App. Test your magical knowledge with a collection of enchanting questions from the world of Harry Potter.

### The purpose of this project is to provide an engaging and fun way for Harry Potter fans to challenge their knowledge of the series by answering some random questions in a quiz app.


<hr>

# Features
- The logo: This project features a Harry Potter-themed logo at the page's header, complete with a font reminiscent of the iconic style used in the movies, and it displays the text 'Harry Potter Quiz.' Its aim is to immerse the user in an authentic Harry Potter experience.

- Color gradient background: The entire page is adorned with a continuous gradient background, smoothly transitioning between different colors from top to bottom. This design choice is intended to provide the user with a visually pleasing and enjoyable experience while doing the quiz.

- Quiz-module: The centerpiece of this application is the quiz module. It commences with a 'start quiz' button, followed by a sequence of 15 unique questions derived from the Harry Potter series. Each question presents four answer choices, and upon selection, it visually indicates correctness with either a green or red color. Subsequently, a 'next question' button appears after each question response, guiding the user to the subsequent question. Upon reaching the final question, this button transforms into a 'restart quiz' option, allowing users to begin the quiz anew.

- Footer: At the bottom of the page, underneath the quiz-module, there is a footer-section with 3 icons - Instagram, GitHub and a LinkedIn icon with internal links that open in a new tab. These links takes the user to the creater of the quiz-app (me, the developer).

<hr>

# Browsers and testing

<hr>

###

# Bug Details

Here are the details of the resolved bugs:

Describe the bug and the steps to reproduce it.
Explain how the bug was resolved, including any code changes or fixes.
Discuss the impact of this bug on users and the importance of the fix.

### Bug 1
- When I enlarged the quiz-section and the Harry Potter logo, it all pushed the content on top of the footer. This was not desired and I first tried to apply "padding-top: 60px;" in the footer to give it some space. This did not solve the issue since it created space for the footer, but it was not transparent like it sohuld be. But then I added "margin-top: 60px;" instead and this fixed the issue.

### Bug 2
- Another problem was a UX/design problem and that was when I added the background colors for the buttons to green and red, it was disturbing to have a hover background color to white since it removed the red/green color. This resulted in the fact that if you answered correctly, the button did not turn green if you had your mouse/pointer on it. I removed the hover effect and I settled with a border-color instead on the hover.

### Bug 3
- When I deployed my project early, it all looked like it should on my desktop but on my iphone IOS the text in the buttons were blue but on the desktop version they were black. Apperently, IOS sets button colors to a initial blue color. Also buttons on IOS dont have border-color but on my chrome and windows they did. This was fixed by first adding a border-color of black with 2px thickness and finally I had to specify the color inside of the buttons to black, so that it would "overwrite" the default styling from the IOS-units. This fixed the issue.

<hr>

# Lighthouse

<hr>

# Validator testing

- CSS: 

- HTML: 

- JavaScript: 

# Deployment

<hr>

# Credits

<hr>

### Media

