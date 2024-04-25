"use strict";

//parametar je funckija

const a = (fn) => {
  fn();
};

const b = () => {
  console.log("hello world");
};

a(b);

//a funkcija je f. višeg reda

const brojevi = [10, 20, 30, 40];
const kvadrat = () => {
  const umnozak = brojevi.map((broj) => broj * 2);
  return umnozak;
};

const zbroj = () => {
  const suma = brojevi.map((broj) => broj + 2);
  return suma;
};
//ovoje dosta slično, bolje preslozi
console.log(kvadrat());
console.log(zbroj());
//ovako bolje
function izracunKvadrat(x) {
  return x * 2;
}

function izracunZbroj(x) {
  return x + 2;
}

const izracun = (fn) => {
  const rezultat = brojevi.map((broj) => fn(broj));
  return rezultat;
};
/*
console.log(izracun(izracunKvadrat));
console.log(izracun(izracunZbroj));
*/
Array.prototype.izracun = function (fn) {
  const rezultat = this.map((broj) => fn(broj));
  return rezultat;
};
