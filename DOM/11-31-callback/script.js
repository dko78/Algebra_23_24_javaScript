"use strict";

const izmjena = (e) => {
  e.target.classList.toggle("crvena"); //ako ima klasas makne ju, ako neam stavlja ju
};

document.querySelector("button").addEventListener("click", izmjena);

//primjer api dohvati listu imena

const imena = [
  { ime: "Ivan", prezime: "Horvat" },
  { ime: "Saša", prezime: "Jurić" },
];

//ubacivanje

const kreirajIme = (ime, cb) => {
  setTimeout(() => {
    imena.push(ime);
    cb(); //bitno da osiguraš
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

//getImena();
kreirajIme({ ime: "Maja", prezime: "Majić" }, getImena); //ovo se nije izvršilo jer je nasatlo nakon get
