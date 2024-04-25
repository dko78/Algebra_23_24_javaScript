"use strict";

const showData = false;

const userCardTemplate = document.querySelector("[data-user-template]");

const userCardContainer = document.querySelector("[data-user-cards-container]");

const resultCount = document.querySelector(".resultCount");

const searchInput = document.querySelector("[data-search]");

const btnPretrazi = document.querySelector(".btnSearch");

let artistCollection = [];

function addGlobalEnentListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) callback(e);
  });
}

/* ovo radi samo display start
function searchiTunes(term) {
  const url = `https://itunes.apple.com/search?term=${term}&media=music&entity=song`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      //console.log(data);
      resultCount.textContent = `Rezultata: ${data.resultCount}`;
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

searchiTunes("Metallica");
end ovo radi samo display start*/
/*
searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  searchiTunes(value);
  console.log(value);
  console.log(artistCollection);
  artistCollection.forEach((user) => {
    const isVisible =
      //user.artistName.toLowerCase().includes(value) || //neka greška mi je u toLowerCase mozda jer nije tekst ne znam
      //user.trackName.toLowerCase().includes(value);
      user.artistName.includes(value) || user.trackName.includes(value);
    user.element.classList.toggle("hide", !isVisible);
  });
});
*/
function searchiTunes(term) {
  const url = `https://itunes.apple.com/search?term=${term}&media=music&entity=song`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      //console.log(data);
      //resultCount.textContent = `Rezultata: ${data.resultCount}`;
      //artistName i trackName
      //console.log(data.results);
      artistCollection = data.results.map((user) => {
        const card = userCardTemplate.content.cloneNode(true).children[0];
        const header = card.querySelector("[data-header]");
        const body = card.querySelector("[data-body]");
        header.textContent = user.artistName;
        body.textContent = user.trackName;
        userCardContainer.append(card);
        return { name: user.name, email: user.email, element: card };
      });
    })
    .catch((error) => {
      console.log(`ERROR: ${error}`);
    });
}

//searchiTunes("Metallica");

btnPretrazi.addEventListener("click", function () {
  //dohvat sa inputa
  const value = searchInput.value;
  console.log(`Tražim ${value}`);
  searchiTunes(value);
});

searchInput.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    // simulate a button click to trigger the search
    btnPretrazi.click();
  }
});

console.log("el radi");
