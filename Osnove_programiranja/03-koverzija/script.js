//konverzija vrste podataka, type converzija

const inputGodina = 2024;

console.log(typeof inputGodina, inputGodina);
const godina1 = parseInt(inputGodina);

const godina2 = Number(inputGodina);
//stakoims String

//decimalni primjer
const decBroj = "10.5";

const stringDecBroj = parseInt(decBroj);
const stringDecBroj2 = parseFloat(decBroj);

console.log(stringDecBroj);
console.log(stringDecBroj2);
console.log(Number("Ja"));

//------------------js automatska konverzija type coercion

console.log("23" - "10" + 1);
console.log("23" + "10" + 1);
console.log(5 + NaN);
console.log(5 + null);
console.log("23" * "10" + 1);
console.log(100 + 5 + "12" + 2 + 3 + 4);
