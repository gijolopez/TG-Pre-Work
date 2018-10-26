# TG-Pre-Work

## When we hit https://www.techtonicgroup.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions.

1. The first thing that happens,  your browser (e.g. *Chrome*) goes to the **DNS**(Domain Name Servers) server and finds the "real" web address of the server that the website you are searching for on.
2. The browser sends an **HTTP** request message to the server, asking the server to send a copy of the website to the client. This information is sent across your internet connection using **TCP/IP**.
3. If the server approves the client's request, the server sends the client a *"200 OK"*, then starts sending the website's files to the browser in small chunks called ***data packets***.
4. The browser assembles the **data packets** into a complete website and displays it to you.

## From start to finish how does that data reach you to be rendered in the browser?

1. The first thing that happens,  your browser (e.g. *Chrome*) goes to the **DNS**(Domain Name Servers) server and finds the "real" web address of the server that the website you are searching for on.
2. The browser sends an **HTTP** request message to the server, asking the server to send a copy of the website to the client. This information is sent across your internet connection using **TCP/IP**.
3. If the server approves the client's request, the server sends the client a *"200 OK"*, then starts sending the website's files to the browser in small chunks called ***data packets***.
4. The browser assembles the **data packets** into a complete website and displays it to you.

## What code is rendered in the browser?

HTML is usually the code that is rendered in the browser.

## What is the server-side code’s main function?

The **server-side code** main function is to control what information is sent to the user.

## What is the client-side code’s main function?

The **client-side code** main function handles the structure and presentation of that data to the user.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?
*I am a bit confused on this question*

I would say, you are able to create as many instances as you like, depending on how many ***URLs*** you go to.

## How many instances of the server-side code are available at any given time?
*I am a bit confused on this question*

I would say, that the only server-side code available at any given time would be the response from the server.

## What is runtime?

Runtime is the length of time a program takes to run.

## How many instances of the the databases connected to the server application are created?

You can create as many instances as you like.  
