"use strict";

//sa weba neki izvor https://www.javascripttutorial.net/javascript-dom/javascript-get-child-element/
/*
//prvi html
const parent = document.getElementById("parent");
console.log(parent.firstElementChild.textContent);

const treciElement = document.querySelector(
  "#parent :nth-child(3)"
).textContent;

console.log(treciElement);

const parni = document.querySelectorAll("#parent :nth-child(even)");
console.log(parni);

const children = document.getElementById("parent").children;
console.log(children);

const firstChild = children.item(0);
console.log(firstChild);

const svakiDrugi = document.querySelectorAll("#parent :nth-child(2n)");
console.log(svakiDrugi);
*/

const treceDijete = document.querySelector(".child3");
console.log(treceDijete);

//moze  ovako

console.log(treceDijete.parentElement.children); //vraća html kolekciju

//vraća html kolekciju
//We have to convert the HTMLCollection to an array to be able to use the Array.indexOf() method.
//You can also use the spread syntax (...) to convert the collection of elements to an array.

const indexSpread = [...child3.parentElement.children].indexOf(child3);

const htmlKolekcija = document.getElementsByTagName("p");

const list1 = Array.from(htmlKolekcija);
console.log(list1);

console.log("Drugi nacin:", list1[2]);
console.log("Child3:", list1.indexOf(child3));
//console.log("Child 1:", list1.indexOf("Child 1"));

console.log(indexSpread); // 👉️ 2
//moze i ovako
const index = Array.from(child3.parentElement.children).indexOf(child3);

console.log(index);

/*
  kod za index2
  
let content = document.getElementById("menu");
let firstChild = content.firstChild.nodeName;
console.log(firstChild);

console.log(document.getElementById("menu").firstElementChild);

console.log(document.getElementById("menu").firstElementChild.textContent);

//! naslov liste
console.log(content.childNodes);
console.log("Prvi znakovi: ", content.childNodes[0].textContent);

//zadnji Child
console.log(document.getElementById("menu").lastElementChild.textContent);

//get all child element

let menu = document.getElementById("menu");
let children = menu.children;
console.log(children);


*/
