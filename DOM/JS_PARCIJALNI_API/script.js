"use strict";

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
