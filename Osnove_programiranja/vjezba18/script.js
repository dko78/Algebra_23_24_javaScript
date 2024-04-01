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
useri.forEach((user) => console.log(user.prezime));

/* FILTER metoda

Filter metoda za razliku od forEach vraća određenu vrijednost. Ta vrijednost je kopija dijela liste filtrirana na način da uključuje u tu 
novu listu samo one elemente koji zadovolje tražene parametre filtera.
*/

const rijeci = ["prozor", "apartman", "autocesta", "lopata", "zvrk"];

const rezultat = rijeci.filter((rijec) => rijec.length > 6);
console.log(rezultat);

brojevi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const parniBrojevi = brojevi.filter((broj) => broj % 2 === 0);

console.log(parniBrojevi);

// ista stvar samo koristeći forEach metodu

const brojevi2 = [];

brojevi.forEach((broj) => {
  if (broj % 2 === 0) {
    brojevi2.push(broj);
  }
});

console.log(brojevi2);

const auti = [
  { ime: "Mercedes", kategorija: "limuzina", godinaProizvodnje: 2015 },
  { ime: "Audi", kategorija: "limuzina", godinaProizvodnje: 2017 },
  { ime: "Ford", kategorija: "karavan", godinaProizvodnje: 2016 },
  { ime: "Volvo", kategorija: "SUV", godinaProizvodnje: 2021 },
  { ime: "BMW", kategorija: "cabriolet", godinaProizvodnje: 2019 },
];

// koristeći filter metodu iz postojeće liste auta, u novu listu npr. limuzine, spremite aute koji su limuzine

const limuzine = auti.filter((auto) => auto.kategorija === "limuzina");

console.log(limuzine);

/* MAP metoda
Map metoda nam omogućava da uzmemo jednu listu i iz nje napravimo drugu listu u kojoj će naši članovi liste izgledai malo drugačije.
*/

const lista = [
  { proizvod: "Bicikl", cijena: 1500 },
  { proizvod: "Frižider", cijena: 2500 },
  { proizvod: "Perilica", cijena: 2000 },
  { proizvod: "Romobil", cijena: 800 },
  { proizvod: "Automobil", cijena: 60000 },
  { proizvod: "Tipkovnica", cijena: 80 },
];

const listaProizvoda = lista.map((objekt) => objekt.proizvod);
console.log(listaProizvoda);

// FIND metoda - pronalazi određenu vrijednost iz postojeće liste (samo prvi rezultat na koji naleti) i sprema ga u varijablu

const findLista = lista.find((auto) => auto.proizvod === "Automobil");
console.log(findLista);

// SOME metoda - recimo da želimo saznati ima li koji proizvod cijenu manju od 150. Funkcionira npr. kao "ili"/|| provjera
const manjaCijena = lista.some((objekt) => objekt.cijena <= 150);
console.log(manjaCijena);

// EVERY metoda - funkcionira isto kao Some metoda, ali recimo kao "i"/&& provjera
const manjaCijena2 = lista.every((objekt) => objekt.cijena <= 150);
console.log(manjaCijena2);

// INCLUDES metoda - ona je zgodna za brojevne liste. Kad nabrzinu želimo saznati sadrži li određena lista određenu vrijednost
const listaBrojeva = [1, 2, 3, 4, 5, 6];

const includesDva = listaBrojeva.includes(2);
console.log(includesDva);
