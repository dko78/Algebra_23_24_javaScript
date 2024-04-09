"use strict";

/* EventListener - addEventListener postavljamo na element koji smo spremili iz DOM-a i na njega postavljamo 2 stvari: prva je event koji
"čekamo" da se dogodi, a drugi je funkcija koja će se pokrenuti kada se dogodi event koji "čekamo". */

const clearBtn = document.querySelector("#clear");

// napisano kao klasična funkcija
clearBtn.addEventListener("click", function () {
  console.log("EVENT LISTENER SE POKRENUO!");
});

// napisano kao arrow funkcija

clearBtn.addEventListener("click", () => {
  console.log("EVENT LISTENER SE POKRENUO!");
});

// odvojeno definirano

function konzola() {
  console.log("EVENT LISTENER SE POKRENUO!");
}

clearBtn.addEventListener("click", konzola);

/* Ajmo sada stvarno složiti brisanje postojećih zadataka */

const pocisti = () => {
  const listaZadataka = document.querySelector(".zadatak");
  const zadaci = listaZadataka.querySelectorAll(".pojedinacni-zadatak");

  zadaci.forEach((zadatak) => {
    zadatak.remove();
  });
};

clearBtn.addEventListener("click", pocisti);

// Mouse events

const naslov = document.querySelector("h1");

naslov.addEventListener("click", () => console.log("klik")); // lijevi klik miša
naslov.addEventListener("dblclick", () => console.log("dupli klik")); // dupli klik miša
naslov.addEventListener("mousedown", () => console.log("držim tipku miša")); // stisni i drži tipku miša
naslov.addEventListener("mouseup", () => console.log("pusti tipku miša")); // pusti tipku miša
naslov.addEventListener("wheel", () => console.log("kotačić miša")); // kotačić miša
naslov.addEventListener("mouseover", () => console.log("hover in miša")); // hover in miša
naslov.addEventListener("mouseout", () => console.log("hover out miša")); // hover out miša

// Pointer events

const pointer = document.querySelector("h2");

const pointerEvent = (e) => {
  console.log(e.target); // daje nam element kojeg smo kliknuli
  console.log(e.type); // daje nam vrstu eventa pomoću kojeg je aktivirana funkcija
  console.log(e.clientX); // daje nam vrijednost po horizontali relativno prema prozoru
  console.log(e.clientY); // daje nam vrijednost po vertikali relativno prema prozoru
  console.log(e.offsetX); // daje nam vrijednost po horizontali relativno prema elementu
  console.log(e.offsetY); // daje nam vrijednost po vertikali relativno prema elementu
  console.log(e.pageX); // daje nam vrijednost po horizontali relativno prema stranici
  console.log(e.pageY); // daje nam vrijednost po vertikali relativno prema stranici
  console.log(e.screenX); // daje nam vrijednost po horizontali relativno prema monitoru
  console.log(e.screenY); // daje nam vrijednost po vertikali relativno prema monitoru
};

pointer.addEventListener("click", pointerEvent);

/* PreventDefault metoda - spriječava defaultno ponašanje određenog HTML elementa, najčešće će te ju koristiti da bi spriječili recimo
refresh stranice prilikom klika na gumb. */

document.querySelector("#clear").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Spriječili smo defaultno ponašanje buttona");
});
