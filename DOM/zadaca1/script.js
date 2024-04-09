/* 
Imamo definiranu varijablu koja sadrži broj stanovnika Hrvatske. Recimo da je prosjek svih zemalja EU 33e6. 
Provjeri, koristeći varijablu koju ćeš definirati kao „prosjek“ da li je populacija Hr veća od prosjeka EU i 
ispiši koristeći if/else petlju što će se dogoditi ako je populacija veća/manja od prosjeka EU. 
Koristite template literal za ispis.
*/

const populacija = 3.8e6;
const prosjek = 33e6;

if (populacija > prosjek) {
  console.log(`Hrvatska ima ${populacija} stanovnika i ima više od prosjeka EU`);
} else if (populacija === prosjek) {
  console.log(`Hrvatska ima isto stanovnika kao i prosjek EU`);
} else {
  console.log(`Hrvatska ima ${populacija} stanovnika i ima manje od prosjeka EU`);
}

/* 
provjeri ITM (Indeks tjelesne mase) Marka i Josipa i utvrdi čiji je veći.
Neka piše Markov koeficijent mase je veći od Josipovog koeficijenta mase ili Josipov koeficijent mase je veći od Markovog koeficijenta mase.
Koristite if else pristup i template string za console.log.
Podsjetnik: računa se tako da se masa dijeli sa visinom na kvadrat (formula je itm = masa/visina ** 2)
  test podaci 1 Marko je težak 78 kg i visok 1.69, Josip 92 kg i 1.95
  test podaci 2 Marko je težak 95 kg i visok 1.88,  Josip 85 kg i 1.76
*/

const masaMarko = 78;
const visinaMarko = 1.69;

const masaJosip = 92;
const visinaJosip = 1.95;

const itmMarko = masaMarko / visinaMarko ** 2;
const itmJosip = masaJosip / visinaJosip ** 2;

console.log(itmMarko, itmJosip);

if (itmMarko > itmJosip) {
  console.log(`Markov ITM od ${itmMarko} veći je od Josipovog ITM-a od ${itmJosip}`);
} else {
  console.log(`Josipov ITM od ${itmJosip} veći je od Markovog ITM-a od ${itmMarko}`);
}

/* 
Rješite koristeći logičke operatore: zamislimo da želimo živjeti u zemlji u kojoj se priča engleski, 
koja ima manje od 50 m stanovnika i koja nije otok.
Utvrdi da li Hrvatska ispunjava te uvjete i ako da ispiši : "Zemlja u kojoj želite živjeti je Hrvatska". Ako ne, onda ispiši : 
"Hrvatska nije za vas.".
Koristite logičke operatore i if else petlju za rješenje zadatka.
*/

const engleski = true;
const manjeOd50M = true;
const nijeOtok = true;
const hrvatski = true;

const uvjeti = engleski && manjeOd50M && nijeOtok;
const zelje = !hrvatski && manjeOd50M && nijeOtok;

console.log(uvjeti, zelje);

if (uvjeti === zelje) {
  console.log("Zemlja u kojkoj želite živjeti je Hrvatska");
} else {
  console.log("Zemlja u kojoj želite živjeti nije Hrvatska");
}
