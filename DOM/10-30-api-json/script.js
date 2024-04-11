"use strict";

// JSON FILE FORMAT
const post = {
  id: 1,
  naslov: "Prvi post",
  sadrzaj: "fdsfsdf",
};

//stringify metodom pretvrarmo objekt u JSON format (sve je string)
const jsonFile = JSON.stringify(post);
console.log(jsonFile);

//parse metodom pretvaramo json format nazad u objekt
const objectFile = JSON.parse(jsonFile);

console.log(objectFile.id);

//asinkroni kod

setTimeout(() => {
  console.log("pozz id set timeout");
}, 0); //nakon koliko milisekundi
//ide na event loop

console.log("poz izvan timeouta");

const promijeniText = () => {
  document.getElementById("naslov").textContent =
    "pozz iz setTimeout callback funckije";
};

const promjena = setTimeout(promijeniText, 2000);

document.getElementById("stop").addEventListener("click", () => {
  clearTimeout(promjena);
  console.log("set timeout je otkazan");
});

// setInterval
const ispis = () => {
  console.log("ispis");
};

const interval = setInterval(ispis, 1000);

//zaustavljanje

document.getElementById("stop1").addEventListener("click", () => {
  clearInterval(interval);
});

//priomjer inarvala
let intervalBoja;

const promijeniBoju = () => {
  if (document.body.style.backgroundColor !== "black") {
    document.body.style.backgroundColor = "black";
    document.body.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.color = "black";
  }
};

document.getElementById("pokreni").addEventListener("click", () => {
  intervalBoja = setInterval(promijeniBoju, 1000);
});

document.getElementById("stop1").addEventListener("click", () => {
  clearInterval(intervalBoja);
  //intervalBoja = undefined;
});
