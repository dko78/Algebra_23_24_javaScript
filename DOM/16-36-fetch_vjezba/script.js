"use strict";

/* Fetch je moderniji pristup HTTP requestovima. Za razliku od XMLHttpRequesta Fetch sam po sebi vraća promise. Fetch je metoda
koju imamo u samom window objektu. */

// const odgovor = fetch("url iliti putanju dokumenta kojeg dohvaćamo");

function dohvatiPodatke() {
  const response = fetch("https://jsonplaceholder.typicode.com/todos/3")
    .then((response) => response.json())
    .then((data) => console.log(data.title));
}

dohvatiPodatke();

fetch("./filmovi.json")
  .then((response) => response.json())
  .then((podaci) => console.log(podaci));

fetch("./redatelji.json")
  .then((response) => response.json())
  .then((podaci) => console.log(podaci));

fetch("./test.txt")
  .then((response) => response.text()) //pazi response nije json
  .then((podaci) => console.log(podaci));

//ovo gora svakavim redoslijeom ide

// primjer : dohvatite sa naslove todova fetchom podatke i zamijenite h1 u DOM-u sa sadržajem titlea u data responsu fetcha
fetch("https://jsonplaceholder.typicode.com/todos/3")
  .then((response) => response.json())
  .then((data) => (document.querySelector("h1").textContent = data.title));

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
