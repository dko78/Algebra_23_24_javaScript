// const godina = 19;
// const punoljetan = godina >= 18;

// console.log(typeof punoljetan, punoljetan);
//== i ===
// const broj = prompt("Upiši broj:");
// console.log(broj, typeof broj);
const istina = true;
const laz = false;

console.log(istina && laz && istina);

console.log(laz || laz || istina);

//Nullish coalescing operator (nulti operator spajanja)
//logički operator koji će vratiti operand s desne strane ako je s lijeve
//stranae vrijednost null ili Undefined
let nullish;

//nullish = 10 ?? 20; //vraća 10
//nullish = null ?? 20;
nullish = "" ?? "desna";
//nullish = null ?? "desna";

console.log(nullish);
