"use strict";

const objekt1 = {
  a: 1,
  b: 2,
};

const objekt2 = {
  b: 3,
  d: 4,
};

// spread operator metoda kod objekata
const objekt3 = { ...objekt1, ...objekt2 };

const os1 = {
  ime: "Darko",
  prezime: "Horvat",
  godRodjenja: 1994,
  zanimanje: "Poštar",
  prijatelji: ["Luka", "Matija", "Marko"],
  vozackaDozvola: !true,
};

const os2 = {
  ime: "Dalibor",
  prezime: "Kovačić",
  godRodjenja: 1978,
  zanimanje: "Indormatičar",
  prijatelji: ["Bole", "Brale", "Žeko"],
  vozackaDozvola: true,
};

console.log(os1);

const osobeX = Object.assign({}, os1, os2);
console.log(osobeX);

console.log(objekt3);

// assign metoda kod objekata

const objekt4 = Object.assign(objekt1, objekt2);
console.log(objekt4);

const todos = [
  { id: 1, zadatak: "Kupi kruh" },
  { id: 2, zadatak: "Kupi mlijeko" },
  { id: 3, zadatak: "Tankaj auto" },
];

console.log(todos[1].zadatak);

// pomoću keys metode na Object svojstvu možemo dohvatiti ključeve člana liste (u ovom slučaju člana liste koji je objekt)
let x = Object.keys(todos[0]);
console.log(x)

// kada me zanima koliko ključeva ima u prvom podobjektu liste mogu dodati length svojstvo i ispisati broj ključeva
x = Object.keys(todos[0]).length;
console.log(x)
// ako želimo ispisati vrijednosti a ne ključeve, možemo koristiti values metodu
x = Object.values(todos[0]);

// ako želimo provjeriti da li imamo određenu vrijednost unutar objekta možemo koristiti hasOwnProperty metodu
x = todos[0].hasOwnProperty("zadatak");

console.log(x);
