"use strict";

//https://jsonplaceholder.typicode.com/users
//https://www.youtube.com/watch?v=TlP5WIxVirU

const urlUsers = "https://jsonplaceholder.typicode.com/users";

const userCardTemplate = document.querySelector("[data-user-template]");

const userCardContainer = document.querySelector("[data-user-cards-container]");

const searchInput = document.querySelector("[data-search]");

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  //console.log(users);
  users.forEach((user) => {
    const isVisible =
      user.name.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value);
    user.element.classList.toggle("hide", !isVisible);
  });
});

let users = [];

//primjer web simpified
/*
//ovaj dio koda ti radi samo display
fetch(urlUsers)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((user) => {
      const card = userCardTemplate.content.cloneNode(true).children[0];
      const header = card.querySelector("[data-header]");
      const body = card.querySelector("[data-body]");
      header.textContent = user.name;
      body.textContent = user.email;
      //append
      userCardContainer.append(card);
    });
  })
  .catch((error) => {
    console.log(`ERROR: ${error}`);
  });
*/
//e ovaj radi i pretraživanje, slično kao display kao gore ali hide-.a
fetch(urlUsers)
  .then((res) => res.json())
  .then((data) => {
    users = data.map((user) => {
      const card = userCardTemplate.content.cloneNode(true).children[0];
      const header = card.querySelector("[data-header]");
      const body = card.querySelector("[data-body]");
      header.textContent = user.name;
      body.textContent = user.email;
      //append
      userCardContainer.append(card);
      return { name: user.name, email: user.email, element: card };
    });
  })
  .catch((error) => {
    console.log(`ERROR: ${error}`);
  });

