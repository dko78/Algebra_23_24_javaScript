"use strict";

/* //keyboard events
const inputKey = document.getElementById("zadatak-input");

const keyDown = (e) => {
  if (e.key === "Enter") {
    alert("Stisnuo si Enter");
  }

  if (e.repeat) {
    alert(`Pusti tipku ${e.key}`);
  }
};

const onKeyPress = () => {
  console.log("keypress");
};

const keyUp = () => {
  console.log("keyup");
};

inputKey.addEventListener("keypress", onKeyPress); // bilo što da stisnete clg-at će se
inputKey.addEventListener("keyup", keyUp); // clg će se okinut tek ada stisnemo i maknemo prst sa tipke
inputKey.addEventListener("keydown", keyDown); // čim stisnete enter, okinut će alert

// input events

const inputForma = document.getElementById("filter");
const naslov = document.querySelector("h2");

const onInput = (e) => {
  console.log(e.target.value); // target.value nam daje vrijednost koja je trenutno upisana u input polju
  naslov.textContent = e.target.value; // s ovim mijenjamo sadržaj h2 sa onim što je upisano u input polju
};

const onFocus = () => {
  console.log("input je u fokusu");
};

const onBlur = () => {
  console.log("input nije u fokusu");
};

inputForma.addEventListener("input", onInput); // input će raditi isto što i keydown ali ga je bolje upotrijebiti kod input polja
inputForma.addEventListener("focus", onFocus); // provjerava da li smo kliknuli na input polje
inputForma.addEventListener("blur", onBlur); // provjerava jesmo li kliknuli van input polja */

const forma = document.getElementById("zadatak-forma");

const onSubmit = (e) => {
  e.preventDefault();

  const zadatak = document.getElementById("zadatak-input");
  if (zadatak.value === "") {
    alert("Niste unijeli zadatak");
    return;
  }
  console.log(zadatak.value);
};

forma.addEventListener("submit", onSubmit);

// EVENT BUBBLING - događa se kada postavimo više event listenera na "isto" mjesto u HTML-u...
const gumb = document.querySelector("form button");
const div = document.querySelector("form div:nth-child(2)");
const form = document.querySelector("form");

gumb.addEventListener("click", (e) => {
  alert("Gumb je stisnut");
  e.stopPropagation(); // ovo dodajemo kako bi spriječili event bubbling
});

div.addEventListener("click", () => {
  alert("Div je stisnut");
});

form.addEventListener("click", () => {
  alert("Forma je stisnuta");
});

// brisanje elemenata iz HTML DOM-a

const lista = document.querySelector("#zadatak-list");

lista.addEventListener("click", (e) => {
  if (e.target.className === "pojedinacni-zadatak") {
    e.target.remove();
  }
});

lista.addEventListener("mouseover", (e) => {
  if (e.target.className === "pojedinacni-zadatak") {
    e.target.style.color = "#ff0000";
  }
});

lista.addEventListener("mouseout", (e) => {
  if (e.target.className === "pojedinacni-zadatak") {
    e.target.style.color = "#000000";
  }
});
