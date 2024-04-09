"use strict";

const forma = document.getElementById("zadatak-forma");

const zadatakInput = document.getElementById("zadatak-input");

const listaZadataka = document.getElementById("zadatak-list");

const brisiSve = document.getElementById("clear");

const pojedinacniZadatak = document.querySelector(".pojedinacni-zadatak");

console.log(pojedinacniZadatak.textContent);

//definiranje funkcija

//funckija za kreianje novog zadatka

const dodajZadatak = (e) => {
  e.preventDefault();

  if (zadatakInput.value === "") {
    alert("Unesite zadatak");
    return;
  }
  //kreiramo novi element liste (li), zadatak kupimo iz input polja
  //createTextNode za razliku od inner texta kreira element
  //inerText mijenja samo sadržaj posojećeg
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(zadatakInput.value));
  console.log(li); //projerava da li je kreian elemen isadrzaj polja

  //kreiranje gumba i klase na gumb
  const delBtn = document.createElement("button");
  delBtn.className = "ukloni-zadatak btn-link";

  //kreiranje font awsome ikonica iklase za tu ikonicu

  const ikona = document.createElement("i");
  ikona.className = "fa-solid fa-xmark";

  //dodavanej ikone unutar butona
  delBtn.appendChild(ikona);

  li.appendChild(delBtn);
  //dodavanej novog zadataka na listu zadataka
  listaZadataka.appendChild(li);

  //resetiranje input
  zadatakInput.value = "";
};

//funckiju za brisanje pojedinačnog zadatka
//todo dodaj ikone
const obrisiZadatak = (e) => {
  if (e.target.parentElement.classList.contains("ukloni-zadatak")) {
    e.target.parentElement.parentElement.remove();
  }
};

//funcija za brosanje svih zadataka

const obrisiZadatke = () => {
  listaZadataka.innerHTML = ""; //ovo brise list iteme
};

forma.addEventListener("submit", dodajZadatak);

listaZadataka.addEventListener("click", obrisiZadatke);
