"use strict";

//map metoda

const listaBrojeva = [1, 4, 8, 17];

//prođi listu pomnozi sa 2 i spremi u novu listu
const umnozakBrojeva = listaBrojeva.map((broj) => broj * 2);

console.log(umnozakBrojeva);

//
const mapa = listaBrojeva.map((broj) => "Broj " + broj * 2);
console.log(mapa);

//umnozak s foreach
//ista stvar sali samo sa foreach
const brojevi2 = [];
listaBrojeva.forEach((broj) => {
  brojevi2.push(broj * 2);
});
console.log(brojevi2);

const auti = [
  { ime: "Mercedes", kategorija: "limuzina", godinaProizvodnje: 2015 },
  { ime: "Audi", kategorija: "limuzina", godinaProizvodnje: 2017 },
  { ime: "Ford", kategorija: "karavan", godinaProizvodnje: 2016 },
  { ime: "Volvo", kategorija: "SUV", godinaProizvodnje: 2021 },
  { ime: "BMW", kategorija: "cabriolet", godinaProizvodnje: 2019 },
];

const marka = auti.map((marke) => marke.ime);
console.log(marka);

//kreirajte objekt koji će imatisamo marku i kategoriju

const markeiKategorije = auti.map((auto) => {
  return { marka: auto.ime, kategorija: auto.kategorija };
});
console.log(markeiKategorije);
