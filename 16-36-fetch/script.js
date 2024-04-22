"use strict";

/* Fetch je moderniji pristup HTTP requestovima. Za razliku od XMLHttpRequesta Fetch sam po sebi vraća promise. Fetch je metoda
koju imamo u samom window objektu. */

// const odgovor = fetch("url iliti putanju dokumenta kojeg dohvaćamo");

function dohvatiPodatke() {
  const response = fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

dohvatiPodatke();

fetch("./filmovi.json")
  .then((response) => response.json())
  .then((podaci) => console.log(podaci));

fetch("./test.txt")
  .then((response) => response.text())
  .then((data) => console.log(data));

// primjer : dohvatite sa adrese todova fetchom podatke i zamijenite h1 u DOM-u sa sadržajem titlea u data responsu fetcha

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => res.json())
  .then((data) => (document.querySelector("h1").textContent = data.title));

/* 
  Fetch po defaultu ima GET metodu u fetch requestu, ali ako nešto želimo poslati metodom POST, to moramo i napisati.
  U svakom requestu se u biti nalaze 3 stvari:
  1. method : HTPP metoda koju želimo koristiti, po defaultu GET
  2. body : podaci koje želimo poslati
  3. headers : Bilo kakav HTTP header koji želimo koristiti

  Možemo iskoristiti i dekonstruiranje i umjesto posta kao parametra poslati title i body, a onda skraćeno i napisati u našem
  bodyu title i body. U headersu definiramo Content-Type kao application/json jer šaljemo json podatke. Ako postoji potreba
  za pristupnim tokenom šaljemo i token sa vrijednosti.
  */

function kreirajPost({ title, body }) {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: "abc123",
    },
    body: JSON.stringify({
      title,
      body,
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

kreirajPost({ title: "Moj post", body: "Ovo je moj post" });
