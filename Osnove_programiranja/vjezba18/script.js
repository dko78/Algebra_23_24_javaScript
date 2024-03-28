"use strict";

/* 
FOREACH metoda

forEach metoda prolazi listu član po član (svaki član ulazi kao parametar) i na njemu radi određene izmjene. Te izmjenjene članove
možemo spremiti u neku novu listu.
*/

let brojevi = [10, 20, 30, 40, 50];

brojevi.forEach(function (pojedinacni_clan_liste, redno_mjesto_clana_liste) {
  console.log(pojedinacni_clan_liste, redno_mjesto_clana_liste);
});

// idemo vidjeti kako ovo napisati kao arrow funkciju

brojevi.forEach((vrijednost, index, lista) => {
  console.log(`${index} - ${vrijednost} i cijela lista ${lista}`);
});

// idemo vidjeti kako bi upotrijebili metodu listi na objektima

const useri = [
  { ime: "Davor", prezime: "Horvat", godine: 30 },
  { ime: "Maja", prezime: "Majić", godine: 25 },
  { ime: "Stjepan", prezime: "Stjepić", godine: 25 },
];

useri.forEach((user) => console.log(user.ime));

//filter metode za razliku od foreach vraća vrijednost

const rijeci = ["prozor", "apartman", "lopata", "zvrk"];
//samo one kojiimaju više od 6 znakova
const rezultat = rijeci.filter((rijec) => rijec.length > 6); //ako je jedan red onda moze bez RETURN, inaće ako { onda return obavezno}

console.log(rezultat);

brojevi = [10, 20, 30, 40, 50];

const brojeviVeciOd30 = brojevi.filter((broj) => {
  //return broj % 2 === 0;
  return broj > 30; //mora return jer {}
});

console.log(brojeviVeciOd30);

//ista stvar sali samo sa foreach
const brojevi2 = [];
brojevi.forEach((broj) => {
  if (broj > 30) {
    brojevi2.push(broj);
  }
});

console.log(brojevi2);
/*
brojevi.forEach((broj) => {
  return broj % 2 === 0;;
});
*/

const auti = [
  { ime: "Mercedes", kategorija: "limuzina", godinaProizvodnje: 2015 },
  { ime: "Audi", kategorija: "limuzina", godinaProizvodnje: 2017 },
  { ime: "Ford", kategorija: "karavan", godinaProizvodnje: 2016 },
  { ime: "Volvo", kategorija: "SUV", godinaProizvodnje: 2021 },
  { ime: "BMW", kategorija: "cabriolet", godinaProizvodnje: 2019 },
];

//koristeći fileter metodu iz postojeće u novu listu npr limunzine spremi koji su limunzine
const limunzine = auti.filter((auto) => {
  return auto.kategorija === "limuzina";
});

// metoda map
