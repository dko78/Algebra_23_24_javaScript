/* Napisat ćemo IIFE - Immediately Invoked Function Expression - ovo će biti funkcija koja će se odmah izvršiti nakon što se definira.
Sintaksa IIFE je takva da ju postavljamo unutar okruglih zagrada i unutar prve pišemo funkciju, a druga služi za definiranje pokretanja. */

"use strict";

/* const user = "Igor";
console.log(user); */

(function () {
  const user = "Igor";
  console.log(user);
})();

(function () {
  const user = "Maja";
  console.log(user);
  const ifi = () => console.log("Ovo dolazi iz IIFE funkcije");
  ifi();
})();

(function (ime, godine) {
  console.log(`Pozz, ja sam ${ime} i imam ${godine} godine`);
})("Ivana", 33);
