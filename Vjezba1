/*  
let radnomN = Math.trunc(Math.random() * 50 + 1); //random number do 10
console.log(radnomN);
//dvije decimala 
const temp = Math.round(2.83620364 * 100) / 100;
*/

/* 1. Zadatak
Imamo definirane 3 varijable i njihove vrijednosti:
const zemlja = "Hrvatska";
const kontinent = "Europa";
const populacija = 3.8e6;
Zadatak je prepoloviti populaciju na pola, nakon toga uvećati za 1. Nakon toga definirajte novu varijablu
koja će predstavljati populaciju neke druge zemlje (po vašem odabiru), nakon toga usporedite da li je
populacija Hrvatske veća od te zemlje koju ste definirali.
Za kraj, koristeći string i template literal način i varijable, spremite u varijable rečenicu : „Hrvatska ima
3800000 stanovnika i nalazi se u Europi“. */

const zemlja = "Hrvatska";
const kontinent = "Europa";
const populacija = 3.8e6;
//round 2 decimale
const temp = Math.round(2.83620364 * 100) / 100;

console.log(temp);
const polaPop = populacija / 2;
const polaPlusJedan = polaPop + 1;

console.log(polaPop);
console.log(polaPlusJedan);

const populacijaMadzarska = 9.71e6;

const hrvatskaVeca = populacija > populacijaMadzarska;

console.log(hrvatskaVeca);

const text1 = `${zemlja} ima ${populacija} i nalazi se u ${kontinent}.`;

console.log(text1);
const strLen = kontinent.length;
console.log(strLen);

console.log(kontinent.substring(0, kontinent.length - 1) + "i");
/* 2. Zadatak
Izračunaj ITM (Indeks tjelesne mase) Marka i Josipa, ispiši ih i provjeri boolean vrijednost true/false da li
je Markov ITM veći od Josipovog ITM-a.

računa se tako da se masa dijeli sa visinom na kvadrat (formula je itm = masa/visina ** 2)
test podaci 1 Marko je težak 78 kg i visok 1.69, Josip 92 kg i 1.95
test podaci 2 Marko je težak 95 kg i visok 1.88, Josip 85 kg i 1.76
 */
const visinaMarko = 1.69;
const tezinaMarko = 78;

const visinaJosip = 1.95;
const tezinajosip = 92;

const itmMarko = tezinaMarko / Math.exp(visinaMarko, 2);
const itmJosip = tezinajosip / Math.exp(visinaJosip, 2);

console.log(itmMarko);
console.log(itmJosip);

console.log(itmMarko > itmJosip);
