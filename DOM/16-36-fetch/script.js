"use strict";

/*
modernije
kako zna otkud podaci?
fetch vraća promice i onje u window objektu

const odgovor = fetch("url ili putanja koju dohvaćamo");
*/

const url = "https://jsonplaceholder.typicode.com/todos/1";

function dohvatiPodatke() {
  const response = fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data)); //fetch je po defaultu GET
}

dohvatiPodatke();

fetch("./filmovi.json")
  .then((response) => response.json())
  .then((podaci) => console.log(podaci));

fetch("./test.txt")
  .then((response) => response.text())
  .then((data) => console.log(data));

//dohvatiti sa adrese todova fetcom podatke i zamijenite u h1 u DOMu
//sadržajem titea

fetch(url)
  .then((res) => res.json())
  .then((data) => (document.querySelector("h1").textContent = data.title));

/*
  Fetch je po defoltu GET, ali ako zelis POST to moras napisati
  U svakom req se u bitinalaze 3 stvari:
  1.metoda: http metoda koju zelim koristii
  2. body :podaci koje zelim posalti
  3. header : bilo kakav http heeader koji zelimo korisiti (vrsta, content type, tokeni...)
*/
//POST
/*
mozemo koristiti dekonstruiranje umjesto posata kao parametra i posalti title i body.

*/
function kreirajPost({ title, body }) {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "applicatio/json",
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

kreirajPost({ titel: "Moj post", body: "ovo je moj post" });
