"use strict";
/*
  Zadatak 1 (Vježba sa funkcijama i listama)
    Joža želi izraditi jednostavan kalkulator za napojnice. U njegovoj zemlji uobičajeno je
    dati 15% za napojnicu ako je račun između 50 i 300. Ako je vrijednost drugačija onda je
    napojnica 20%..

Vaš zadatak je izračunati napojnicu ovisno o veličini računa. Napravi funkciju koja će računati napojnicu.

Napravite Listu koja će koristiti testne podatke dolje.

Napravite listu napojnice koja će sadržavati vrijednosti napojnice za svaki račun, vrijednosti koje ste
dobili koristeći funkciju za izračun napojnica (ona prva gore).

Napravi listu sa ukupnim iznosima, znači račun + napojnica (total).

Tip : svaka lista treba vrijednosti na svakom polju i svaka vrijednost može biti return vrijednost funkcije.
Ne možete samo nazvati funkciju sa vrijednostima liste. Stoga ne spremajte vrijednosti napojnice u
posebne varijable prvo nego direktno u novu listu

testni podaci:

račun 125
račun 555
račun 44
*/

const bills = [125, 555, 44];

const calcTip = function (billValue) {
  if (billValue >= 50 && billValue <= 300) {
    return billValue * 0.15;
  } else {
    return billValue * 0.2;
  }
};

//lista napojnica
const tips = bills.map((el) => calcTip(el));

console.log(bills);
console.log(tips);

//lista suma račun + napojnica
const sumaRacunNapojnica = [];

bills.forEach(function (bill) {
  sumaRacunNapojnica.push(bill + calcTip(bill));
});

console.log(sumaRacunNapojnica);

/*
Moje vježbe s Array-s
indexOf() – locate an element in an array.
includes() – check if an element is in an array. vraća true ili false
find() - prvo pojavljivanje
map() vs filer. map radi transform na posojećem polju i vraća tu novu listu
               > filter iterira kroz svaki element liste i provjerava neki uvijet, ako je istina vratiti će element iu listu, ako nije istina neće vratiti elemnt u listu
               > map, uzima elemnt liste, nešto radi s njim i vrati ga na isto mijesto u listi
                 map je slično kao ForEach, samo vraća vrijednost

 */
const numbers = [10, 20, 30, 40, 20, 50, 30, 80, 40]; //10, 20, 30, 40, 20, 50, 30, 80, 40
console.log(numbers.length);
//const last = numbers.pop();

const listNeparnih = numbers.filter((num) => num % 2 === 1);
console.log(listNeparnih); //todo zašto ako su svi elemetni parni ne vrati ništa
//filter
const numbers2 = [8, 19, 5, 6, 14, 9, 13];
const odds = numbers2.filter((num) => num % 2 === 1);
console.log(odds); // [19, 5 , 9, 13]

console.log();
const odds2 = numbers2.map((el) => el % 2 === 1);

const odds3 = numbers2.map((el) => {
  if (el % 2 === 1) {
    return el;
  }
});
console.log(odds2); //vraća true samo kad zafdovolajva uvijrt
console.log(odds3);
//map
let br = [16, 25, 34];
let listaKorijen = br.map(Math.sqrt);
console.log(listaKorijen);
let duploBr = br.map((broj) => broj * 2);
console.log(duploBr);
let parniBr = br.map((broj) => broj * 2);

console.log(numbers.indexOf(30)); //gleda od 0,1...

console.log(numbers.includes(20));
let parni = numbers.find((e) => e % 2 == 0);

console.log(parni); //ne vraća index nego pravu vrijednost

console.log(numbers.indexOf(parni));

console.log(numbers.length);

if (numbers.indexOf(90) != -1) {
  console.log("Ima 90");
} else {
  console.log("nema 90");
}

