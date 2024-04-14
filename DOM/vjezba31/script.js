"use strict";

const izmjena = (e) => {
  e.target.classList.toggle("crvena");
};

document.querySelector("button").addEventListener("click", izmjena);

// idemo simulirati API poziv koji dohvaća listu imena

const imena = [
  { ime: "Ivan", prezime: "Horvat" },
  { ime: "Jura", prezime: "Jurić" },
];

const kreirajIme = (ime, cb) => {
  setTimeout(() => {
    imena.push(ime);
    cb();
  }, 2000);
};

const getImena = () => {
  setTimeout(() => {
    imena.forEach((e) => {
      const div = document.createElement("div");
      div.innerHTML = `<strong>${e.ime} ${e.prezime}</strong>`;
      document.getElementById("imena").appendChild(div);
    });
  }, 1000);
};

kreirajIme({ ime: "Maja", prezime: "Majić" }, getImena);
