"use strict";

//https://jsonplaceholder.typicode.com/users
//https://www.youtube.com/watch?v=TlP5WIxVirU

const urlUsers = "https://jsonplaceholder.typicode.com/users";

const userCardTemplate = document.querySelector("[data-user-template]");

const userCardContainer = document.querySelector("[data-user-cards-container]");

const searchInput = document.querySelector("[data-search]");

const btnSearch = document.querySelector(".btnSearch");
const userForm = document.querySelector(".userForm");

userForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const value = searchInput.value;
  if (value) {
    try {
      const userData = await getUsers(value);
      displayUsers(userData);
    } catch (error) {
      console.error(error);
      displayErrors(error);
    }
  } else {
    displayErrors("Upišite ID usera.");
  }
});

async function getUsers(value) {
  //const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  const url = `https://jsonplaceholder.typicode.com/users/${value}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Nisam mogao dohvatiti podake");
  }

  return await response.json();
}

function displayUsers(data) {
  userCardContainer.textContent = "";
  //dobiješ objekt pa koristi Object Destructuring
  const { name: imeUser, email: emailUser } = data;
  const card = userCardTemplate.content.cloneNode(true).children[0];
  const header = card.querySelector("[data-header]");
  const body = card.querySelector("[data-body]");
  header.textContent = imeUser;
  body.textContent = emailUser;
  //append
  userCardContainer.append(card);
}

function displayErrors(message) {
  // const errorDisplay = document.createElement("p");
  // errorDisplay.textContent = message;
  alert(message);
  userCardContainer.textContent = "";
  searchInput.value = "";
  searchInput.focus();
}