const auti = [
  { ime: "Mercedes", kategorija: "limuzina", godinaProizvodnje: 2015 },
  { ime: "Audi", kategorija: "limuzina", godinaProizvodnje: 2017 },
  { ime: "Ford", kategorija: "karavan", godinaProizvodnje: 2016 },
  { ime: "Volvo", kategorija: "SUV", godinaProizvodnje: 2021 },
  { ime: "BMW", kategorija: "cabriolet", godinaProizvodnje: 2019 },
  { ime: "bently", kategorija: "SUV", godinaProizvodnje: 2021 },
];
//                 filter metoda
//samo limunzine
const samoLimunzine = auti.filter((auto) => auto.kategorija === "limuzina");
console.log(samoLimunzine);

//samo godina 2021
console.log(auti.filter((auto) => auto.godinaProizvodnje === 2021));

//samo noviji od 2019
console.log(auti.filter((auto) => auto.godinaProizvodnje >= 2019));

//brojevi veći od 30
console.log(numbers.filter((broj) => broj > 30));

//                   map metoda
//lista imena
console.log(auti.map((auto) => auto.ime));

//lista kategorija
console.log(auti.map((auto) => auto.kategorija));

//   find metoda
//nađi ford karavan godina proizvodnje
console.log(
  auti.find((auto) => auto.ime == "Ford" && auto.kategorija == "karavan")
);

const guests = [
  { name: "John Doe", age: 30 },
  { name: "Lily Bush", age: 20 },
  { name: "William Gate", age: 25 },
];

console.log(
  "Lista imena:",
  guests.map((guest) => guest.name)
);
//stariji od 20
console.log(guests.filter((guest) => guest.age > 20));
//godine *2
console.log(guests.map((guest) => guest.age));

const lista = [
  { proizvod: "Bicikl", cijena: 1500 },
  { proizvod: "Frižider", cijena: 2500 },
  { proizvod: "Perilica", cijena: 2000 },
  { proizvod: "Romobil", cijena: 800 },
  { proizvod: "Automobil", cijena: 60000 },
  { proizvod: "Tipkovnica", cijena: 80 },
  { proizvod: "Automobil", cijena: 70000 },
];
//foreach
lista.forEach((lista) => console.log(lista.cijena));

//      reduce metoda
//zbroji sve sume
const totalCijena = lista.reduce((accumulator, objekt) => {
  return (accumulator += objekt.cijena);
}, 0); // u prvoj iteraciji vrijednost accumulatora je 0, tozanči taj parametar
console.log(totalCijena);

//some
const imaLiManjeOd1000 = lista.some((lista) => lista.cijena < 1000);
console.log(imaLiManjeOd1000);

//every
//da li je svaka veća od 1000
console.log(lista.every((lista) => lista.cijena >= 1000));
//map vs filter

const listaProizvoda = lista.map((objekt) => objekt.proizvod);
console.log(listaProizvoda);

const listaProizvodaFilter = lista.filter(
  (object) => object.proizvod == "Automobil"
);
console.log(listaProizvodaFilter);

//funckija za ispis svih indexa u listi
function findAllIndex(vrijednost, lista) {
  let rezultat = [];
  let index1 = lista.indexOf(vrijednost);
  while (index1 != -1) {
    rezultat.push(index1);
    index1 = lista.indexOf(vrijednost, index1 + 1); //gledaš o dslijedeće vrijedsnoti
  }
  return rezultat;
}

console.log(findAllIndex(30, numbers));

const orders = [
  { userid: 1, amount: 10 },
  { userid: 1, amount: 20 },
  { userid: 2, amount: 15 },
  { userid: 2, amount: 14 },
  { userid: 3, amount: 100 },
];

const sumAllAmounts = orders.reduce((accumulator, object) => {
  return (accumulator = accumulator + object.amount);
}, 0);

console.log(sumAllAmounts);

let userID1 = orders.filter((obj) => obj.userid == 1);

console.log(userID1);

//suma svih 1 kombinacija više
//za user id = 1 ili 2 zbroji amounte

const ID1 = orders
  .filter((obj) => obj.userid === 2)
  .map((order) => order.amount);
console.log(ID1);

const sumID1 = orders
  .filter((obj) => obj.userid === 2)
  .map((order) => order.amount)
  .reduce((accumulator, object) => accumulator + object);
console.log(sumID1);
