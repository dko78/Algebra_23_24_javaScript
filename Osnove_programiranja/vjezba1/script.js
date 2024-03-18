/* Shift + Alt + A - shortcut za višelinijski komentar */

/* 
    Možete definirati varijable pomoću const, let i var.
*/

/* Const način definiranja varijable se mora prilikom deklaracije odmah i inicijalizirati i ne može mu se mijenjati vrijednost. */
const js = "JS je suuuuper";

/* Let način definiranja varijable se može deklarirat, naknadno inicijalizirati i može mu se mijenjati vrijednost. */
let js2;
js2 = "JS je super";

var varX = 5;
var varX = 6;

console.log(js);
console.log(js2, varX);

// Vrste vrijednosti varijabli - primitivni i objektni...

// brojevi

const dob = 20;

// tekst / string (tekstualna sekvenca, uvijek se stavlja u navodnike, svejedno jednostruke ili dvostruke)

const imePrezime = "Igor Jevremović";

// Boolean može biti samo true ili false

const polaznik = true;

// Undefined npr. varijabla kojoj nismo dodijelili vrijednost

let brojPrisutnih;

// Postoji još i null, ali o tome kasnije...

console.log(dob, imePrezime, polaznik, brojPrisutnih);
console.log(
  typeof dob,
  typeof imePrezime,
  typeof polaznik,
  typeof brojPrisutnih
);

brojPrisutnih = 21;
console.log(brojPrisutnih, typeof brojPrisutnih);

/* Matematički operateri */

const godineStarostiJosip = 2024 - 1994;
console.log(godineStarostiJosip);

const trenutnaGod = 2024;
const godineStarostiJura = trenutnaGod - 2003;
const godineStarostiSara = trenutnaGod - 2001;

console.log(godineStarostiJosip, godineStarostiJura, godineStarostiSara);
console.log(godineStarostiJosip * 2, godineStarostiJosip / 2);

let x = 10 + 5;

/* x = x + 10; */
x += 10;
x *= 4;
// uvećanje varijable x za 1
x++;
// umanjenje varijable x za 1
x--;
console.log(x);

/* Usporedni operateri - mogu biti jedan od slijedeća 4 : >, <, >=, <=
Rezultat je uvijek Boolean - true ili false. */

console.log(godineStarostiJura > godineStarostiSara);
const punoljetan = godineStarostiJura >= 18;
console.log(punoljetan);

// kombiniranje matematičkih i usporednih operatera

console.log(trenutnaGod - 1991 > trenutnaGod - 1988);

/* Operator precedence - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence */

/* Spajanje vrijednosti... */

const ime = "Igor";
const prezime = "Jevremović";

console.log(ime + " " + prezime);

let y, z;
y = z = 25 - 10 - 5;

// Zadatak 1 - definirajte 3 varijable i dodijelite im vrijednosti (string, broj i boolean). Nakon toga ih ispišite u konzoli.

const zemlja = "Hrvatska";
let brojStanovnika = 3.8e6;
const clanicaEU = true;
console.log(zemlja, brojStanovnika, clanicaEU);
