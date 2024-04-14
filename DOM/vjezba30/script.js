"use strict";

// JSON FILE FORMAT

const post = {
  id: 1,
  naslov: "Prvi post",
  sadrzaj: "Ovo je sadrzaj posta",
  autor: "Igor",
};

// stringify metodom pretvaramo objekt u JSON format (sve je string)
const jsonFile = JSON.stringify(post);
console.log(jsonFile);

// parse metodom pretvaramo JSON format nazad u objekt
const objectFile = JSON.parse(jsonFile);
console.log(objectFile);

console.log(objectFile.id);

// ASINKRONI KOD

setTimeout(() => {
  console.log("Pozz iz setTimeouta");
}, 5000);

console.log("pozz izvan setTimeouta");

// primjer setTimeouta

const promijeniText = () => {
  document.getElementById("naslov").textContent = "pozz iz setTimeout callback funkcije";
};

const promjena = setTimeout(promijeniText, 5000);

document.getElementById("stop").addEventListener("click", () => {
  clearTimeout(promjena);
  console.log("SetTimeout je otkazan");
});

// SetInterval - primjer

const ispis = () => {
  console.log("ispis");
};

const interval = setInterval(ispis, 1000);

document.getElementById("stop1").addEventListener("click", () => {
  clearInterval(interval);
});

// primjer intervala

let intervalBoja;

const promijeniBoju = () => {
  if (document.body.style.backgroundColor !== "black") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
};

document.getElementById("pokreni").addEventListener("click", () => {
  intervalBoja = setInterval(promijeniBoju, 1000);
});

document.getElementById("stop1").addEventListener("click", () => {
  clearInterval(intervalBoja);
});
