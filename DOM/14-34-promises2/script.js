"use strict";

/*
  recimo zelimo nešto napraviti nakon što se odvrti prvi .then.
  mozemo kao return proslijediti drugoj karici lanca podatke koje smo dobili u prvoj.then iteraciji-
  U  drugoj iteraciji nešto napraviti (length) i onda proslijeditiu returnu idućoj karici
  TO je promise changing
  i osigurava da podatke iz različitih izvora (callback hell),
  ,puno bolje i preglednije odradimo
*/

const obecanje = new Promise((resolve, reject) => {
  setTimeout(() => {
    let greska = false;
    if (!greska) {
      resolve({ ime: "Marko" });
    } else {
      reject("greska....");
    }
  }, 1000);
});
//chainane metoda
obecanje
  .then((korisnik) => {
    console.log(korisnik);
    return korisnik.ime; //to znači da možeš nastaviti chainati metodu
  })
  .then((ime) => {
    console.log(ime);
    return ime.length;
  })
  .then((duzina) => {
    console.log(duzina);
  })
  .catch((greska) => {
    console.log("greska");
  });
