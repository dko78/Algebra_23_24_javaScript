/* If petlja će odvrtiti kod koji se nalazi u bloku, ovisno o tome da li je tvrdnja koju provjeravamo istinita ili lažna. */

if (true) {
  console.log("Funkcioniram jer sam true");
}

if (false) {
  console.log("Ne funkcioniram jer sam false");
}

// Primjer iz prakse

const godina = 19;
const punoljetan = godina >= 18;

if (punoljetan) {
  console.log("Punoljetan si, možeš glasat.");
}

// isto kao da sam napisao:

if (godina >= 18) {
  console.log("Punoljetan si, možeš glasat.");
}

// If-else petlja će definirati što će se dogoditi ako je "if" tvrdnja istinita, a "else" blok ako nije istinita.

if (godina <= 18) {
  console.log("Rezultat provjere je false i ovo se neće izvrtiti");
} else {
  console.log("Ovo će se ispisati jer je ovo sada rezultat if-else petlje");
}

// Block scope vs Global scope
/* Definiranjem i inicijaliziranjem varijable putem const i let načina unutar blocka ograničavamo dostupnost te varijable van bloka, jer
su const i let block-scoped varijable i neće biti dostupne van blocka, za razliku od var načina definiranja i inicijaliziranja varijable.
Možete tome doskočiti da definirate varijablu na globalnom scopeu a inicijalizirate/dodijelite vrijednost unutar bloka ovisno o uvjetu
koji će se izvršiti... */

const godRodjenja = 1983;
let stoljece;

if (godRodjenja >= 2000) {
  stoljece = 21;
} else {
  stoljece = 20;
}

console.log(stoljece);

/* Truthy i falsy values...
Falsy vrijednosti - vrijednosti koje nisu netočne, ali će postati kada se pretvore u Boolean vrijednost
falsy : 0, undefined, null, "", NaN
*/

console.log(Boolean(0)); // Kada prebacimo nulu u Boolean on će biti false, svi drugi brojevi će biti true
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean("")); // Prazan string kada prebacimo u Boolean će biti false, čim imamo nešto u stringu, bit će true
console.log(Boolean(NaN));

/* varijablu broj će JS automatski probati pretvoriti u Boolean vrijednost i nakon toga s njom će se moći odraditi if/else provjera kao
da se ubacila Boolean vrijednost... */
const broj = 0;

if (broj) {
  console.log("ispisujem se");
} else {
  console.log("ne ispisujem se");
}
