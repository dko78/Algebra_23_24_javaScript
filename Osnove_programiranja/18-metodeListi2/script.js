"use strict";

/* 
1) FOREACH metoda

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

//  2) filter metode za razliku od foreach vraća vrijednost

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

// 3) metoda map, vraća vrijednost
const lista = [
  { proizvod: "Bicikl", cijena: 1500 },
  { proizvod: "Frižider", cijena: 2500 },
  { proizvod: "Perilica", cijena: 2000 },
  { proizvod: "Romobil", cijena: 800 },
  { proizvod: "Automobil", cijena: 60000 },
  { proizvod: "Tipkovnica", cijena: 80 },
];
//todo moj zadatak sume
let ukCijena = 0;

lista.forEach((objekt) => {
  ukCijena += objekt.cijena;
});
console.log(ukCijena);

// moze i reduce metoda
const totalCijena = lista.reduce((accumulator, objekt) => {
  return (accumulator += objekt.cijena);
}, 0); // u prvoj iteraciji vrijednost accumulatora je 0, tozanči taj parametar

console.log(totalCijena);

// želim samo proizvode

const listaProizvoda = lista.map((objekt) => objekt.proizvod);

console.log(listaProizvoda);

// 4.) FIND metoda
//iz postojeće liste pronađe neki element
//find vraća samo prvu vrijednost, a filter vraća sve vrijednosti koje zafovoljavaju uvijet
const findLista = lista.find((auto) => auto.proizvod === "Automobil");
//vraća objekt s tim
console.log(findLista);

// 5.)SOME metoda, vraća boolean kao ILI tj. ||
//ima li koji proizvod cijenu manju od 150

const manjaCijena = lista.some((objekt) => objekt.cijena <= 150);
console.log(manjaCijena);

// 6.) EVERY metoda kao I, tj.&&

const manjaCIjena2 = lista.every((objekt) => objekt.cijena <= 150);
console.log(manjaCIjena2);

//7.INCLUDES da li lista ima određene vrijednosti

const listaBrojeva = [1, 2, 3, 4, 5, 6];

const inclBroj = listaBrojeva.includes(100);
console.log(inclBroj);
