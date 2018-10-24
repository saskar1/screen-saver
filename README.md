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

Then open up the `js/screen-saver.js` file in Sublime. It looks like this:

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

See the line where it says `color = 'black';`?

Change it to `color = 'turquoise';`, save the file, and click the reload button on `index.html` in Chrome.





## 2. Git

Download and install [git](https://git-scm.com/). Git is a "source-code management"
tool. I.e., it helps you manage your source code.

Imagine you're writing an essay. You finish your first draft and save it as "essay-draft-1.txt." Then you save it again as "essay-draft-2.txt" and start working on your second draft. This way, you can always go back to the first draft, in case you end up messing things up in the second draft.

Git helps you manage multiple drafts of software, so you can go back to earlier versions in case you mess things up. Git also also helps with other software-development tasks such as downloading and uploading software (from/to places like github.com).
