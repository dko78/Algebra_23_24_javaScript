"use strict";

//rekurzija - ponavljanejizvoženaj dok se odr. uvijet ne ispuni
//prvo uvijet pa operacija koja samu sebe poziva dok se ne

function golovi(gol) {
  //čim otvorim funkciju definiramo uvijet kad će funcija završiti
  if (gol > 10) return;
  //definiranje rekurzivnog poziva
  else console.log(`gol ${gol}`);
  return golovi(gol + 1);
}

golovi(1);

for (let i = 1; i <= 10; i++) {
  console.log(`gol ${i}`);
}

//nociji pristup for petlji

const predmeti = ["stol", "Stolica", "vaza"];

for (let i = 0; i <= predmeti.length; i++) {
  console.log(predmeti[i]);
}

//novija je of metoda
for (const predmet of predmeti) {
  console.log(predmet);
}

//kako to iskoristi kod listi objekata

const korisnici = [
  { ime: "Davor" },
  { ime: "Maja" },
  { ime: "Iva" },
  { ime: "Davor" },
];

for (const korisnik of korisnici) {
  console.log(korisnik.ime);
}

const rijec = "Algebra";
for (const slovo of rijec) {
  console.log(slovo);
}

const boje = ["CRVENA", "PLAVA", "ŽUTA"];
//vraća ključ
for (const boja in boje) {
  console.log(boja);
  console.log(boje, boje[boja]);
}

console.log(boje.indexOf("CRVENA"));

//praktičan primjer
const osoba = ["Davor", "Horvat", 30, "Poštar", ["Luka", "Iva", "Anita"], true];

console.log(osoba);

console.log(typeof osoba[0]);

const tipovi = [];

for (let i = 0; i < osoba.length; i++) {
  tipovi[i] = typeof osoba[i];
}

console.log(tipovi);

//petlja unutar petlje
for (let i = 1; i <= 3; i++) {
  const var1 = 1;
  //console.log(i);
  for (let j = 1; j <= 4; j++) {
    console.log(`${var1}`);
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

//push metoda

const godine = [1990, 1991, 1992];
const dob = [];

for (let i = 0; i < godine.length; i++) {
  dob.push(2024 - godine[i]);
}

console.log(dob);

//break i continue

for (let i = 0; i < 20; i++) {
  if (i === 10) {
    console.log("Stop");
    //ontinue;
    break;
  }
  console.log(i);
}

//obrnuto (let i = godine.lenght-1; i >= 0, i--)
