//zadatak 01
const populacijaHR = 3.8e6;
const prosjekEU = 33e6;
/*let prosjek =
  populacijaHR > prosjekEU
    ? "Veća populacija od prosijeka "
    : "Manja populacija od prosijeka EU";

console.log(prosjek);
*/

let prosjek;

if (populacijaHR > prosjekEU) {
  prosjek = `Populacija HR ${populacijaHR} je veća od prosjeka EU ${prosjekEU}`;
} else {
  prosjek = `Populacija HR ${populacijaHR} je manja od prosjeka EU ${prosjekEU}`;
}

console.log(prosjek);

//zadatak 2
const visinaMarko = 1.69;
const tezinaMarko = 78;

const visinaJosip = 1.95;
const tezinajosip = 92;

const itmMarko =
  Math.round((tezinaMarko / Math.exp(visinaMarko, 2)) * 100) / 100;
const itmJosip =
  Math.round((tezinajosip / Math.exp(visinaJosip, 2)) * 100) / 100;

if (itmMarko > itmJosip) {
  console.log(`Markov ITM ${itmMarko} je veći od Josipovog ${itmJosip}`);
} else {
  `Josipov ITM ${itmJosip} je veći od Markovog ${itmMarko}`;
}

//Zadatak 3

const jezik = "Hrvatski";
const daLiJeOtok = false;

if (jezik == "Engleski" && populacijaHR < 50e6 && daLiJeOtok) {
  console.log("Zemlja u kojoj želite živjeti je Hrvatska");
} else {
  console.log("Hrvatska nije za vas");
}

//Zadatak3, drugi dio
