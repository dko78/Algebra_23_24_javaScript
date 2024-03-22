"use strict";

const osoba1 = {
  ime: "Iva",
};

const osoba2 = osoba1; //pass by reference

console.log(osoba1, osoba2);

osoba2.ime = "Luka";

console.log(osoba1);
console.log(osoba2);

//izrada kopije objekata, ali samih vijednosti u heap memoriji
const user1 = {
  firstName: "Darko",
  lastName: "Horvat",
  godine: 30,
  zanimanje: "IT",
  prijatelji: ["Marko", "Ivo", "Sanja"],
};

console.table(user1);
//mijenjaš samo 1 člnana objekta, ime
//ako imaš objekt i pod objekt ovone radi. U ovomprimjeru imaš listu
//spred operator samo kod jednostavnih objekata, akonemaš podobjekt
const user2 = {
  ...user1,
  firstName: "Jhonny",
};

console.table(user2);

//nije duboka kopija objekta
user1.prijatelji.shift();

console.table(user1);

console.table(user2);

//od 2022 novi pristup

const stariObjekt = {
  a: { b: 10 },
  c: 2,
};

//const noviObjekt = { ...stariObjekt };

console.table(stariObjekt);
//console.table(noviObjekt);

//od 2022 structuredClone

const noviObjekt = structuredClone(stariObjekt);

stariObjekt.c = 5;
stariObjekt.a.b = 5;

console.table(stariObjekt);
console.table(noviObjekt);

//
/*
function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  }
  
  let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
  */
//u objkte mozemo staviti primitivne brojeve i slozene, alii funkcije mogu biti u objektu
// funckija unutar objekta se zove objektna metoda

const osoba = {
  ime: "Josip",
  prezime: "Horvat",
  godRodjenja: 1994,
  prijatelji: ["Marko", "Ivo", "Sanja"],
  vozacka: true,
  starost: function (godRodjenja) {
    return 2024 - godRodjenja;
  },
  login() {
    console.log(this.ime, "je logiran");
  },
};

console.log(osoba.starost(osoba.godRodjenja));

console.log(osoba.starost(1990));

//bracket notacija
console.log(osoba["starost"](1990));

console.log();

//ključna riječ this
const osobaThis = {
  ime: "Josip",
  prezime: "Horvat",
  godRodjenja: 1994,
  prijatelji: ["Marko", "Ivo", "Sanja"],
  vozacka: true,
  starost: function (godRodjenja) {
    return 2024 - this.godRodjenja;
  },
  login() {
    console.log(this.ime, "je logiran");
  },
};

console.log(osobaThis.starost());

//optimizacije
const osobaThis2 = {
  ime: "Josip",
  prezime: "Horvat",
  godRodjenja: 1994,
  prijatelji: ["Marko", "Ivo", "Sanja"],
  vozacka: true,
  starost: function (godRodjenja) {
    this.dob = 2024 - this.godRodjenja; //dob je novi član objekta, pa ne moraš 100 puta zvati
    return this.dob;
  },
  provjera: function () {
    return `${this.ime} je ${this.starost()} - godišnji ${this.zanimanje} i ${
      this.vozacka ? "ima" : "nema"
    } vozačku dozvolu`;
  },
  provjera2: function () {
    return `${this.ime} je ${this.dob} - godišnji ${this.zanimanje} i ${
      this.vozacka ? "ima" : "nema"
    } vozačku dozvolu`;
  },

  login() {
    console.log(this.ime, "je logiran");
  },
};

console.log(osobaThis2.starost());
osobaThis2.login();

console.log(osobaThis2.provjera());
console.log(osobaThis2.provjera2());

//vježba

const obj1 = {
  a: 1,
  b: 2,
};

const obj2 = {
  a: 3,
  b: 4,
};

const obj3 = {
  c: 3,
  d: 4,
};

//umjesto spred operatora moze se koristiit

const o3 = { ...obj1, ...obj3 };
console.log(o3);

//assign metoda

const todos = [
  { id: 1, zadatak: "kupi kruh" },
  { id: 2, zadatak: "kupi mlijeko" },
  { id: 3, zadatak: "kupi paštetu" },
];

console.log(todos[1]);

//pomoću keys metode na Object svojstvu mozemo dohvatiti člana liste
let x = Object.keys(todos[0]);

console.log(x);

x = Object.keys(todos[0]).length;

console.log(x); //pazi ispiše broj -1

x = Object.values(todos[0]);

console.log(x);

//da li ima vrijedsnot

x = todos[0].hasOwnProperty("zadatak");

console.log(x);
