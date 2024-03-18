const ime = "Matko";
const zanimanje = "Učitelj";
const godRodjenja = 2004;
const trenutnaGod = 2024;

/* String literal */
const osoba =
  "Ja sam " +
  ime +
  ", " +
  (trenutnaGod - godRodjenja) +
  "-godišnji " +
  zanimanje +
  ".";

console.log(osoba);

/* Template literal - otvaraju se sa znakom `, tzv. backtick (Alt Gr + 7). 
Varijable se pozivaju sa znakom dolara i unutar vitičastih zagrada */

const osobaNovo = `Ja sam ${ime}, ${
  trenutnaGod - godRodjenja
}-godišnji ${zanimanje}.`;

console.log(
  "String\n\
sa\n\
više\n\
linija"
);

console.log(`
String
sa
više
linija
koda`);

const zemlja = "Hrvatska";
const kontinent = "Europa";
const populacija = 3.8e6;

// Zadatak - ispišite pomoću ovih varijabli rečenicu : Hrvatska ima 3.8m stanovnika i nalazi se u Europi.
const recenica = `${zemlja} ima ${populacija} stanovnika i nalazi se u ${kontinent}`;
console.log(recenica);

console.log(zemlja.length);

/* Matematičke metode sa brojevima i varijablama */

let x;

// izračun korijena broja
x = Math.sqrt(16);

// apsolutna vrijednost broja
x = Math.abs(-5);

// zaokruživanje decimalnog broja
x = Math.round(5.4);

// prisilno zaokruživanje na gore
x = Math.ceil(5.1);

// prisilno zaokruživanje na dolje
x = Math.floor(5.9);

// uklanjanje decimalne vrijednosti
x = Math.trunc(4.4);

// min broj iz liste/niza brojeva
x = Math.min(2, 5, 6, 7, 1);

// max broj iz liste/niza brojeva
x = Math.max(2, 5, 6, 7, 1);

// random broj
x = Math.random() * 10;

console.log(x);

// Zadatak - kako dobiti random broj između 1 i 10?

//Možemo pomoću kombinacije floor i random metode
let randomBroj = Math.floor(Math.random() * 10 + 1);
//Možemo i pomoću kombinacije trunc i random metode
randomBroj = Math.trunc(Math.random() * 10 + 1);
console.log(randomBroj);

/* Zadatak - definirajte 2 varijable (a, b). Neka varijabla a bude random broj između 1-100, a varijabla b između 1-50.
Napravi varijable za sumu i razliku ta 2 broja (a i b) i zapiši putem template literala rezultat tih računskih operacija u te varijable
sume i razlike. */

const a = Math.floor(Math.random() * 100) + 1;
const b = Math.floor(Math.random() * 50) + 1;

const c = a + b;
const d = a - b;

const suma = `${a} + ${b} = ${c}`;
const razlika = `${a} - ${b} = ${d}`;

console.log(suma, razlika);
