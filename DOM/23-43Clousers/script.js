"use strict";

function vanjskaFunckija() {
  function pomnoziFunckija(broj) {
    return broj * 2;
  }
  return pomnoziFunckija; //pazi nisi je pokrenuo
}
const pomnozi = vanjskaFunckija();
console.log(pomnozi);

const rezultat = pomnozi(4);
console.log(rezultat);
/* Napravili smo funkciju unutar funkcije i za return smo vratili instrukcije iz unutrašnje funkcije i spremili u varijablu pomnozi, ali
ju nismo pokrenuli. Nakon toga smo pomoću druge varijable pokrenuli tu unutarnju funkciju čija je instrukcija funkcije zapisana u varijabli
pomnozi. */

/* 
Ovisno o tome gdje smo definirali našu funkciju odlučujemo koje su varijable dostupne kada pozovete funkciju. Koristeći closure,
ova varijabla brojac i njena vrijednost će ostati zapisani u definiciji/instrukciji "brojacVarijabla" varijable i vrijednost ove
varijable brojac će ostati memorirana u definiciji te funkcije. Naša vanjskaFunkcija2 u biti će dobiti malu cache memoriju zahvaljujući ovome.
Kada bi napravili drugu varijablu i u nju spremili opet vanjskaFunkcija2 ona bi kreirala novi closure. 
Prednosti: vrijednost unutar instrukcije funkcije se pamti, ne može se mijenjati niti pristupiti toj varijabli iz globalnog scopea.
*/

function vanjskaFunckija2() {
  let brojac = 0;
  function suma() {
    brojac++;
    console.log(brojac);
  }
  return suma;
}

const brojacVarijabla = vanjskaFunckija2();
console.log("brojac varijabla ", brojacVarijabla);

//console.log(brojac);//ne radi kume, niej dostupno

brojacVarijabla();
brojacVarijabla();
brojacVarijabla();
brojacVarijabla();

//globalna
let vanjskiBrojac = 10;

function dodaj() {
  const unutarnjiBroj = 5;
  return vanjskiBrojac + unutarnjiBroj;
}

console.log("dodaj:", dodaj());

/* ako ne zelimo u globalne varijable idemo napravit closure*/

function dodajVanjska(broj1) {
  function dodajUnutarnja(broj2) {
    return broj1 + broj2;
  }
  return dodajUnutarnja; //pazi niej poziv
}

const zbrajanje = dodajVanjska(10);
console.log(zbrajanje);

console.log("zbrajanje", zbrajanje(5));

/*
 brojač klikova gumba

    updateKlik returna reportKlik funkciju. reportKlik ima svoj scope i ima pristup lokalnim varijablama svoje parent funkcije updateKlik.
    Inače kada se funkcija returna tj. kada se dovrši njezino izvođenje sve njene varijable se brišu i nisu više dostupne.
    Ali zato što updateKlik vraća referencu na unutarnju funkciju reportKlik koja ima pristup njezinim (updateKlik) lokalnim vrijednostima,
    kada se updateKlik returna njene reference sus sačuvane u cache memoriji. 
    
    Te reference na varijable koje funkcija returna u formi brojKlikova funkcije se zove "closure". Klikovi su nam i dalje dostupni,
    ali samo putem brojKlikova varijable.
*/

function updateKlik() {
  //console.log("klik");
  //ovo ne broj uvijek je 1
  //treba u globalni scope, ali bolje closure

  let klikovi = {}; //koji gumb i koliko puta
  let button;

  function reportKlik(klik) {
    button = klik.id;
    klikovi[button] = klikovi[button] + 1 || 1;
    console.log(button, klikovi);
  }
  return reportKlik;
}

const brojKlikova = updateKlik();

document.querySelectorAll(".klikovi").forEach((e) => {
  e.addEventListener("click", (event) => {
    brojKlikova(event.target);
  });
});
