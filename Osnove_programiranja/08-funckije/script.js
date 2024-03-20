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

//mozes pozvati funkciju (ali ne arrow)prije deklaracije! Zbog hoisting
//var se hoista

function nutriBullet(brojJabuke, brojKruske) {
  console.log(brojJabuke, brojKruske);
  const sok = `Sok od ${brojJabuke} jabuka i ${brojKruske} krušaka`;
  //da je i  var on je isto function scope, i ne vidi se vani
  //sok = `Sok od ${jabuke} jabuka i ${kruske} krušaka`;
  return sok;
}

const sokOdJabuke = nutriBullet(3, 2); //rezultat funckije spremi u varijablu
console.log(sokOdJabuke);

//arrow funckija
//ne vrijedi za arrow hoisting
//razlika između klasične

function starost(godRodjenja) {
  return 2024 - godRodjenja;
}

let izracun = 1; //užas znači mozes imati globalnu koja se isto zove kao u funkiji

console.log(starost(1978));

const arrowStarost = (godRodjenja) => 2024 - godRodjenja; //moras u varijablu spremiti

const arrowStarost2 = (godRodjenja) => {
  const izracun = 2024 - godRodjenja;
  return izracun;
};

console.log(arrowStarost(1978));

console.log(arrowStarost2(1978));

//koliko do mirovine

const godDoMirovine = (godRodjenja, imePrezime) => {
  const godine = 2024 - godRodjenja;
  const mirovina = 65 - godine;

  if (mirovina > 0) {
    return `${imePrezime} će se umiroviti za ${mirovina} godina.`;
  } else {
    return "vi ste već u mirovini";
  }
};

console.log(godDoMirovine(1978, "PEro"));

// kako funkcionira scope i kako su nam varijable dostupne?

const lopta = "nogometna";
//const i let su blok scope
//prvo se gleda unutar bloka ako ima(unutar funkcija), ako nema gleda globalnu
//todo ovo još provjeri

const sport = () => {
  const lopta2 = "rukometna";
  const lopta = "košarkaška"; //funkijski blok
  console.log(lopta, lopta2); //lopta je vidljiva na globalnom scopu
};

const sport2 = () => {
  const lopta2 = "rukomentna";
  return {
    sport3: () => {
      //kad je podfuncija onda se sa : ne =
      return console.log(lopta, lopta2);
    },
  };
};

const noviSport = sport2();
noviSport.sport3();

//pozivanje funkcije unutar funkcije

function komadiVoca(voce) {
  return voce * 4;
}

function nutriBullet2(brojJabuke, brojKruske) {
  const sokOdJabuke = komadiVoca(brojJabuke); //poziv funcije unutar funcija
  const sokOdKruske = komadiVoca(brojKruske);
  const sok = `Sok od ${sokOdJabuke} komada jabuka i ${sokOdKruske}`;
  return sok;
}

console.log(nutriBullet2(2, 3));

//IIFE funcije immediately invoked function expr.
//funckija se odmah izvršava nakon što se definira
//sintaksa iifi funcije je takva da je postavljamounutar okruglih zagrada,unutar 1 prve pišemo funciju

(function () {
  const user = "Igor";
  console.log(user);
})();
