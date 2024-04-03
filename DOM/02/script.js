"use strict";

console.log(document.getElementsByTagName("h1")[0].innerHTML);

// po klasi ili ID dohvat
//dohvatimoelement i na njega stavitti novi atribut sa zeljenom vrijednosti

document.getElementById("naslov").setAttribute("class", "naslov_h1");

const naslov = document.getElementById("naslov");

naslov.innerHTML = "<strong>Ovo je novi naslov</strong>";

naslov.style.color = "RED";
naslov.style.backgroundColor = "#EEE";
naslov.style.padding = "2rem";

//query selector

console.log(document.querySelector("#naslov")); //ako ID onda #

console.log(document.querySelector(".container")); //klase sa #

const lista = document.querySelectorAll("ul li");
console.log(lista);

lista.forEach((clan_liste, index) => {
  if (index === 1) {
    clan_liste.style.color = "red";
  }

  if (index === 2) {
    clan_liste.innerHTML = "Kupi novine";
  }
});

//dohvat po klasi

const dijete = document.getElementsByClassName("dijete");

console.log(dijete);

console.log(dijete[2].innerHTML);

//primjer

let podaci;
const roditelj = document.querySelector(".roditelj");

podaci = roditelj.children;
podaci = roditelj.children[1].innerHTML;
podaci = roditelj.children[1].innerText;
//podaci = roditelj.children[1].className;
console.log(podaci);

roditelj.children[1].innerText = "Promijenio sam tekst";
roditelj.children[1].innerHtml = "Promijenio sam tekst <mark>opet</mark>";

roditelj.firstElementChild.innerText = "Ovako mijenajmo 1 članae";
roditelj.lastElementChild.innerText = "ovako mijenajmozadnje dijete";

//drugi smejr od dijeteta prema roditelju:

const drugoDijete = document.querySelector(".dijete:nth-child(2)");
console.log(drugoDijete);

podaci = drugoDijete.nextElementSibling;
drugoDijete.nextElementSibling.style.fontSize = "3rem";
console.log(podaci);

//ubacivanje elementa
