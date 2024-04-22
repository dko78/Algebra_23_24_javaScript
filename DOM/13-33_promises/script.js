"use strict";
/*
    promise - je objekt koji će rezultirati jednom vrijednosti koja moze biti ili riješene ili ne riješena.
    Sastoji se od egzekutor funckije koja mora napraviti provjeru resolve (uspješno rješeno) 
    ili reject neuspješno rješeno(odbačeno)
    Nakon toga sa .then metodom mozemo definirati što će se dogoditi u oba slučaja

*/
/*
const obecanja = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Asink zadatak je završen");
    resolve();
  }, 1000);
});

obecanja.then(() => {
  console.log("obećanje je dovršeno ....");
});

console.log("pozdrav iz globalnog sinkronog koda");

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ ime: "IGor" });
  }, 1000);
}).then((osoba) => console.log(`${osoba.ime} je tu... `));

// idemo vidjweti kako rijepšiti reject situaciju

const dohvatiUsera = new Promise((resolve, reject) => {
  setTimeout(() => {
    let greska = false;

    if (!greska) {
      resolve({ ime: "Dalibor" });
    } else {
      reject("nešto je pošlo po krivu");
    }
  }, 1000);
});
*/
/*
  prepiši!--vjezba 33
*/
/*
dohvatiUsera
  .then((osoba) => console.log(`${osoba.ime} je tu... `)) //tu definiraš ako je resolves
  .catch((error) => console.log(error))
  .finally(() =>
    console.log(
      "Finally ne zanima da lije resolve ili reject, on se bude izvršio"
    )
  );
*/
//praktičan primjer
/*
const imena = [
  {
    ime: "Marko",
    prezime: "Markić",
    dob: 30,
  },

  {
    ime: "Pero",
    prezime: "Perić",
    dob: 57,
  },

  {
    ime: "Maja",
    prezime: "Majić",
    dob: 22,
  },
];

const kreirajIme = (ime, cb) => {
  setTimeout(() => {
    imena.push(ime);
    cb();
  }, 1000);
};

const getImena = () => {
  setTimeout(() => {
    imena.forEach((osoba) => {
      const div = document.createElement("div");
      div.innerHTML = `<p>${osoba.ime}</p>`;
      document.getElementById("imena").appendChild(div);
    });
  }, 1000);
};

kreirajIme({ ime: "Ana" }, getImena);

*/
//primjer isto to sa PROMISE
const imena = [
  { ime: "Marija", prezime: "Marić" },
  { ime: "Iva", prezime: "Ivić" },
];

const kreirajIme = (ime) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let greska = false;

      if (!greska) {
        imena.push(ime);
        resolve();
      } else {
        reject("Nešto je pošlo po krivu...");
      }
    }, 100);
  });
};

const getImena = () => {
  setTimeout(() => {
    imena.forEach((osoba) => {
      const div = document.createElement("div");
      div.innerHTML = `<p>${osoba.ime} ${osoba.prezime}</p>`;
      document.getElementById("imena").appendChild(div);
    });
  }, 1000);
};

const pokaziGresku = (error) => {
  const p = document.createElement("p");
  p.innerHTML = `<strong>${error}</strong>`;
  document.getElementById("imena").appendChild(p);
};

//kreirajIme({ ime: "Ana", prezime: "Anić" }.then(getImena).catch(pokaziGresku));
