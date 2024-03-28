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

//primjena 2 metode na listi, chejnanje metoda

const rezultat = listaBrojeva
  .map((broj) => Math.sqrt(broj))
  .map((broj) => broj * 2);
console.log(rezultat);

const rezultat2 = listaBrojeva
  .map(function (broj) {
    return Math.sqrt(broj);
  })
  .map(function (broj) {
    return broj * 2;
  });

//kombiniranje različitih metoda

const brojevi = [1, 4, 8, 17];
//izvuci parne i pomnozi sa 2
const rezultat3 = brojevi
  .filter((broj) => broj % 2 === 0)
  .map((broj) => broj * 2);

console.log(rezultat3);

//       REDUCE metoda
//VRAĆA 1 VRIJESNOST
//REDUCER CALLBACK FUNCKIJU , SVRHA JE DA SVE ČLANOVE LISTE ZAPIŠE U JEDNU VRIJESNOST
//SAMO ZA BROJEVE
//košarica proizvoda, svakiproizvod ima vrijednost, a nas zanima suma svih stavki

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pocetnaVrijednost = 0;

const suma = lista.reduce(function (prijasnjaVrijednost, trenutnaVrijesnost) {
  //prijašnja vrijednost u 1. iteraciji je pocetna vrije3dnost, ono iza zareza vrijednost
  return prijasnjaVrijednost + trenutnaVrijesnost;
}, pocetnaVrijednost); //moze sve ali i previous value

console.log(suma);

const suma2 = lista.reduce((prije, sad) => prije + sad, 0);
console.log(suma2);

const suma2_2 = lista.reduce((accumulator, item) => {
  return (accumulator += item);
}, 0);

console.log(suma2_2);

//sa foer petljom
//wtf
for (let i = 1; i < lista.length; i++) {
  let sum = 0;
  sum = sum + lista[i];
  console.log(lista[i]);
  console.log(sum);
}

//idemo napraviti našu košraicu

const kosarica = [
  { id: 1, proizvod: "kruh", cijena: 1.5 },
  { id: 2, pr0izvod: "mlijeko", cijena: 2 },
  { id: 3, proizvod: "salama", cijena: 5 },
  { id: 4, proizvod: "sapun", cijena: 4 },
  { id: 5, proizvod: "čips", cijena: 3 },
];

const suma4 = kosarica.reduce((accumulator, item) => {
  return (accumulator += item.cijena);
}, 0);

console.log(suma4);
