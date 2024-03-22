"use strict";

const osobaObjekt = {
  firstName: "Darko",
  lastName: "Horvat",
  godine: 30,
  zanimanje: "IT",
  prijatelji: ["Marko", "Ivo", "Sanja"],
};

console.log(osobaObjekt); //po abecedi

console.log(osobaObjekt.godine);

console.log(osobaObjekt.prijatelji[0]);

//[] primjer
const spojnica = "Name";
console.log(osobaObjekt["first" + spojnica]);
//to koristiš kod promta

//const upitnik = prompt("Što vas zanima o osobi firstName, godine, zanimanje");

//console.log(osobaObjekt[upitnik]);
/*
let sum = 0;
const numbers = [65, 44, 12, 4];
function myFunction(item) {
  sum += item;
}
console.log(sum);
*/

//js je sinkroni, alimoze biti i asinkorni
//kod ide u JS engine, iizvršava ga kako je napisan
//parser sprema varijable u memoriju
//ima garbage collector, pa varijable unutar funcija se brišu
//globalni i funkcijski contekst imaš. Globalnije stalno dostupan.
//brza memorija, za primitvne (string, brojeve, boolean,i HEAP memoriju za objeklte, liste...)
//ima call stack da se spremaju redoslijed izvođenja funkcije

//par korisnih o listama

const prijatelji = ["Marko", "Ivo", "Sanja"];

//posoje 2 najčešće korištena načinda da vidimo da li je član liste i gdje se nalazi
//ako ga ne nađe onda se dobije -1
console.log(prijatelji.indexOf("Josip"));

console.log(prijatelji.indexOf("Sanja"));

//kazu bolej sa es6, includes je boolean

console.log(prijatelji.includes("Ivo"));
//todo završi ovo
let traziIme;

traziIme = "Sanja";

const ispisPrijatelja = () => {
  if (prijatelji.includes("traziIme")) {
    return `Imaš prijateljicu ${traziIme}`;
  } else {
    return `Nemaš prijatelja`;
  }
};

console.log(ispisPrijatelja("Sanja"));

//spajanje liste

let x;
const voce = ["jabuke", "kruske", "kiwi"];
const povrce = ["kelj", "brokula"];

//prvi nacin PUSH, ali toje lista unutar liste

//kontekacanacija concat, i je dugo koristeno, i danas ali...
x = voce.concat(povrce);
console.log(x);

//novije 2016 spread operator(...) koristi za ekspandirane objekata

const listaBrojevi = [1, 2, 3];
const noviBrojevi = [...listaBrojevi, 4];
console.log(noviBrojevi);

const brojevi2 = [4, 5, 6];

const novi2 = [...listaBrojevi, ...brojevi2];
console.log(novi2);

const voceIPovrce = [...voce, ...povrce];

//flat se je koristilo da se eliminiraju nepotrebne podliste

const listax = [voce, povrce];
const slozenaLista = listax.flat();
console.log(slozenaLista);
