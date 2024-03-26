"use strict";

const osoba = ["Darko", "Horvat", 30, "poštar", ["Marko", "Maja", "Josipa"]];

console.log(osoba, osoba[2]);

/* 
U situaciji kada bi htjeli imenovati ključeve za dohvaćanje podataka (što ne možemo u listama, jer tamo ih hvatamo po indexu, tj. broju
na koje se nalaze u listi), možemo koristiti objekte. Za razliku od listi, njih definiramo vitičastom zagradom i njezini članovi
imaju svoj ključ/vrijednost par. Znači mi definiramo ključ pod kojim se sprema vrijednost i pomoću tog ključa možemo i dohvaćati vrijednosti
iz objekta. Znači stvari iz liste dohvaćamo indexom, tj. brojem a kod objekata dohvaćamo ključem koji smo dodijelili određenoj vrijednosti. 
*/

const objekt = {
  firstName: "Darko",
  lastName: "Horvat",
  godine: 30,
  zanimanje: "poštar",
  prijatelji: ["Marko", "Maja", "Josipa"],
};

console.log(objekt);

/* Dohvaćanje određene vrijednosti iz objekta pomoću ključa se može odraditi na 2 načina */

// 1 način je tzv. "dot" notacija
console.log(objekt.prijatelji[2]);

// 2 način je tzv. "bracket" notacija
console.log(objekt["godine"]);

// demonstracija kada bi koristili bracket notaciju

console.log(objekt.firstName);

console.log(objekt["firstName"]);

// konkretno kada koristiti bracket notaciju

const spojnica = "Name";

console.log(objekt["first" + spojnica]);
console.log(objekt["last" + spojnica]);

/* const upitnik = prompt(
  "Što vas zanima o osobi? Izaberi između firstName, lastName, godine, zanimanje, prijatelji"
);

// dot notacijom ovo ne možemo ispisati, tj. ne znamo što je ovo, jer naravno upitnik nije član objekta
console.log(objekt.upitnik);

// bracket notacijom ovo možemo dohvatiti
console.log(objekt[upitnik]); */

// par korisnih o listama

const prijatelji = ["Marko", "Maja", "Josipa"];

/* Postoje 2 načina da provjerimo na kojem mjestu se nalazi određeni član listei da li je uopće član liste. */

// indexOf metoda liste je način provjere da li je određena vrijednost član liste, ako je dat će nam lokaciju u listi, ako nije dat će -1
console.log(prijatelji.indexOf("Josip"));

// includes je boolean provjera

console.log(prijatelji.includes("Josipa"));

if (prijatelji.includes("Josipa")) {
  console.log("Imam prijateljicu Josipu");
}

// NAČINI SPAJANJA LISTI

let x;
const voce = ["jabuke", "kruske", "trešnje"];
const bobice = ["kupine", "maline", "borovnice"];

// 1. način je da nestamo (postavimo listu unutar liste)

/* voce.push(bobice);
console.log(voce); */

// 2. način je konkateniranje listi, dugo korišteno
x = voce.concat(bobice);
console.log(x);

// Spread operator koji služi za expandiranje listi/objekata u jednu varijablu. U biti ćemo ga koristiti za spajanje objekata više nego listi...

const brojevi = [1, 2, 3];
const noviBrojevi = [...brojevi, 4];
console.log(noviBrojevi);
const brojevi2 = [4, 5, 6];

const noviBrojevi2 = [...brojevi, ...brojevi2];
console.log(noviBrojevi2);

// prije se koristila flat metoda kako bi eliminirali nepotrebne podliste
const lista = [voce, bobice];
const slozenaLista = lista.flat();
console.log(slozenaLista);
