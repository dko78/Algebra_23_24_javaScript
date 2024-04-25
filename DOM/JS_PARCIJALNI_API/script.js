"use strict";

const showData = false;

const userCardTemplate = document.querySelector("[data-user-template]");

const userCardContainer = document.querySelector("[data-user-cards-container]");

const resultCount = document.querySelector(".resultCount");

const searchInput = document.querySelector("[data-search]");

let artistCollection = [];

function searchiTunes(term, limit) {
  const url = `https://itunes.apple.com/search?term=${term}&media=music&entity=song&limit=${limit}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      //console.log(data.results);
      //resultCount.textContent = `Rezultata: ${data.resultCount}`;
      artistCollection = data.results.map((artist) => {
        // console.log(artist.artistName, artist.trackName);
        const card = userCardTemplate.content.cloneNode(true).children[0];
        const header = card.querySelector("[data-header]");
        const body = card.querySelector("[data-body]");
        header.textContent = artist.artistName;
        body.textContent = artist.trackName;
        userCardContainer.append(card);
        return {
          name: artist.artistName,
          track: artist.trackName,
          element: card,
        };
      });

      //artistName i trackName
      //console.log(data.results);
      /*
      artistCollection = data.results.map((user) => {
        const card = userCardTemplate.content.cloneNode(true).children[0];
        const header = card.querySelector("[data-header]");
        const body = card.querySelector("[data-body]");
        header.textContent = user.artistName;
        body.textContent = user.trackName;
        userCardContainer.append(card);
        return { name: user.name, email: user.email, element: card };
      });
      */
    })
    .catch((error) => {
      console.log(`ERROR: ${error}`);
    })
    .finally(() => {
      //resultCount.textContent = "END";
      console.log("END");
    });
}

//searchiTunes("Metallica", 10);

function provjeraInputa() {
  if (searchInput.value === "") {
    alert("Upišite vrijednost");
  }
  searchInput.focus();
}

console.log("el radi");

searchInput.addEventListener("input", (e) => {
  const value = e.target.value;
  searchiTunes(value, 10);
  console.log(artistCollection);
  //console.log(artistCollection);
  //artistCollection.forEach((user) => {
  /*
    const isVisible =
      user.artistName.includes(value) || user.trackName.includes(value);
    user.element.classList.toggle("hide", !isVisible);
    
  
  });
  */
});
