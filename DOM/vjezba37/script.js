"use strict";

document.getElementById("povuci_txt").addEventListener("click", povuciTekst);

function povuciTekst() {
  fetch("./uzorak.txt")
    .then((res) => res.text())
    .then((data) => {
      document.querySelector("#ispisi").innerHTML = data; // Ispis fetcha unutar div elementa sa id-em "ispisi".
    })
    .catch((error) => console.log(error));
}

document.getElementById("lokalni_json").addEventListener("click", povuciJson);

function povuciJson() {
  fetch("./users.json")
    .then((res) => res.json())
    .then((data) => {
      let ispis = `<h2>Korisnici</h2>`;

      data.forEach((user) => {
        ispis += `<ul>
        <li>ID: ${user.id}</li>
        <li>Ime: ${user.ime}</li>
        <li>Prezime: ${user.prezime}</li>
        </ul>`;
      });

      document.querySelector("#ispisi").innerHTML = ispis;
    })
    .catch((error) => console.log(error));
}

/* ZADAĆA - isto ovo što smo napravili sa buttonom lokalni json napravite sa fetchom sa adrese
"https://jsonplaceholder.typicode.com/posts" i ispišite "title" i "body" u div elementu sa ID-em "ispisi" */
