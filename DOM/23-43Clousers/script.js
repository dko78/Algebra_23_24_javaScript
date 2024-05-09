"use strict";

// idemo definirati funkciju unutar funkcije

function vanjskaFunkcija() {
  function pomnoziFunkcija(broj) {
    return broj * 2;
  }

  return pomnoziFunkcija;
}

const pomnozi = vanjskaFunkcija();
console.log(pomnozi);

const rezultat = pomnozi(4);
console.log(rezultat);

/* Napravili smo funkciju unutar funkcije i za return smo vratili instrukcije iz unutrašnje funkcije i spremili u varijablu pomnozi, ali
ju nismo pokrenuli. Nakon toga smo pomoću druge varijable pokrenuli tu unutarnju funkciju čija je instrukcija funkcije zapisana u varijabli
pomnozi. */

/* ------------------------------------------------------------------------------------------------------------------------------------- */

/* 
Ovisno o tome gdje smo definirali našu funkciju odlučujemo koje su varijable dostupne kada pozovete funkciju. Koristeći closure,
ova varijabla brojac i njena vrijednost će ostati zapisani u definiciji/instrukciji "brojacVarijabla" varijable i vrijednost ove
varijable brojac će ostati memorirana u definiciji te funkcije. Naša vanjskaFunkcija2 u biti će dobiti malu cache memoriju zahvaljujući ovome.
Kada bi napravili drugu varijablu i u nju spremili opet vanjskaFunkcija2 ona bi kreirala novi closure. 
Prednosti: vrijednost unutar instrukcije funkcije se pamti, ne može se mijenjati niti pristupiti toj varijabli iz globalnog scopea.
*/

function vanjskaFunkcija2() {
  let brojac = 0;
  function suma() {
    brojac++;
    console.log(brojac);
  }
  return suma;
}

const brojacVarijabla = vanjskaFunkcija2();
console.log(brojacVarijabla);
brojacVarijabla();
brojacVarijabla();
brojacVarijabla();
brojacVarijabla();

/* ----------------------------------------------------------------------------------------------------------------------- */

let vanjskiBroj = 10;

function dodaj() {
  const unutarnjiBroj = 5;
  return vanjskiBroj + unutarnjiBroj;
}

console.log(dodaj());

vanjskiBroj = 20;
console.log(dodaj());

/* Umjesto ovoga ako ne želimo globalne varijable... idemo napraviti closure... */

function dodajVanjska(broj1) {
  function dodajUnutarnja(broj2) {
    return broj1 + broj2;
  }

  return dodajUnutarnja;
}

const zbrajanje = dodajVanjska(10);
console.log(zbrajanje);

console.log(zbrajanje(5));
console.log(zbrajanje(10));

/* --------------------------------------------------------------------------------------------------------------------------- */

/* 
    updateKlik returna reportKlik funkciju. reportKlik ima svoj scope i ima pristup lokalnim varijablama svoje parent funkcije updateKlik.
    Inače kada se funkcija returna tj. kada se dovrši njezino izvođenje sve njene varijable se brišu i nisu više dostupne.
    Ali zato što updateKlik vraća referencu na unutarnju funkciju reportKlik koja ima pristup njezinim (updateKlik) lokalnim vrijednostima,
    kada se updateKlik returna njene reference sus sačuvane u cache memoriji. 
    
    Te reference na varijable koje funkcija returna u formi brojKlikova funkcije se zove "closure". Klikovi su nam i dalje dostupni,
    ali samo putem brojKlikova varijable.
*/

function updateKlik() {
  let klikovi = {};
  let button;

  function reportKlik(klik) {
     /*
    console.log("klik.id= ", klik.id);
    button = klik.id;
    klikovi[button] = klikovi[button] + 1 || 1;
    console.log(button, klikovi);
    */
    console.log(klik); //klik je u biti target, cijeli butnon tag(ovjekt) koji si kliknuo
    klikovi[klik.id] = klikovi[klik.id] + 1 || 1;
    console.log(klik.id, klikovi);
    
  }

  return reportKlik;
}

const brojKlikova = updateKlik();

document.querySelectorAll(".klikovi").forEach((e) => {
  e.addEventListener("click", (event) => {
    brojKlikova(event.target);
  });
});

/********************** */

function covjek(ime) {
  function pozdrav() {
    console.log(`Pozz, ja sam ${ime}`);
  }
  function kakoSI() {
    console.log(`Kako se osjećaš ${ime}`);
  }
  return { pozdrav, kakoSI };
}

const osoba2 = covjek("igor");
const osoba3 = covjek("mario");

console.log(osoba1, osoba2);
