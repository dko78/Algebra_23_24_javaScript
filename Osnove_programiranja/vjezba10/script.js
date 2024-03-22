"use strict";

// na ovaj način deklariramo funkciju i njen kod koji se izvršava kada se funkcija pokrene
function ispis() {
  console.log("Zovem se Igor");
}

// na ovaj način inicijaliziramo funkciju (calling, running, invoking, executing a function)
ispis();
ispis();
ispis();
ispis();
ispis();

/* Kod deklaracije funkcije, moguće je napraviti inicijaliziranje funkcije u redovima prije funkcijske logike, drugim riječima,
možemo ju hoistat iznad funkcije i sve će raditi. */
const test = nutriBullet(7, 2);

function nutriBullet(jabuke, kruske) {
  console.log(jabuke, kruske);
  const sok = `Sok od ${jabuke} jabuka i ${kruske} krušaka`;
  return sok;
  console.log("OVO SE NEĆE IZVRTITI, JER DOLAZI NAKON RETURNA");
}

const sokOdJabuke = nutriBullet(5, 1);
const sokOdKruske = nutriBullet(2, 4);

console.log(sokOdJabuke, sokOdKruske, test);

// Arrow funkcije

const rodjenje = function (godRodjenja) {
  return 2024 - godRodjenja;
};

console.log(rodjenje(2001));

// ista funkcija napisana arrow funkcijskom sintaksom - prilikom jednostavne funkcije arrow funkcija ima jednostavniju sintaksu

/* console.log(arrowRodjenje(1992)); */

const arrowRodjenje = (godRodjenja) => 2024 - godRodjenja;

const arrowFunkcija = (godRodjenja) => {
  const izracun = 2024 - godRodjenja;
  return izracun;
};

console.log(arrowRodjenje(2003));
console.log(arrowFunkcija(2004));

// primjer arrow funkcije

const godDoMirovine = (godRodjenja, imePrezime) => {
  const godine = 2024 - godRodjenja;
  const mirovina = 65 - godine;
  if (mirovina > 0) {
    return `${imePrezime} će se umiroviti za ${mirovina} godina/e.`;
  } else {
    return `${imePrezime} je već u mirovini.`;
  }
};

console.log(godDoMirovine(1942, "Stjepan Stjepić"));
console.log(godDoMirovine(2004, "Hrvoje Horvat"));
