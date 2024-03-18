//Strict i Loose provjere

const godina = 18;

/* Ovo će se ispisati jer stroga (strict) provjera će provjeriti vrijednosti podataka i tipove podataka i ako se oboje slaže, onda će 
to biti true... */
if (godina === 18) {
  console.log("Punoljetni ste");
}

// ovo se neće ispisati jer iako je vrijednost podataka ista, tipovi nisu isti (string nije jednak broju)
if ("18" === 18) {
  console.log("Ovo neće ispisati...");
}

/* Ovo će se ispisati jer je labava (loose) provjera koja će samo provjeriti da li su vrijednosti podataka iste, neće provjeriti
tipove podataka... */
if ("18" == 18) {
  console.log("Ovo će se ispisati...");
}

// Praktični primjer

/* const broj = Number(prompt("Koji ti je najdraži broj?"));

if (broj === 1) {
  console.log("Broj 1 je top");
} else if (broj === 2) {
  console.log("Broj 2 je top");
} else if (broj === 3) {
  console.log("Broj 3 je top");
} else {
  console.log("1 je zakon broj, zašto njega niste upisali!?!?");
} */

// i / ili operateri

const istina = true;
const laz = false;

// "I" operator se piše sa 2 znaka "&&" i rezultat njegove provjere će biti true samo ako su svi članovi provjere true
console.log(istina && laz && true);

// "Ili" operator se piše sa 2 znaka "||" i rezultat njegove provjere će biti true čim je jedan od članova provjere true
console.log(istina || laz || false);

// not operator se definira znakom "!" i za potrebe provjere mijenja vrijednost u suprotnu od zadane.

const punoljetan = false;

if (istina && !punoljetan) {
  console.log("Ovo je istinita tvrdnja i ovo će se ispisati...");
}

/* Nullish coalescing operator (Nulti operator spajanja) - logički operator koji će vratiti operand sa dense strane
ako je sa lijeve strane vrijednost operanda null ili undefined, inače će vratiti lijevog operanda (za razliku od truthy i falsy)
koji će vratiti i 0 i prazan string.
*/

let nullish;

nullish = 10 ?? 20;
nullish = "lijeva" ?? "desna";
nullish = "" ?? "desna";
nullish = 0 ?? "desna";
nullish = null ?? "desna";
nullish = false ?? "desna";
nullish = undefined ?? "desna";

console.log(nullish);

//&& će vratiti prvu falsy ili zadnju thruthy
//Logical AND (&&) evaluates operands from left to right, returning immediately with the value of the first falsy operand it encounters;
//if all values are truthy, the value of the last operand is returned.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND
let x;
x = 10 && 20;

console.log(x);

let lista = [];

console.log(lista[0]);

//lista = [2, 3];

lista.length > 0 && console.log(lista[0]);

let result;

result = "" && "foo"; // result is assigned "" (empty string)

console.log(result);
