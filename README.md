# Classic Arcade Game Clone Project

## Table of Contents

-   [Instructions](#instructions)
-   [Getting Starter code](#getting-starter-code)
-   [Run the Game](#run-the-game)
-   [How to Play](#how-to-play)
-   [Contents of the Project](#contents-of-the-project)
-   [Project Dependencies](#project-dependencies)
-   [Contributing](#contributing)

## Instructions

Use this [rubric](https://review.udacity.com/#!/rubrics/15/view) for self-checking your submission.

Make sure the functions you write are **object-oriented** - either class functions (like `Player` and `Enemy`) or class prototype functions such as `Enemy.prototype.checkCollisions`. Also make sure that the keyword `this` is used appropriately within your class and class prototype functions to refer to the object the function is called upon.

Your **README.md** file should be updated with instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

## Getting Starter code

-   Download the starter code from
-   Arcade Game project repository on GitHub : <https://github.com/udacity/frontend-nanodegree-arcade-game>
    ## Run The Game
-   You have to run the index.html file on the browser which supports the HTML5
-   Else you can also run the file from python server or 200 ok.
    ## How to Play
-   The user can choose any of the four keys to move the player:
    -   `Up` arrow
    -   `Down` arrow
    -   `Left` arrow
    -   `Right` arrow
-   The objective is to get your character safely to the water at the top of the screen using the four keys Up, Down, Left, Right in any random manner.
-   The game ends if your character collides with the moving bugs which move with random speed
-   If you win or lose, the game resets with the player at the bottom of the screen. The game runs continuously until you close the page.

    ## Project Dependencies

-   Modern Web browser : Which supports HTML5 to play this game.
-   Keyboard : To move the player around the screen.
-   Sweet Alert : [Check link here](https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.css)
    ## Contents of the Project
-   The project consists following files:
    -   `index.html` :  load this file in a web browser to play the game
    -   `css/style.css` : style sheet for the web page holding the game
    -   `images/` : directory containing images required in the game
    -   `js/app.js` : main JS file that instantiates the enemy and player objects
    -   `js/engine.js` : contains the main game loop and manages game rendering
    -   `js/resources.js` :  handles the loading and caching of graphics

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.
