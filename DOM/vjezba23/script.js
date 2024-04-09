"use strict";

/* Idemo koristeći createElement metodu, kreirati novi div element, na njemu napraviti klasu i postaviti ga... */

const noviZadatak = document.createElement("div");
noviZadatak.className = "novi-element";
noviZadatak.id = "id-novog-elementa";
noviZadatak.setAttribute("name", "ovo je ime ovog atributa");
noviZadatak.innerHTML = "Ja sam novi zadatak.";

console.log(noviZadatak);

/* Sa appendChild metodom dodajemo element tamo gdje hoćemo. */
//document.querySelector("#zadatak-list").appendChild(noviZadatak);

// idemo kreirati novi zadatak da izgleda isto kao i ostali zadaci

function kreirajZadatak(zadatak) {
  const li = document.createElement("li");

  li.innerHTML = `${zadatak}
  <button class="ukloni-zadatak btn-link">
  <i class="fa-solid fa-xmark"></i>
  </button>`;

  document.querySelector("#zadatak-list").appendChild(li);
}

kreirajZadatak("Kupi novine");

// idemo vidjeti kako možemo zamijeniti postojeće elemente

// 1. koristeći replace metodu

function zamijeniZadatak() {
  const zadatak = document.querySelector("li:first-child");
  const li = document.createElement("li");
  li.innerText = "Zamijenili smo prvi zadatak";

  zadatak.replaceWith(li);
}

zamijeniZadatak();

// 2. koristeći outerHTML metodu

function zamijeniDrugiZadatak() {
  const zadatak = document.querySelector("li:nth-child(2)");
  zadatak.outerHTML = "<li>Zamijenili smo drugi zadatak.</li>";
}

zamijeniDrugiZadatak();

// 3. koristeći neku drugu metodu

function zamijeniTreciZadatak() {
  const lista = document.querySelectorAll("li");
  lista.forEach((zadatak, kljuc) => {
    if (kljuc === 2) {
      zadatak.outerHTML =
        "<li>Zamijenili smo i ovaj zadatak koristeći forEach metodu i if petlju unutar nje.</li>";
    }
  });
}

zamijeniTreciZadatak();

// Brisanje elementa removeChild metodom

function ukloniZadatak() {
  const ul = document.querySelector("ul");
  const li = document.querySelector("li:first-child");
  ul.removeChild(li);
}

ukloniZadatak();

/* OnClick metoda */

const naslov = document.querySelector("h1");
const listaZadataka = document.querySelector(".zadatak");
const zadaci = listaZadataka.querySelectorAll("li");

function pokreni() {
  // dodavanje klase putem className metode
  naslov.className = "klasa-zadatak";
  // dodavanje nove klase u postojeću listu klasa
  listaZadataka.classList.add("promjena");
  // uklanjanje klase iz postojeće liste klasa
  listaZadataka.classList.remove("zadatak");
  // replace metoda zamjenjuje jednu klasu sa drugom
  naslov.classList.replace("klasa-zadatak", "nova-klasa");
}

document.querySelector("#clear").onclick = pokreni;
