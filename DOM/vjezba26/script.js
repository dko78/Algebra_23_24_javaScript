"use strict";

// Definiranje varijabli
const forma = document.getElementById("zadatak-forma");
const zadatakInput = document.getElementById("zadatak-input");
const listaZadataka = document.getElementById("zadatak-list");
const brisiSve = document.getElementById("clear");

// Definiranje funkcija

// Funkcija za kreiranje novog zadatka

const dodajZadatak = (e) => {
  e.preventDefault();

  if (zadatakInput.value === "") {
    alert("Molimo vas unesite zadatak");
    return;
  }
  /* 
  Kreiramo novi element (li), zadatak ćemo pokupiti iz input polja i zapisati ga u list item koristeći createTextNode metodu. 
  Ona za razliku od innerTexta kreira novi element, dok innerText samo mijenja postojeći sadržaj iz postojećeg elementa.
   */

  const li = document.createElement("li");
  li.appendChild(document.createTextNode(zadatakInput.value));
  console.log(li); // provjera da li nam je li element kreiran i da sadrži sadržaj iz input polja

  // kreiranje buttona i dodavanje klasa na button
  const delGumb = document.createElement("button");
  delGumb.className = "ukloni-zadatak btn-link";

  // kreiranje font-awesome ikonice i klase za tu ikonicu
  const ikona = document.createElement("i");
  ikona.className = "fa-solid fa-xmark";

  // dodavanje ikonice unutar buttona
  delGumb.appendChild(ikona);

  //dodavanje buttona za brisanje unutar list itema
  li.appendChild(delGumb);

  //dodavanje tog novog zadatka na listu zadataka
  listaZadataka.appendChild(li);

  //resetiranje input polja da opet bude prazno
  zadatakInput.value = "";
};

// funkcija za brisanje pojedinačnog zadatka
const obrisiZadatak = (e) => {
  if (e.target.parentElement.classList.contains("ukloni-zadatak")) {
    e.target.parentElement.parentElement.remove();
  }
};

// funkcija za brisanje svih zadataka
const obrisiZadatke = () => {
  listaZadataka.innerHTML = "";
};

// Event listeneri
forma.addEventListener("submit", dodajZadatak);
listaZadataka.addEventListener("click", obrisiZadatak);
brisiSve.addEventListener("click", obrisiZadatke);
