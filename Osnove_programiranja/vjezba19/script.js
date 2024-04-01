"use strict";

// MAP metoda

const listaBrojeva = [1, 4, 8, 17];

// prođi listaBrojeva, svakog pomnoži sa 2 i spremi u novu listu rezultate

const umnozakBrojeva = listaBrojeva.map((broj) => broj * 2);
console.log(umnozakBrojeva);

// kako bi dodali string na naše rezultate koristeći coercion

const mapa = listaBrojeva.map((broj) => "Broj " + broj * 2);
console.log(mapa);

// ajde umnožak napravite sa forEach metodom

const brojevi2 = [];
listaBrojeva.forEach((broj) => {
  brojevi2.push(broj * 2);
});

console.log(brojevi2);

// Idemo koristeći primjer iz prošle vježbe kreirati listu marki automobila

const auti = [
  { ime: "Mercedes", kategorija: "limuzina", godinaProizvodnje: 2015 },
  { ime: "Audi", kategorija: "limuzina", godinaProizvodnje: 2017 },
  { ime: "Ford", kategorija: "karavan", godinaProizvodnje: 2016 },
  { ime: "Volvo", kategorija: "SUV", godinaProizvodnje: 2021 },
  { ime: "BMW", kategorija: "cabriolet", godinaProizvodnje: 2019 },
];

const marka = auti.map((marke) => marke.ime);
console.log(marka);

// kreirajte koristeći map metodu objekt koji će imati samo marku i kategoriju

const markaKat = auti.map((auto) => {
  return { marka: auto.ime, kategorija: auto.kategorija };
});
console.log(markaKat);

// Npr. trebate napraviti više od jedne metode na određenoj listi kako bi dobili željeni rezultat. Za to koristmo chain methods.

const rezultat = listaBrojeva.map((broj) => Math.sqrt(broj)).map((broj) => broj * 2);
console.log(rezultat);

const rezultat2 = listaBrojeva
  .map(function (broj) {
    return Math.sqrt(broj);
  })
  .map(function (broj) {
    return broj * 2;
  });

console.log(rezultat2);

// kombiniranje različitih metoda

const brojevi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const rezultat3 = brojevi.filter((broj) => broj % 2 === 0).map((broj) => broj * 2);
console.log(rezultat3);

/* REDUCE metoda
Reduce metoda izvršava tzv. "reducer" callback funkciju kojoj je svrha da sve članove liste svede i zapiše u jednu vrijednost.
Npr. zamislite primjer sa košaricom proizvoda, svaki proizvod ima svoju vrijednost a nas recimo zanima suma svih tih stavki
(a ne znamo koliko ih ima).
*/

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pocetnaVrijednost = 0;

// idemo sad napraviti reduce metoda

const suma = lista.reduce(function (prijasnjaVrijednost, trenutnaVrijednost) {
  return prijasnjaVrijednost + trenutnaVrijednost;
}, pocetnaVrijednost);

console.log(suma);

const suma2 = lista.reduce((prije, sad) => prije + sad, 0);
console.log(suma2);

// ajmo napisati isto ovo koristeći for petlju
const suma3 = () => {
  let prije = 0;
  for (const broj of lista) {
    prije += broj;
  }
  return prije;
};

console.log(suma3());

// idemo sad napraviti našu košaricu

const kosarica = [
  { id: 1, proizvod: "kruh", cijena: 1.5 },
  { id: 2, proizvod: "mlijeko", cijena: 2 },
  { id: 3, proizvod: "salama", cijena: 5 },
  { id: 4, proizvod: "sapun", cijena: 4 },
  { id: 5, proizvod: "čips", cijena: 3 },
];

// izračunaj ukupni zbroj cijena iz košarice koristeći reduce metodu
const suma4 = kosarica.reduce((zbroj, item) => {
  return zbroj + item.cijena;
}, 0);

console.log(suma4);
