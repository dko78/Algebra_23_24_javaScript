"use strict";

const obecanje = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ ime: "dalibor" });
  }, 1000);
});

obecanje.then((data) => console.log(data));

//ovako sa Async
async function cekajObecanje() {
  const odgovor = await obecanje;
  console.log(odgovor);
}
cekajObecanje();

/*
  async sa apija
*/

async function dohvatiUsera() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users ");
  const data = await res.json();
  console.log(data);
}

dohvatiUsera();

function dohvatiUsera1() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

dohvatiUsera1();

//arrow funkcija

const dohvatiUsera2 = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users ");
  const data = await res.json();
  console.log(data);
};

dohvatiUsera2();

/*
  try catch koji će nam pomoći da rješimo errore
*/

let imena = [];

const useri = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users ");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
};
