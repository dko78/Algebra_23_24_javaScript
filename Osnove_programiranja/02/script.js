const ime = "Matko";
const zanimanje = "Učitelj";
const godRodjenja = 1978;
const trenutnaG = 2024;

const osoba = "ja sam " + ime + "," + zanimanje;

const osobaNovo = `Ja sam ${ime}, po zanimanju sam \n\ ${zanimanje}`;

console.log(osobaNovo);

/* template literal ` mozes pisti 2 reda */

const zemlja = "Hrvatska";
const kontinent = "Europa";
const populacija = 3.8e6;

//hrv ima 3,8 mil stanocnika inalazi se u europi
console.log(
  `${zemlja} ima ${populacija} stanovnika i nalazi se u ${kontinent}`
);

// izracun
x = Math.sqrt(81);
console.log(x);

let xy = Math.random();
console.log(xy);
let sysYear = new Date().getFullYear();
let sysDay = new Date().getDay();
console.log(`${sysYear}  ${sysDay}`);

//radnom broj do 10
let randomN = Math.trunc(Math.random() * 10 + 1);
console.log(randomN);

let a = Math.trunc(Math.random() * 100 + 1);
let b = Math.trunc(Math.random() * 50 + 1);

console.log(b);
