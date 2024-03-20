"use strict";
//2, 2+2, to su expresson
//if else, for , while, switc, ternarx operator su statements - sekcence akcija?
const godine = 45;
if (godine >= 18) {
  console.log("Punoljetan si");
} else {
  console.log("Maloljetan si");
}

//tripel operator
godine >= 18 ? console.log("punoljetan") : console.log("maloljetan");
//rezultat ovoga mozes spremiti u varijablu, onog gore if ne-
const punoljetan = godine >= 18 ? "DA" : "NE";
console.log(punoljetan);
console.log(`${godine} da li je punoljetan: ${godine >= 18 ? "DA" : "NE"}`);

//
/*
const auth = true;

let redirect;
if (auth) {
  alert("ok autorizacija");
  redirect = "/dashboard";
} else {
  alert("not ok autorizacija");
  redirect = "/login";
}

redirect = auth
  ? (alert("ok autorizacija"), (redirect = "/dashboard"))
  : (alert("not autorizacija"), (redirect = "/login"));

console.log(redirect);
*/

//  FUNKCIJE

function ispis() {
  console.log("Zovem se Dalibor");
}

ispis();

//mozes pozvati funkciju prije deklaracije! Zbog hoisting

function nutriBullet(jabuke, kruske) {
  console.log(jabuke, kruske);
  const sok = `Sok od ${jabuke} jabuka i ${kruske} krušaka`;
  //da je i  var on je isto function scope, i ne vidi se vani
  //sok = `Sok od ${jabuke} jabuka i ${kruske} krušaka`;
  return sok;
}

const sokOdJabuke = nutriBullet(3, 2);
console.log(sokOdJabuke);
