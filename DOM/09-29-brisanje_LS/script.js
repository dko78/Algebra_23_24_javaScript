"use strict";

const forma = document.getElementById("zadatak-forma");
const zadatakInput = document.getElementById("zadatak-input");
const listaZadataka = document.getElementById("zadatak-list");
const filter = document.getElementById("filter");
const brisiSve = document.getElementById("clear");

// Funkcija za povlačenje zadatka iz lokalnog spremišta

const prikaziZadatkeLS = () => {
  const zadaciSpremiste = dohvatiLocalStorage();
  zadaciSpremiste.forEach((zadatak) => kreirajZadatak(zadatak));
  provjeriListu();
};

// Funkcija za kreiranje novog zadatka
const dodajZadatak = (e) => {
  e.preventDefault();

  const noviZadatak = zadatakInput.value.trim();

  if (noviZadatak === "") {
    alert("Molimo vas unesite zadatak");
    return;
  } else {
    kreirajZadatak(noviZadatak);
    provjeriListu();
    dodajLocalStorage(noviZadatak);
    zadatakInput.value = "";
  }
};

// Funkcija za kreiranje zadatka
const kreirajZadatak = (noviZadatak) => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(noviZadatak));

  const delGumb = document.createElement("button");
  delGumb.className = "ukloni-zadatak btn-link";

  const ikona = document.createElement("i");
  ikona.className = "fa-solid fa-xmark";

  delGumb.appendChild(ikona);
  li.appendChild(delGumb);
  listaZadataka.appendChild(li);
};

// Funkcija za dodavanje zadatak u localStorage.

const dodajLocalStorage = (zadatakInput) => {
  const zadaciSpremiste = dohvatiLocalStorage();
  zadaciSpremiste.push(zadatakInput);
  localStorage.setItem("kljuc", JSON.stringify(zadaciSpremiste));
};

// Funkcija za dohvaćanje podataka iz LocalStoragea
const dohvatiLocalStorage = () => {
  let zadaciSpremiste;

  if (localStorage.getItem("kljuc") === null) {
    zadaciSpremiste = [];
  } else {
    zadaciSpremiste = JSON.parse(localStorage.getItem("kljuc"));
  }

  return zadaciSpremiste;
};

// funkcija za brisanje pojedinačnog zadatka
const obrisiZadatak = (e) => {
  if (e.target.parentElement.classList.contains("ukloni-zadatak")) {
    e.target.parentElement.parentElement.remove();
  }
  provjeriListu();
};

const ukloniZadatak = (zadatakIzDOM) => {
  ukloniZadatak(e.target.parentElement.parentElement);
};

//funkcija koja će dohvatiti zadatke iz LS-a i filter metodom obrisati bez kliknutog zadatka
const obrisiIzDom = (e) => {
  let zadatakIzStoragea = dohvatiLocalStorage();
  zadatakIzStoragea = zadatakIzStoragea.filter((zadatak) => zadatak !== e);
  localStorage.setItem("kljuc", JSON.stringify(zadatakIzStoragea));
};

// funkcija za brisanje svih zadataka
const obrisiZadatke = () => {
  listaZadataka.innerHTML = "";
  provjeriListu();
};

// funkcija za filtriranje zadataka
const filtrirajZadatke = (e) => {
  const zadaci = listaZadataka.querySelectorAll("li");
  const tekst = e.target.value.toLowerCase();

  zadaci.forEach((zadatak) => {
    const imeZadatka = zadatak.firstChild.textContent.toLowerCase();
    if (imeZadatka.indexOf(tekst) != -1) {
      zadatak.style.display = "flex";
    } else {
      zadatak.style.display = "none";
    }
  });
};

// funkcija za provjeru ima li elemenata u listi
const provjeriListu = () => {
  const zadaci = listaZadataka.querySelectorAll("li");
  if (zadaci.length === 0) {
    filter.style.display = "none";
    brisiSve.style.display = "none";
  } else {
    filter.style.display = "block";
    brisiSve.style.display = "block";
  }
};

// Event listeneri
forma.addEventListener("submit", dodajZadatak);
listaZadataka.addEventListener("click", obrisiZadatak);
brisiSve.addEventListener("click", obrisiZadatke);
filter.addEventListener("input", filtrirajZadatke);
document.addEventListener("DOMContentLoaded", prikaziZadatkeLS);
provjeriListu();
