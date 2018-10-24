# Javascript Magic, Project 1: A Screen Saver

> "Any sufficiently advanced technology is indistinguishable from magic." — Aruther C. Clarke

This course introduces you to JavaScript / HTML5 / CSS programming. No prerequisites.
I assume you are running OS X.

These are lecture notes; they do not supplant in-person instruction.

## Contents

1. Introduction to git, terminal, and Sublime, for novice programmers
1. Study the command-line terminal
2. Git
3. Sublime
4. Chrome Developer Tools
5. HTML
6. JavaScript
7. Variables
8. If statements
9. Functions
10. For loops
11. While loops
12. Magic

## 1. Introduction to git, terminal, and Sublime, for novice programmers

Follow this tutorial: https://medium.com/@hawk/introduction-to-git-terminal-and-sublime-for-novice-programmers-1ab7c364d67c

Then open up the `index.html` file in Sublime (double click the file on the left pane of Sublime).

## 2. Open index.html in Chrome

In the terminal, make sure you are in the `screen-saver` directory.

From the terminal:

```
$ open index.html
```

This should open up a burbling black and white animation in Chrome that looks like this page: https://mikegagnon.github.io/screen-saver/

## 3. Explaining index.html

`index.html` looks like this:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Screen Saver</title>
</head>
<body>
  <canvas id="screen-saver-canvas" width="600" height="300"></canvas>
  <script src="js/magic.js"></script>
  <script src="js/screen-saver.js"></script>
</html>
```

This is an HTML web page. I'll explain HTML in the next lesson.

For now, all you need to know is that when Chrome "renders" this web page, it runs `screen-saver.js` because of this "tag": `<script src="js/screen-saver.js"></script>`.

## 4. Explaining js/screen-saver.js

Open up the `js/screen-saver.js` file in Sublime. It looks like this:

```js
var width = 600;
var height = 300;

async function run() {

    var count = 0;

    for (var i = 0; i < 10000; i++) {
        var x = randInt(0, width);
        var y = randInt(0, height);
        color = randInt(0,2);
        if (color == 1) {
            color = 'black';
        } else {
            color = 'white';
        }
        drawSquare(x, y, color);
    }

    var count = 0;
    while (true) {
        var x = randInt(0, width);
        var y = randInt(0, height);
        var color = getColorAtPixel(x, y);
        drawSquare(x, y, color);
        count++;
        if (count % 100 == 0) {
            await sleep(1);
        }
    }
}

run();
```

This is a JavaScript file containing JavaScript source code. Chrome executes this code every time you (re)load the `index.html` file in Chrome.


## 5. Experiment 1, color

See the line where it says `color = 'black';`?

Change it to `color = 'turquoise';`, save the file, and click the reload button on `index.html` in Chrome.

## 6. Experiment 2, width and height

Change `var width = 600;` to `var width = 100;`. Save and reload. What happens?

Change the width to 9999. What happens?

Reset the width back to 600, and play with the height. What happens?

Reset the width and height back to 600 and 300 respectively. Then go to `index.html` and play with the width and height defined in `canvas` tag.

### Explanation

The `canvas` tag creates a "canvas" on the HTML page, which the `.js` file draws upon. Setting the width and height of the `canvas` tag determines the dimensions that can be drawn to.

In contrast, the width and height, as defined in the `.js` file, determines what is actually drawn.

If the .js file specifies
*bigger* dimensions than the canvas, then the .js file will draw outside of the canvas (which isn't shown on the page).

If the .js file specifies *smaller* dimensions than the canvas, then the .js file will only draw to a portion of the canvas.

## 7. Overview of the program

There are three phases to the `screen-saver.js` program:

### Phase 1: initialize variables

```js
var width = 600;
var height = 300;
```

This phase defines two variables `width` and `height`. In the next two phases, the code uses these variable to select random `x` and `y` coordinates.


### Phase 2: draw 10,000 sqaures

```js
    for (var i = 0; i < 10000; i++) {
        var x = randInt(0, width);
        var y = randInt(0, height);
        color = randInt(0,2);
        if (color == 1) {
            color = 'black';
        } else {
            color = 'white';
        }
        drawSquare(x, y, color);
    }
```

This phase draws 10,000 squares. 

The phase begins with the line `for (var i = 0; i < 10000; i++) {` which begins the definition of a "for loop." Notice the number `10000` in this line. If you were to change that number to `5`, then Phase 2 would only draw 5 sqaures. (Go ahead and see how that would change the animation).

Also notice, the first line ends with a curly brace, and the last line ends with a curly brace. These curly braces mark the beginning and end of the for loop.

There are 10 lines of code inside the body of the for loop (i.e. inside the curly braces). Together, these lines draw one square. The for loop executes the body of the loop 10,000 times, so, all together, thats how the for loop draws 10,000 squares.

I will explain more in a few sections.

### Phase 3: indefinitely "expand" pixels

```js
    var count = 0;
    while (true) {
        var x = randInt(0, width);
        var y = randInt(0, height);
        var color = getColorAtPixel(x, y);
        drawSquare(x, y, color);
        count++;
        if (count % 100 == 0) {
            await sleep(1);
        }
    }
```

Phase 3 begins with a variable definition, `var count = 0;`, which is similar to the variable definitions of Phase 1.

The phase continues with the line `while(true) {`, which begins the  definition of a "while-true loop." Whereas the for loop 
of Phase 2 draws 10,000 squares, this while-true loop draws ∞ squares. (Well actually, once the web page is closed it stops 
drawing squares). The difference between a for loop and a while-true loop is: while-true loops never end.

Like the for loop, the while-true loop has two curly braces. The body of the while-true loop contains 8 lines of code, which 
together "expand" one pixel.

I will explain more in a few sections.


## 8. Phase 2 in detail

Recall, Phase 2 draws 10,000 squares using a for loop with the following code:

```js
    for (var i = 0; i < 10000; i++) {
        var x = randInt(0, width);
        var y = randInt(0, height);
        color = randInt(0,2);
        if (color == 1) {
            color = 'black';
        } else {
            color = 'white';
        }
        drawSquare(x, y, color);
    }
```

In this lesson, I'm not going to explain the first line (`for (var i = 0; i < 10000; i++) {`) in any more detail than I already have.

Rather, let's focus on the lines of code in the loop body.

### The definitions of `x` and `y`

`var x = randInt(0, width);` and `var y = randInt(0, height);` are variable definitions, similar to `width`, `height`, and `count.`

Whereas `width`, `height`, and `count` are assigned constant values (600, 300, and 0 are constant values), `x` and `y` are assigned random values. Specifically `x` is assigned a random integer between zero and `width`, and `y` is similarly assigned a random integer between zero and `height`.

Each time Chrome executes the body of the forloop, `x` and `y` are assigned different values.

(See what happens if you change the definition of `x` to something like `var x = randInt(100, 200);` and so on).

