"use strict";

const user = {
  ime: "Igor",
};

console.log(user);
console.log(user.__proto__);

console.log(user.__proto__ === Object.prototype);

/* Primjer */

function korisnik(ime) {
  this.ime = ime;
}

korisnik.prototype.login = function () {
  console.log(`${this.ime} se logirao`);
};

const korisnik1 = new korisnik("Igor");
const korisnik2 = new korisnik("Ivan");

korisnik1.login();
korisnik2.login();
console.log(korisnik1);

console.log(korisnik1.__proto__ === korisnik2.__proto__);

/* ---------------------------------------------------------------------------------------------------------- */

const user1 = {
  id: 1,
  ime: "Maja",
  povecaj() {
    this.id++;
  },
};

console.log(user1);

user1.povecaj();
console.log(user1);

// drugi primjer kreiranja objekta
const user2 = {};

user2.id = 2;
user2.ime = "Ivana";
user2.povecaj = () => {
  this.id++;
};

console.log(user2);

// treći primjer kreiranja objekta

const user3 = Object.create(null);

user3.id = 3;
user3.ime = "Mario";
user3.povecaj = () => {
  this.id++;
};

console.log(user3);

/* 1. korak - Idemo napraviti funkciju za kreiranje objekata tzv. constructor funkciju */

/* function kreirajUsera(id, ime) {
  const user = Object.create(funkcijskaMetoda);
  user.id = id;
  user.ime = ime;
  return user;
}

const funkcijskaMetoda = {
  povecaj() {
    this.id++;
  },
  login() {
    console.log(`${this.ime} se logirao`);
  },
};

const user4 = kreirajUsera(1, "Iva");
const user5 = kreirajUsera(2, "Stjepan");
const user6 = kreirajUsera(3, "Maja");

console.log(user4, user5, user6); */

/* ------------------------------------------------------------------------------------------ */

// 2. korak - idemo optimizirati ovaj kod.
/* Umjesto da ubacimo kreiranje objekta unutar naše funkcije, idemo jednostavno u toj funkciji kreirajUsera samo kreirati ime i id, a
metode ćemo pretvoriti u prototipne funkcije na tom novokreiranom objektu. I na kraju moramo i samo kreiranje objekta definirati pomoću
new ključne riječi. */

/* function KreirajUsera(id, ime) {
  this.id = id;
  this.ime = ime;
}

KreirajUsera.prototype.povecaj = function () {
  this.id++;
};

KreirajUsera.prototype.login = function () {
  console.log(`${this.ime} se logirao`);
};

const user4 = new KreirajUsera(1, "Iva");
const user5 = new KreirajUsera(2, "Stjepan");
const user6 = new KreirajUsera(3, "Maja");

console.log(user4, user5, user6); */

/* --------------------------------------------------------------------------------------------- */

// 3. korak - idemo ovo pretvoriti u klasu

class KreirajUsera {
  constructor(id, ime) {
    this.id = id;
    this.ime = ime;
  }
  povecaj() {
    this.id++;
    return this;
  }
  login() {
    console.log(`${this.ime} se logirao`);
    return this;
  }
}

const user4 = new KreirajUsera(1, "Iva");
const user5 = new KreirajUsera(2, "Stjepan");
const user6 = new KreirajUsera(3, "Maja");

console.log(user4, user5, user6);
user4.povecaj().login();
console.log(user4);

/* Kod Method Chaininga moramo paziti da metode koje su pozvane u lancu, imaju definiran return na svojim metodama. */

let listaUsera = [];
listaUsera.push(user4, user5, user6);

console.log(listaUsera);

// 4. korak - idemo kreirati Admin klasu - klasu koja će kreirati admine i koja će naslijediti sva svojstva user klase.

class Admin extends KreirajUsera {
  obrisiUsera(user_iz_parametra) {
    listaUsera = listaUsera.filter((user_iz_Liste) => {
      return user_iz_Liste.ime != user_iz_parametra.ime;
    });
  }
}

const admin = new Admin(4, "Admin");

admin.obrisiUsera(user5);

console.log(listaUsera);
