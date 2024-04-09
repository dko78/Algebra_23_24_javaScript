"use strict";
//keyborad event
/*
const inputKey = document.getElementById("zadatak-input");

const keyDown = (e) => {
  if (e.key === "Enter") {
    alert("stisnuo si enter");
  }
};

const onKeyPress = (e) => {
  console.log("key pres");
};

const onKeyDown = (e) => {
  console.log("onKeyDown");
  if (e.repeat) {
    alert("pusti tipku");
  }
};

const onKeyUp = (e) => {
  console.log("onKeyUp");
};

inputKey.addEventListener("keydown", keyDown); //kad stisneš enter

inputKey.addEventListener("keypress", onKeyPress);

inputKey.addEventListener("keyup", onKeyUp);

//input Eventi

const inputForma = document.getElementById("filter");
const naslov = document.querySelector("h2");

const onInput = (e) => {
  console.log(e.target.value); //! dohvaćaš što se upisuje u input polju
  naslov.textContent = e.target.value;
};

inputForma.addEventListener("input", onInput);

const onFocus = () => {
  console.log("input je u fokusu");
};

const onBlur = () => {
  console.log("input nije u fokusu");
};

inputForma.addEventListener("input", onInput); //isto kao keydown ali je bolje kod input polja

inputForma.addEventListener("focus", onFocus); //da li smo kliknuli na nput polje
//
inputForma.addEventListener("blur", onBlur); //da li smo kliknuli van polja
*/

//-------------------------------------------------------

//dohvatiti formu

const forma = document.getElementById("zadatak-forma");

const onSubmit = (e) => {
  e.preventDefault();
  //console.log("poslano");
  const zadatak = document.getElementById("zadatak-input");
  console.log(zadatak);
  if (zadatak.value === "") {
    alert("nijeok");
    return;
  }
  console.log(zadatak.value);
};

forma.addEventListener("submit", onSubmit);

//event bubbling

const gumb = document.querySelector("form button");
const div = document.querySelector("form div:nth-child(2)");
const form = document.querySelector("form");

gumb.addEventListener("click", (e) => {
  alert("gumb je stisnut");
  e.stopPropagation(); //ovo dodajemo da sprečimo event bubling
});

div.addEventListener("click", () => {
  alert("div je stisnut");
});

form.addEventListener("click", () => {
  alert("form je stisnut");
});

//kako ukloniti zadatak

const lista = document.querySelector("#zadatak-list");

lista.addEventListener("click", (e) => {
  if (e.target.className === "pojedinacni-zadatak") {
    e.target.remove();
  }
});

lista.addEventListener("mouseover", (e) => {
  if (e.target.className === "pojedinacni-zadatak") {
    e.target.style.color = "red";
  }
});
