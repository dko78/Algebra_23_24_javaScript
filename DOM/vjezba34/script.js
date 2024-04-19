"use strict";

const obecanje = new Promise((resolve, reject) => {
  setTimeout(() => {
    let greska = false;

    if (!greska) {
      resolve({ ime: "Marko", prezime: "Markić" });
    } else {
      reject("Greška, nešto je pošlo po krivu");
    }
  }, 1000);
});

/* Recimo da bi htjeli napraviti nešto sa podacima nakon što se odvrti prvi .then. Možemo kao return proslijediti prema drugoj karici lanca
podatke koje smo dobili u prvoj iteraciji. I onda naravno u drugoj iteraciji napraviti nešto sa tim podacima i opet kao return proslijediti
na iduću kariku lanca određene podatke. To se zove promise chaning i osigurava nam da podatke iz različitih izvora, kao što bi nam se moglo
dogoditi sa npr. callback hellom, puno bolje i preglednije odradimo... */

obecanje
  .then((korisnik) => {
    console.log(korisnik);
    return korisnik.ime;
  })
  .then((ime) => {
    console.log(ime);
    return ime.length;
  })
  .then((duzina) => {
    console.log(duzina);
  })
  .catch((greska) => {
    console.log(greska);
  });
