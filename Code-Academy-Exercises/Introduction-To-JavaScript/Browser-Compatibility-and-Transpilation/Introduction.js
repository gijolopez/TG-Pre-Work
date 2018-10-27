/*
BROWSER COMPATIBILITY AND TRANSPILATION
Introduction
You're probably prompted to update your web browser every few months. Do you know why? A few reasons include addressing security vulnerabilities, adding features, and supporting new HTML, CSS, and JavaScript syntax.

The reasons above imply there is a period before a software update is released when there are security vulnerabilities and unsupported language syntax.

This lesson focuses on the latter. Specifically, how developers address the gap between the new JavaScript syntax that they use and the JavaScript syntax that web browsers recognize.

This has become a widespread concern for web developers since Ecma International, the organization responsible for standardizing JavaScript, released a new version of it in 2015, called ECMAScript2015, commonly referred to as ES6. Note, the 6 refers to the version of JavaScript and is not related to the year it was released (the previous version was ES5).

Upon release, web developers quickly adopted the new ES6 syntax, as it improved readability and efficiency. However, ES6 was not supported by most web browsers, so developers ran into browser compatibility issues.

In this lesson, you will learn about two important tools for addressing browser compatibility issues.

caniuse.com — A website that provides data on web browser compatibility for HTML, CSS, and JavaScript features. You will learn how to use it to look up ES6 feature support.
Babel — A Javascript library that you can use to convert new, unsupported JavaScript (ES6), into an older version (ES5) that is recognized by most modern browsers.
Let's get started by running ES6 JavaScript on a fake old web browser version.
*/

var pasta = "Spaghetti"; // ES5 syntax

const meat = "Pancetta"; // ES6 syntax

let sauce = "Eggs and cheese"; // ES6 syntax

// Template literals, like the one below, were introduced in ES6
const carbonara = `You can make carbonara with ${pasta}, ${meat}, and a sauce made with ${sauce}.`;

/*
BROWSER COMPATIBILITY AND TRANSPILATION
Review
In this lesson, you learned about browser compatibility and transpilation. Let's review the key concepts:

ES5 — The old JavaScript version that is supported by all modern web browsers.
ES6 — The new(er) JavaScript version that is not supported by all modern web browsers. The syntax is more readable, similar to other programming languages, and addresses the source of common bugs in ES5.
caniuse.com — a website you can use to look up HTML, CSS, and JavaScript browser compatibility information.
Babel — A JavaScript package that transpiles JavaScript ES6+ code to ES5.
npm init — A terminal command that creates a package.json file.
package.json — A file that contains information about a JavaScript project.
npm install — A command that installs Node packages.
babel-cli — A Node package that contains command line tools for Babel.
babel-preset-env — A Node package that contains ES6+ to ES5 syntax mapping information.
.babelrc — A file that specifies the version of the JavaScript source code.
"build" script — A package.json script that you use to tranpsile ES6+ code to ES5.
npm run build — A command that runs the build script and transpiles ES6+ code to ES5.
For future reference, here is a list of the steps needed to set up a project for transpilation:

Initialize your project using npm init and create a directory called src
Install babel dependencies by running
npm install babel-cli -D
npm install babel-preset-env -D
Create a .babelrc file inside your project and add the following code inside it:
{
  "presets": ["env"]
}
Add the following script to your scripts object in package.json:
"build": "babel src -d lib"
Run npm run build whenever you want to transpile your code from your src to lib directories.
*/
