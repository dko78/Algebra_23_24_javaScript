"use strict";

document.getElementById("povuci_txt").addEventListener("click", povuciTXT);

function povuciTXT() {
  fetch("./uzorak.txt")
    .then((response) => response.text())
    .then((data) => (document.querySelector("#ispisi").textContent = data))
    .catch((error) => console.log("Greška:" + error));
}

document
  .getElementById("lokalni_json")
  .addEventListener("click", dohvatiLokalniJSON);

function dohvatiLokalniJSON() {
  fetch("./users.json")
    .then((response) => response.json())
    .then((data) => {
      let ispis = `<h2>Korisnici</h2>`;

      data.forEach((user) => {
        ispis += `<ul>
        <li>id:${user.id}</li>
        <li>id:${user.ime}</li>
        <li>id:${user.prezime}</li>
        </ul>`;
      });
      document.querySelector("#ispisi").innerHTML = ispis;
    })
    .catch((error) => console.log(`ERROR: ${error}`));
}

/* ZADAĆA - isto ovo što smo napravili sa buttonom lokalni json napravite sa fetchom sa adrese
"https://jsonplaceholder.typicode.com/posts" i ispišite "title" i "body" u div elementu sa ID-em "ispisi" */

document
  .getElementById("vanjski_json")
  .addEventListener("click", dohvatiVanjskiJSON);

function dohvatiVanjskiJSON() {
  fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
    .then((response) => response.json())
    .then((data) => {
      let i = 0;
      data.forEach((todo) => {
        // i++;
        console.log(`Brojač ${i} ${todo.userId}`);
        noviTodo(todo);
      });
    })
    .catch((error) => console.log(`ERROR: ${error}`));
}

function noviTodo(todo) {
  console.log(todo.title);
}

/*
TextNode
  var div = document.createElement('div');
var text = document.createTextNode('Y HALO THAR');
div.appendChild(text);

This creates one text node and puts it into the div you created. It generates the same DOM structure as this:

var div = document.createElement('div');
div.innerHTML = 'Y HALO THAR';

*/
