"use strict";

const dohvatiUsere = () => {
  fetch("https://jsonplaceholder.typicode.com/users ")
    .then((res) => {
      if (!res.ok) {
        console.log("ne moze");
        return;
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.log(error));
};

dohvatiUsere();
//ista stvar async

const dohvatiUsere1 = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users ");
    const data = await res.json();
    if (!res.ok) {
      console.log("ne moze");
      return;
    }
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

dohvatiUsere1();
