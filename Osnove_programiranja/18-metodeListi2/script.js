"use strict";
// foreach metoda, poziva funckiju za svakog člana, a to možemo spremitiu novu listu

let brojevi = [10, 20, 30, 40, 50];

//prvi je vrijednost liste, 2. mjesto je redno mjesto liste
brojevi.forEach(function (pojedinacniClanListe, rednoMjestoClanaListe) {
  console.log(pojedinacniClanListe * 10);
  console.log(pojedinacniClanListe, rednoMjestoClanaListe);
});

//najčešće kao arrow funkcija

brojevi.forEach((vrijednost, index, lista) => {
  // console.log(index, vrijednost);
  console.log(`${index} - ${vrijednost} i cijela lista ${lista}`);
});

//ove metode mozes koristii i na objektima

const users = [
  { ime: "Davor", prezime: "Horvat" },
  { ime: "Pero", prezime: "Perić" },
  { ime: "Ivo", prezime: "Ivić" },
];

users.forEach((user, index) => {
  console.log(user.ime);
});

const namesUsers = users.forEach((user) => {
  let u = user.name; //ne mozes vratiti sve i spremiti
  return u;
});

console.log(namesUsers);
