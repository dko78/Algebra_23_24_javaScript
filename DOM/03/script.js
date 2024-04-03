"use strict";

/* koristeći createElement metodu kreirati novi div element i definirati klasu */

const noviZadatak = document.createElement("div");

noviZadatak.className = "novi-element";
noviZadatak.id = "id-novog-atributa";
noviZadatak.setAttribute("name", "ovo je ime ovog atributa");
noviZadatak.innerHTML = "Ja sam novi zadatak."; //sadrzaj

console.log(noviZadatak);
//dodamo noviZadatak u listu
//id zadatak-list

//document.querySelector("#zadatak-list").appendChild(noviZadatak);

//idemo kreirati da taj noci zadatak izgleda kao drugi

function kreirajZdatak(zadatak) {
  const li = document.createElement("li");
  li.innerHTML = `${zadatak} 
   <button class="ukloni-zadatak btn-link">
   <i class="fa-solid fa-xmark"></i>
   </button>`;

  document.querySelector("#zadatak-list").appendChild(li);
}

kreirajZdatak("Kupi novine");

//kako zamijeniti postojeći element

//replace metoda

function zamijeniZadatak() {
  const zadatak = document.querySelector("li:first-child");
  const li = document.createElement("li");
  li.innerText = "Zamijenili smo prvi zadatak";
  zadatak.replaceWith("li");
}

zamijeniZadatak();

// 2. koristeći outerHTML metodu

function zamijeniDrugiZadatak() {
  const zadatak = document.querySelector("li:nth-child(2)");
  zadatak.outerHTML = "<li>ZAmijenili smo drugi zadatak.</li>";
}

zamijeniDrugiZadatak();

// koristeći neku 3 metodz

function zamijeniTreciZadatak() {
  const lista = document.querySelectorAll("li");
  lista.forEach((zadatak, index) => {
    if (index === 2) {
      zadatak.outerHTML = "<li>Zamijenili smo i ovaj drugi sa foreach</li>";
    }
  });
}

zamijeniTreciZadatak();

//kako uklonitil elemnte iz DOM.-a

function ukloniZadatak() {
  const ul = document.querySelector("ul");
  const li = document.querySelector("li:first-child");
  ul.removeChild(li);
}

ukloniZadatak();

//OnCLick

const naslov = document.querySelector("h1");
const listaZadataka = document.querySelector(".zadatak"); //class zadatak
const zadaci = listaZadataka.querySelectorAll("li");

function pokreni() {
  console.log(1);
  //dodavanje klase putem className metode
  naslov.className = "klasa-zadatak";
  //dodavanje nove klase u postojeću listu klasa
  listaZadataka.classList.add("promjena");
  //uklanjanje klasa iz postojeće liste klasa
  listaZadataka.classList.remove("zadatak");

  // replace metoda zamijenjuje jednu klasu za drugom
  naslov.classList.replace("klasa-zadatak", "nova-klasa");
}

document.querySelector("#clear").onclick = pokreni; // to je id clear
