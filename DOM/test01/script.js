"use strict";

//izvor: https://www.freecodecamp.org/news/dom-manipulation-htmlcollection-vs-nodelist/
/*
/--
console.log(paragraphs);//retutn HTML COLLECTION

const paragraphs2 = document.querySelectorAll(".paragraph");
console.log(paragraphs2);//return nodelist
*/

/*
HTML
  <!-- <div>
      This is a text
      <p class="paragraph">First paragraph</p>
      <p class="paragraph">First paragraph</p>
    </div> -->
*/
/*    
const divElement = document.querySelector("div");

console.log(divElement.children); // returns an HTMLCollection ovovrati samo 2 paragrafa
console.log(divElement.childNodes); // returns a NodeList-- ovo vrati text node, 2 paragrafa i njihove text node

*/
//html collection je live
/*
const paragraphs = document.getElementsByTagName("p");
console.log("BEFORE UPDATE: ", paragraphs);

const newParagraph = document.createElement("p");
newParagraph.textContent = "Četvrti paragraf";
document.body.appendChild(newParagraph);

console.log("AFTER UPDATE: ", paragraphs);
*/
//Nodelist baš  i nisu live
/*
const paragraphs2 = document.querySelectorAll("p");
console.log("BEFORE UPDATE: ", paragraphs2);

const newParagraph = document.createElement("p");
newParagraph.textContent = "Četvrti paragraf";
document.body.appendChild(newParagraph);

console.log("AFTER UPDATE: ", paragraphs2);
*/
//ako je dohvaćena sa getElementsByName,getElementsByName, that NodeList will be live.

//razlika je i to što kod html liste elemnte mozes dohvatiti pomoćuindeksa, id adtribute i name atributa
//a  kod node liste samo sa indexom

const container = document.getElementById("container");
console.log(container);

const buttons = container.children;

console.log(buttons);

console.log("---------------------");
console.log(buttons[0]);
console.log(buttons.namedItem("btn1")); // using the id attribute
console.log(buttons.namedItem("first-name")); // using the name attribute

//pazi whitespace moze vratiti text kod first child, bolj eovo koristi kad radiš
/*
  <ul id="list">
  <li>First (1)</li>
  <li>Second (2)</li>
  <li>Third (3)</li>
</ul>

<script>
  const list = document.getElementById("list");
  console.log(list.firstElementChild.textContent);
  // logs "First (1)"
</script>


*/
//  ako bi radio sa NodeList ovako bi radio:
/*
const container = document.querySelector("#container");
const buttons = container.childNodes; // returns a NodeList
console.log(buttons);
*/
//How to loop through the collection

//You cannot loop through an HTMLCollection with any of the array methods. Unless you first create an array from the collection.
//sa node mozes mozes foreach, ali ne neke metode,map filter

/*
  iam fora akozelis proći elemete HTML liste a da ne naparviš listu ovako:
  // returns an HTMLCollection
        const allButtons = document.getElementsByClassName('btn')

        for (button of allButtons) {
        console.log(button)
        }
*/
