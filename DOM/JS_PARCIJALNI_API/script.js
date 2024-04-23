"use strict";

//https://jsonplaceholder.typicode.com/users

const urlTodo = "https://jsonplaceholder.typicode.com/users";

const searchInput = document.querySelector("[data-search]");

const userCardTemplate = document.querySelector("[data-user-template]");

const userCardContainer = document.querySelector("[data-user-cards-container]");

let users = [];

const url =
  "https://itunes.apple.com/search?term=jack+johnson&entity=musicVideo";

//primjer web simpified
fetch(urlTodo)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((user) => {
      const card = userCardTemplate.content.cloneNode(true).children[0];
      const header = card.querySelector("[data-header]");
      const body = card.querySelector("[data-body]");
      header.textContent = user.name;
      body.textContent = user.email;
      console.log(card);
      userCardContainer.append(card);
    });
    s;
  })
  .catch((error) => {
    console.log(`ERROR: ${error}`);
  });

searchInput.addEventListener("input", (e) => {
  const value = e.target.value;
});
/*
function searchiTunes(term) {
  const url = `https://itunes.apple.com/search?term=${term}&media=music&entity=song`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Handle the response data here
      console.log(data);
    })
    .catch((error) => {
      console.log(`ERROR: ${error}`);
    });
}

searchiTunes("Taylor Swift");
console.log("el radi");
*/
//2
/*
function searchiTunes2(term) {
  const url =
    "https://itunes.apple.com/search?term=jack+johnson&entity=musicVideo";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const artistCard = artistCardTemplate.content.cloneNode(true).children[0];
      console.log(data);
      // Handle the response data here
    })
    .catch((error) => {
      console.log(`ERROR: ${error}`);
    });
}
*/
/*
searchInput.addEventListener("input", (e) => {
  const value = e.target.value;
  console.log(value);
});
*/
