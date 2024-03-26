"use strict";
//vrijednost varijable staviti u objekt

const ime = "Darko";

const prezime = "Horvat";
const godine = 30;

const prijatelji = ["ivo", "pero"];

const osoba = {
  ime: ime,
  prezime: prezime,
  godine: godine,
  prijatelji: prijatelji,
};

console.log(osoba);

//dekonstruiranje objekta<(i listi)
//dekonstruiranje listi
const brojevi = [1, 2, 3, 4, 5, 6];

const [broj1, broj2, ...ostatakListe] = brojevi;

console.log(broj1, broj2, ostatakListe);

const [num1, , num3] = brojevi;

console.log(num3);

//dekonstruiranje objekta

const todo = {
  id: 1,
  zadatak: "Kupi kruh",
  adresa: {
    ulica: "Trg 1",
    grad: "Sisak",
  },
};

//const id = todo.id;

//moze bolje ovako
const { id, zadatak, adresa } = todo;
console.log(id, zadatak, adresa);

const {
  id: todID,
  adresa: { ulica },
} = todo;

console.log(ulica);
console.log(todID);
