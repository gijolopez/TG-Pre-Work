console.log('First message!');
setTimeout(() => {
   console.log('This message will always run last...');
}, 0);
console.log('Second message!');

/*
REQUESTS I
HTTP Requests
One of JavaScript's greatest assets is its non-blocking properties, or that it is an asynchronous language.

Websites, like newspaper websites, take advantage of these non-blocking properties to provide a better user experience. Generally, a site's code is written so that users don't have to wait for a giant image to load before being allowed to read the actual article—rather, that text is rendered first and then the image can load in the background.

JavaScript uses an event loop to handle asynchronous function calls. When a program is run, function calls are made and added to a stack. The functions that make requests that need to wait for servers to respond then get sent to a separate queue. Once the stack has cleared, then the functions in the queue are executed.

Web developers use the event loop to create a smoother browsing experience by deciding when to call functions and how to handle asynchronous events. We'll be exploring one system of technologies called Asynchronous JavaScript and XML, or AJAX.

To read more about the event loop, read the MDN documentation:

MDN Documentation: Event Loop
*/

REQUESTS I
Review Requests I
You’ve done an amazing job navigating through making XHR GET and POST requests! Take some time to review the core concepts before moving on to the next lesson.

JavaScript is the language of the web because of its asynchronous capabilities. AJAX, which stands for Asynchronous JavaScript and XML, is a set of tools that are used together to take advantage of JavaScript's asynchronous capabilities.

There are many HTTP request methods, two of which are GET and POST.

GET requests only request information from other sources.

POST methods can introduce new information to other sources in addition to requesting it.

GET requests can be written using an XMLHttpRequest object and vanilla JavaScript.

POST requests can also be written using an XMLHttpRequest object and vanilla JavaScript.

Writing GET and POST requests with XHR objects and vanilla JavaScript requires constructing the XHR object using new, setting the responseType, creating a function that will handle the response object, and opening and sending the request.

To add a query string to a URL endpoint you can use ? and include a parameter.

To provide additional parameters, use & and then include a key-value pair, joined by =.

Determining how to correctly write the requests and how to properly implement them requires carefully reading the documentation of the API with which you're working.
