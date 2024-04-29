"use strict";

/* Funkcija koja kao parametar poziva drugu funkciju je funkcija višeg reda (HOF). A funkcija koju smo proslijedili je callback funkcija. */

const a = (fn) => {
  fn();
};

const b = () => {
  console.log("Hello world");
};

a(b);

/* -------------------------------------------------------------------------------------------------------------------- */

// 1. korak - Idemo složiti 2 funkcije za množenje i zbrajanje...

/* const brojevi = [10, 20, 30, 40];

const kvadrat = () => {
  const umnozak = brojevi.map((broj) => broj * 2);
  return umnozak;
};

const zbroj = () => {
  const suma = brojevi.map((broj) => broj + 1);
  return suma;
};

console.log(kvadrat());
console.log(zbroj()); */

/* ------------------------------------------------------------------------------------------------------------------------- */

// 2. korak - Idemo izvući logiku koja nije ista u ove 2 funkcije i presložiti da ne dupliramo kod...

/* const brojevi = [10, 20, 30, 40];

function izracunKvadrat(x) {
  return x * 2;
}

function izracunZbroj(x) {
  return x + 1;
}

const izracun = (fn) => {
  const rezultat = brojevi.map((broj) => fn(broj));
  return rezultat;
};

console.log(izracun(izracunKvadrat));
console.log(izracun(izracunZbroj)); */

/* ------------------------------------------------------------------------------------------------------------------------- */

// 3. korak - Idemo za kraj od ove naše HOF stvoriti novu custom metodu listi.

const brojevi = [10, 20, 30, 40];

function izracunKvadrat(x) {
  return x * 2;
}

function izracunZbroj(x) {
  return x + 1;
}

Array.prototype.izracun = function (fn) {
  const rezultat = this.map((broj) => fn(broj));
  return rezultat;
};

console.log(brojevi.izracun(izracunKvadrat));
console.log(brojevi.izracun(izracunZbroj));
