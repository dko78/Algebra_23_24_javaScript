"use strict";

const artistCardTemplate = document.querySelector("[data-artist-template]");

const artistCardContainer = document.querySelector(
  "[data-artist-cards-container]"
);

const searchInput = document.querySelector("[data-search]");

const btnSearch = document.querySelector(".btnSearch");
const artistForm = document.querySelector(".artistForm");

async function getArtist(term) {
  const url = `https://itunes.apple.com/search?term=${term}&limit=50`;
  console.log("Parsani URL: ", url);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Nisam mogao dohvatiti podake");
  }

  return await response.json();
}

//getArtist("Jack Johnson");

artistForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const value = searchInput.value;
  if (value) {
    try {
      const artistData = await getArtist(value);
      displayArtist(artistData);
    } catch (error) {
      console.error(error);
      displayErrors(error);
    }
  } else {
    displayErrors("Upišite naziv izvođača.");
  }
});

function displayArtist(data) {
  artistCardContainer.textContent = "";

  data.results.forEach((artist) => {    
    const card = artistCardTemplate.content.cloneNode(true).children[0];
    const header = card.querySelector("[data-header]");
    const body = card.querySelector("[data-body]");
    header.textContent = artist.artistName;
    body.textContent = artist.trackName;
    //append
    artistCardContainer.append(card);
  });
}

function displayErrors(message) {
  // const errorDisplay = document.createElement("p");
  // errorDisplay.textContent = message;
  alert(message);
  artistCardContainer.textContent = "";
  searchInput.value = "";
  searchInput.focus();
}
