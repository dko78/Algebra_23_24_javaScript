"use strict";

const showData = false;

const artistSearchForm = document.querySelector(".artistForm");
const searcEdit = document.querySelector(".search");
//onst artistCard = document.querySelector(".artist-card");

artistSearchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const value = searcEdit.value;
  if (value) {
    try {
      const artistData = await getItunes(value, 50);
      displayArtistData(artistData);
    } catch (error) {
      console.error(error);
      displayError(error);
    }
  } else {
    displayError("Upišite izvođača ili ime");
  }
});

async function getItunes(term, limit) {
  console.log(term);
  const url = `https://itunes.apple.com/search?term=${term}&media=music&entity=song&limit=${limit}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Nisam mogao dohvatiti podatke");
  }
  return await response.json();
}

// const noviTodo = (todo) => {
//   const div = document.createElement("div");
//   div.classList.add("todo");
//   div.appendChild(document.createTextNode(todo.title));
//   div.setAttribute("data-id", todo.id);
//   document.getElementById("todo-list").appendChild(div);
// };

function displayArtistData(data) {
  //artistCard.textContent = "";
  //artistCard.style.display = "flex";
  //console.log(data);

  data.results.forEach((artist) => {
    console.log(artist);
  });
});


const artistCollection = [];

function displayError(message) {
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");
  artistCard.textContent = "";
  artistCard.style.display = "flex";
  artistCard.appendChild(errorDisplay);
}
);
