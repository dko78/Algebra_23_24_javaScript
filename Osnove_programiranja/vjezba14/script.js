"use strict";

const osoba1 = {
  ime: "Iva",
};

// ovakav pristup će samo kopirati putanju prema vrijednostima iz objekta koje su zapisane u heap memoriji
const osoba2 = osoba1;

console.log(osoba1, osoba2);

osoba2.ime = "Luka";

console.log(osoba1, osoba2);

/* Izrada kopije objekta, ali samih vrijednosti zapisanih u heap memoriji. Ako su podaci višeslojeviti, ovaj pristup će samo od top level
podataka napraviti kopiju, ali ako ima ugniježđeni objekt unutar objekta i dalje će biti referentna putanja na stari podobjekt.
Također ista priča ako imamo listi unutar liste... */

const user1 = {
  ime: "Darko",
  prezime: "Horvat",
  godine: 30,
  zanimanje: "Poštar",
  prijatelji: ["Luka", "Matija", "Marko"],
};

const user2 = {
  ...user1,
  ime: "Marija",
  prezime: "Marić",
};

user1.prijatelji.shift();

console.table(user1);
console.table(user2);

const stariObjekt = {
  a: { b: 10 },
  c: 2,
};

// od 2022. imamo metodu kojom možemo napraviti DEEP COPY objekta pomoću structuredClone metode

const noviObjekt = structuredClone(stariObjekt);

stariObjekt.c = 5;
stariObjekt.a.b = 5;

console.table(stariObjekt);
console.table(noviObjekt);

// Funkcija unutar objekta se zove objektna metoda

/* const osoba = {
  ime: "Darko",
  prezime: "Horvat",
  godRodjenja: 1994,
  zanimanje: "Poštar",
  prijatelji: ["Luka", "Matija", "Marko"],
  vozackaDozvola: true,
  starost: function (godRodjenja) {
    return 2024 - godRodjenja;
  },
  // skraćeni način definiranja funkcije kao člana objekta
  login() {
    console.log(this.ime, "je logiran");
  },
  logout() {
    console.log(this.ime, "se odlogirao");
  },
};

// dot notacijom računamo return funkcije starost
console.log(osoba.starost(1990));

// bracket notacijom računamo return funkcije starost
console.log(osoba["starost"](1990));

osoba.login();
osoba.logout(); */

/* ----------------------------------------------------------------- */

// Implementacija ključne riječi this na ovom objektu

const osoba = {
  ime: "Darko",
  prezime: "Horvat",
  godRodjenja: 1994,
  zanimanje: "Poštar",
  prijatelji: ["Luka", "Matija", "Marko"],
  vozackaDozvola: true,
  starost: function () {
    this.dob = 2024 - this.godRodjenja;
    return this.dob;
  },
  provjera: function () {
    return `${this.ime} je ${this.starost()}-godišnji ${this.zanimanje} i ${
      this.vozackaDozvola ? "ima" : "nema"
    } vozačku dozvolu`;
  },
  // skraćeni način definiranja funkcije kao člana objekta
  login() {
    console.log(this.ime, "je logiran");
  },
  logout() {
    console.log(this.ime, "se odlogirao");
  },
};

console.log(osoba.provjera());

// dot notacijom računamo return funkcije starost
console.log(osoba.starost());

// bracket notacijom računamo return funkcije starost
console.log(osoba["starost"]());

console.log(osoba.dob);

osoba.login();
osoba.logout();
