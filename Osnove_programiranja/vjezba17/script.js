"use strict";

console.log("gol 1");
console.log("gol 2");
console.log("gol 3");
console.log("gol 4");
console.log("gol 5");
console.log("gol 6");
console.log("gol 7");
console.log("gol 8");
console.log("gol 9");
console.log("gol 10");

/* Rješavanje ovakvog problema možemo napraviti rekurzijom iliti ponavljanjem izvođenja dok se određeni uvjet ne ispuni. Prvo definiramo
uvjet kada se rekurzija završava, a onda tek definiramo operaciju unutar funkcije koja će samu sebe pozivati iznova dok se ovaj uvjet
na početku ne ispuni. */

function golovi(gol) {
  // 1. korak - čim otvorimo funkciju definiramo uvjet kad će rekurzija završiti
  if (gol > 10) return;
  // 2. korak - definiranje rekurzivnog poziva i što će on raditi
  console.log(`gol ${gol}`);
  return golovi(gol + 1);
}

golovi(1);

// kako bi ovo isto napisali sa for petljom?

for (let i = 1; i <= 10; i++) {
  console.log(`gol ${i}`);
}

// moderan pristup for petlji

const predmeti = ["stol", "stolica", "stoljnjak", "vaza"];

for (let i = 0; i < predmeti.length; i++) {
  console.log(predmeti[i]);
}

// Novi način pisanja for petlje, tzv. "of" metoda.
// Ideja je da definiramo element kao jednog člana liste elemenata i prođemo kroz sve članove liste.

for (const predmet of predmeti) {
  console.log(predmet);
}

// kako to iskoristiti kod liste objekata

const korisnici = [
  { ime: "Davor" },
  { ime: "Maja" },
  { ime: "Iva" },
  { ime: "Stjepan" },
  { ime: "Jelena" },
];

for (const korisnik of korisnici) {
  console.log(korisnik.ime);
}

// Možemo loopati i string npr. :

const rijec = "Algebra";
for (const slovo of rijec) {
  console.log(slovo);
}

const boje = ["crvena", "zelena", "plava", "žuta", "crvena"];

/* Za dohvaćanje ključeva/rednog člana listnog elementa možemo koristiti "in" metodu. */
for (const boja in boje) {
  console.log(boja, boje[boja]);
}

// praktičan primjer

const osoba = ["Davor", "Horvat", 30, "Poštar", ["Luka", "Bernarda", "Zvonimir", "Branimir"], true];

const tipovi = [];

for (let i = 0; i < osoba.length; i++) {
  tipovi[i] = typeof osoba[i];
}

console.log(tipovi);

// petlja unutar petlje (ugniježđena petlja)

for (let i = 1; i <= 3; i++) {
  console.log(`broj ${i}`);
  for (let j = 1; j <= 3; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

/* Ovakvo ponašanje se događa jer imamo petlju unutar petlje, kada prva petlja krene i naleti na ugniježđenu petlju, ta petlja se mora
odvrtiti do kraja i tek kad se odvrti do kraja, kreće iduća iteracija vanjske petlje, koja onda ponovo pokreće u toj idućoj iteraciji
unutarnju petlju da se vrti iz početka za tu iteraciju vanjske petlje. */

const godine = [1999, 2001, 2005, 1995];
const dob = [];

for (let i = 0; i < godine.length; i++) {
  dob.push(2024 - godine[i]);
}

console.log(dob);

// continue i break

/* Napravit ćemo for petlju koja ide do 20, ali želimo napraviti prekid izvršenja petlje ako dođe do toga da se neki uvjet ispuni. */

for (let i = 0; i <= 20; i++) {
  if (i === 10) {
    console.log("STOP!");
    break;
  }
  console.log(i);
}

/* Napravit ćemo for petlju koja ide do 20, ali želimo na određenom mjestu umjesto ispisa onog što bi se trebalo ispisati po redoslijedu
izvođenja postaviti da se odradi nešto drugo i nakon toga nastavi izvršavanje petlje. */

for (let i = 0; i <= 20; i++) {
  if (i === 10) {
    console.log("Umjesto broja 10, ide deset...");
    continue;
  }
  console.log(i);
}

// izvođenje petlje od zadnjeg prema prvom članu liste

for (let i = godine.length - 1; i >= 0; i--) {
  console.log(godine[i]);
}
