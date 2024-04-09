/*
localStorage.setItem("kljuc", "vrijednost");

localStorage.getItem("id"); //dohvaća vrijensopt po id ju

localStorage.removeItem("id"); //briše ključ i vrijednost na traženom ključu

localStorage.clear(); //brise sve zapisano u local storage
*/
("use strict");
/*
   U našem browseru iamo lokalno i sesijsko spremanje podataka. Podaci se spremaju po principu ključ-vrijednost par i zapisani su kao string.
Razlika je u tome da sesijsko spremanje traje sve dok ne zatvorimo stranicu, dok je lokalno zapisano u browseru i neće nestati nakon što se
stranica zatvori. Ovo je naravno individualno i bit će zapisano samo u browseru ko klijenta. Ono što je još bitno je da s obzirom da metode
za spremanje podataka ne mogu spremati objekte, moramo ih prvo stringify metodom pretvoriti (objekte) u stringove i onda tek možemo spremiti
u localStorage i kada dohvaćamo iz localStoragea moramo pretvoriti stringove u objekt parse metodom. 
*/

const forma = document.getElementById("zadatak-forma");

const zadatakInput = document.getElementById("zadatak-input");

const listaZadataka = document.getElementById("zadatak-list");

const brisiSve = document.getElementById("clear");

//const pojedinacniZadatak = document.querySelector(".pojedinacni-zadatak");

console.log(pojedinacniZadatak.textContent);

const filter = document.getElementById("filter");

//const zadaci = listaZadataka.querySelectorAll("li"); //lista ajtemi

//const varijable moraju biti na početku
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
  provjeriListu();
};

//funcija za brosanje svih zadataka

const obrisiZadatke = () => {
  listaZadataka.innerHTML = ""; //ovo brise list iteme
  provjeriListu();
};

// funckija ima li elemenata ulisti

const provjeriListu = () => {
  console.log(zadaci);

  if (zadaci.length === 0) {
    filter.style.display = "none"; //style je za css
    //da li bi radilo i ovako style.visibility = "hidden";
    brisiSve.style.display = "none";
  } else {
    filter.style.display = "block";
    brisiSve.style.display = "block";
  }
};

// filter na input polju
//prolazi kroz listu zadatak i gleda filter i osatavi samoelemte koji se poklapaju
const filtrirajZadatke = (e) => {
  const zadaci = listaZadataka.querySelectorAll("li"); //maknuo sa globalnog
  const text = e.target.value.toLowerCase();

  zadaci.forEach((zadatak) => {
    //console.log(zadatak);
    const imeZadatka = zadatak.firstChild.textContent.toLowerCase();
    //console.log(imeZadatka);
    if (imeZadatka.indexOf(tekst) != -1) {
      zadatak.style.display = "flex";
    } else {
      zadatak.style.display = "none";
    }
  });
};

//event listeri
forma.addEventListener("submit", dodajZadatak);

listaZadataka.addEventListener("click", obrisiZadatke);

filter.addEventListener("input", filtrirajZadatke);

provjeriListu();
