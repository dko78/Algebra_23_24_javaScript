"use strict";

const userCardTemplate = document.querySelector("[data-user-template]");

const userCardContainer = document.querySelector("[data-user-cards-container]");

function searchiTunes(term) {
  const url = `https://itunes.apple.com/search?term=${term}&media=music&entity=song`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      //console.log(data);
      //artistName i trackName
      //console.log(data.results);
      data.results.forEach((user) => {
        const card = userCardTemplate.content.cloneNode(true).children[0];
        const header = card.querySelector("[data-header]");
        const body = card.querySelector("[data-body]");
        header.textContent = user.artistName;
        body.textContent = user.trackName;
        //append
        userCardContainer.append(card);
      });
    })
    .catch((error) => {
      console.log(`ERROR: ${error}`);
    });
}

searchiTunes("Taylor Swift");
console.log("el radi");

//2

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
