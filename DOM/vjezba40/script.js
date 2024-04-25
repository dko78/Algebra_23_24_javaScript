"use strict";

/* Kompletan poziv u kojem prvenstveno koristimo .then metodu gdje ćemo se pobrinuti za sve errore. Catch error će nam javiti ako ima problema
sa podacima na serveru ili server nije dostupan, a na početku ćemo provjeriti da li nam je status ok iliti da li je response 200 kako
bi spriječili 404, 500 ili ostale errore da nam odmah jave grešku.. */

const dohvatiUsere = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      if (!res.ok) {
        console.log("Ne možemo dohvatiti podatke");
        return;
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

dohvatiUsere();

/* Ista stvar koristeći Async/Await metodu */

const dohvatiUsere1 = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    if (!res.ok) {
      console.log("Ne možemo dohvatiti podatke");
      return;
    }
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

dohvatiUsere1();

/* Idemo još vidjeti kako bi npr. sa POST metodom dodali novog člana usera */

const noviUser = {
  name: "Igor",
  email: "email@email.com",
};

const dohvatiUsera2 = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(noviUser),
    });
    const data = await res.json();
    if (!res.ok) {
      console.log("Ne možemo dohvatiti podatke");
      return;
    }
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

dohvatiUsera2();
