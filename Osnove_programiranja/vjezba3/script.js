// Konverzije vrsta podataka - type Conversion

const inputGodina = "2000";

// prvi način promjene stringa u broj pomoću parseInt JS funkcije
const godina1 = parseInt(inputGodina);

// drugi način promjene stringa u broj pomoću Numbera
const godina2 = Number(inputGodina);

// treći način promjene stringa u broj pomoću + operatora
const godina3 = +inputGodina;

const stringGodina = String(godina1);

console.log(typeof stringGodina, stringGodina);
console.log(godina1 + 18);

// primjer sa dec brojem

const decBroj = "10.5";

const stringDecBroj1 = parseInt(decBroj);
const stringDecBroj2 = parseFloat(decBroj);

console.log(stringDecBroj2);

console.log(Number("Igor"));
console.log(String(23));

//-----------------------------------------------------------------------

// Prisilna/automaska konverzija vrste podataka - type Coercion

console.log("Ja imam " + 1 + " auto");

// ovo funkcionira jer oduzimanje u ovoj varijanti JS prepoznaje i pretvara sve u brojeve
console.log("23" - "10" - 3);

/* ovdje ne funkcionira na isti način, jer se prvo događa "konkatenacija" u string "2310",
 tek nakon toga dolazi oduzimanje i pretvaranje svega u broj */
console.log("23" + "10" - 3);

// zbrajanje sa Boolean vrijednostima true pretvara u broj 1, a false u broj 0.
console.log(5 + true);
console.log(5 + false);

// Dobit ćemo NaN jer ne znamo koji je ovo broj pa samim time dobijem NaN...
console.log(5 + undefined);

/* Kod brojeva, ako radimo matematičke operacije sa brojevima, zbrajanje može dovesti do konkatenacije stringova, ako je samo 
jedan od 2 broja u obliku stringa, dok će normalno raditi ako su svi članovi brojevi. S druge strane sve druge matematičke
operacije koje uključuju brojeve koji se nalaze u stringu i/ili brojeve će automatski string pretvoriti u broj i odraditi
zadanu matematičku operaciju */

console.log("24" * "2");
console.log(5 + 100 + 24 + "12" + 2 + 3 + 4);
