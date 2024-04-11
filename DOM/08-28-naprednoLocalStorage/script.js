/* 
U našem browseru iamo lokalno i sesijsko spremanje podataka. Podaci se spremaju po principu ključ-vrijednost par i zapisani su kao string.
Razlika je u tome da sesijsko spremanje traje sve dok ne zatvorimo stranicu, dok je lokalno zapisano u browseru i neće nestati nakon što se
stranica zatvori. Ovo je naravno individualno i bit će zapisano samo u browseru ko klijenta. Ono što je još bitno je da s obzirom da metode
za spremanje podataka ne mogu spremati objekte, moramo ih prvo stringify metodom pretvoriti (objekte) u stringove i onda tek možemo spremiti
u localStorage i kada dohvaćamo iz localStoragea moramo pretvoriti stringove u objekt parse metodom.

localStorage.setItem("id", "vrijednost koju spremamo"); // sprema vrijednost sa ključem
localStorage.getItem("id"); // dohvaća vrijednost zapisanu na traženom (upisanom) ključu
localStorage.removeItem("id"); // briše ključ i vrijednost na traženom ključu
localStorage.clear(); // clear metoda briše sve zapisano u localStorageu 
*/

"use strict";

const forma = document.getElementById("zadatak-forma");
const zadatakInput = document.getElementById("zadatak-input");
const listaZadataka = document.getElementById("zadatak-list");
const filter = document.getElementById("filter");
const brisiSve = document.getElementById("clear");

// Funkcija za kreiranje novog zadatka
const dodajZadatak = (e) => {
  e.preventDefault();

  if (zadatakInput.value === "") {
    alert("Molimo vas unesite zadatak");
    return;
  }

  const li = document.createElement("li");
  li.appendChild(document.createTextNode(zadatakInput.value));

  const delGumb = document.createElement("button");
  delGumb.className = "ukloni-zadatak btn-link";

  const ikona = document.createElement("i");
  ikona.className = "fa-solid fa-xmark";

  delGumb.appendChild(ikona);
  li.appendChild(delGumb);
  listaZadataka.appendChild(li);

  provjeriListu();

  zadatakInput.value = "";
};

// funkcija za brisanje pojedinačnog zadatka
const obrisiZadatak = (e) => {
  if (e.target.parentElement.classList.contains("ukloni-zadatak")) {
    e.target.parentElement.parentElement.remove();
  }
  provjeriListu();
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
provjeriListu();
