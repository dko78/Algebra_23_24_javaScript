"use strict";
//window objekt
console.log(window);
//document objekt , moze bez window.document
console.log(document);

console.log(document.body.innerHTML);

console.log(document.body.innerText);

//nije read only moze i ovako
document.body.innerHTML = "<h1>Hello World</h1>";

document.getElementById("header").innerHTML = "<h1>Hello World</h1>";
