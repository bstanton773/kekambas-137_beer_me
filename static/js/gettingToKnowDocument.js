console.log("Let's get to know the Document!");

console.log(document);
console.log(typeof document);

let body = document.body;
console.log(body);

// Add CSS Inline style via the .style property
console.log(body.style);
body.style.backgroundColor = 'crimson';


// Get an element's children via the .children property
let children = body.children 
console.log(children);

let header = children[0];
console.log(header);
console.log(header.children);

let navbar = header.children[0];
console.log(navbar);
console.log(navbar.className);

// Change/Set the class of an element via its .classname property
navbar.className = 'navbar bg-primary navbar-expand-lg';



// Popular Methods with the Document Object

// Document Get Methods - methods to get element(s)


// document.getElementById('id')
// return the first element with an id that matches the string 'id'
let homeElement = document.getElementById('home');
console.log(homeElement);


// document.getElementsByTagName('tagName')
// return an HTMLCollection (Array-like) of all elements that match 'tagName'
let allImages = document.getElementsByTagName('img');
console.log(allImages);


// document.getElementsByClassName('className')
// return an HTMLCollection (Array-like) of all elements that match 'className'
let invisibleDivs = document.getElementsByClassName('is-invisible');
console.log(invisibleDivs);


// document.querySelector('selector')
// return the FIRST element that matches the specified 'selector'
let firstNavItem = document.querySelector('.nav-item') // simple-selector - class selector
console.log(firstNavItem);

let middleBubble = document.querySelector('#outerBubble div') // combinator selector - descendant
console.log(middleBubble);


// document.querySelectorAll('selector')
// return a NodeList (Array-like) of elemets that match the specified selector
let navItems = document.querySelectorAll('.nav-item')
console.log(navItems);

