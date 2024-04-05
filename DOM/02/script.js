"use strict";

const naslov = document.getElementById("naslov");

const naslov2 = document.querySelector("#naslov"); //ako sa querySelector ideš po id onda #, ako  getElementByID onda ide baz ičega.
//ako po klasi querySelector onda .klasa

console.log("Naslov2", naslov2.textContent);

console.log(naslov.textContent);

naslov.style.color = "RED";
naslov.setAttribute("class", "naslov2");
naslov.classList.add("naslov3"); //meni bolje ovako sa classList nego set atribute

naslov.classList.remove("naslov3");

const cont1 = document.querySelector(".container");
cont1.style.backgroundColor = "#EEE";

//dohvat po paragrafu
//prvi paragraf
document.querySelector("p").style.backgroundColor = "red";
//sve paragrafe
const listaParagrafa = document.querySelectorAll("p");
listaParagrafa.forEach((element, index) => {
  element.textContent = `${index} paragraf`;
});

//priča sa ul listama
//[0][1]
//[0][2]
//[0][3]
//[1][1]
//[1][2]
//[1][3]
const listaUl = document.querySelectorAll("ul");
listaUl.forEach((element, index) => {
  console.log(`${index}`, element.textContent);
});
//sve liste ul li html-u
const listaUl_li = document.querySelectorAll("ul li");
listaUl_li.forEach((element, index) => {
  console.log(`listaUl_li:${index}`, element.textContent);
});

let podaci;
let podaciUK;
const roditelj = document.querySelector(".roditelj");

roditelj.firstElementChild.textContent = "Promijenio prvo dijete";
//ima i lastelement child
podaciUK = roditelj.children;
podaci = roditelj.children[0].innerText;
//podaci = roditelj.children[1].innerText;
//podaci = roditelj.children[1].className;
console.log(podaciUK);
console.log(podaci);
console.log(roditelj.children[1].className); //dijete

//drugo dijete

const drugoDijete = document.querySelector(".dijete:nth-child(2)");
console.log("Drugo_:", drugoDijete.textContent);
/*
const lista2 = document.getElementsByTagName("ul")[0]; //prvi član liste
lista2.getElementsByTagName("li")[0].textContent = "prvi";
*/
//console.log(document.getElementById("naslov").innerHTML); //meni je ovo bolje
// po klasi ili ID dohvat
//dohvatimoelement i na njega stavitti novi atribut sa zeljenom vrijednosti
/*
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

roditelj.firstElementChild.innerText = "Ovako mijenajmo 1 èlanae";
roditelj.lastElementChild.innerText = "ovako mijenajmozadnje dijete";

//drugi smejr od dijeteta prema roditelju:

const drugoDijete = document.querySelector(".dijete:nth-child(2)");
console.log(drugoDijete);

podaci = drugoDijete.nextElementSibling;
drugoDijete.nextElementSibling.style.fontSize = "3rem";
console.log(podaci);

//ubacivanje elementa
*/
