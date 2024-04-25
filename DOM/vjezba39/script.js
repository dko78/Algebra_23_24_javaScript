"use strict";

const obecanje = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ ime: "Igor", prezime: "Jevremović" });
  }, 1000);
});

obecanje.then((data) => console.log(data));

/* Ovako nešto bi mogli napisati i koristeći Async/Await metodu */

async function cekajObecanje() {
  const odgovor = await obecanje;
  console.log(odgovor);
}

cekajObecanje();

/* Ajmo vidjeti kako bi koristili Async/Await metodu za dohvaćanje sa API-a. Prvo definiramo da je funkcija asinkrona sa async prefixom.
Nakon toga response spremamo pomoću fetcha ali način da upotrijebimo await iliti čekanje da se fetch odvrti i da se rezultat spremi.
I naravno onda taj response spremamo u varijablu data također pomoću awaita koji je asinkroni task response... */

async function dohvatiUsera() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
}

dohvatiUsera();

// isti task napisan .then metodom...

function dohvatiUsera1() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

dohvatiUsera1();

// isti task napisan sa Async/Await arrow funkcijom

const dohvatiUsera2 = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
};

dohvatiUsera2();

/* Idemo probati vidjeti kako koristiti try/catch koji će nam pomoći da riješimo errore... */

const useri = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
