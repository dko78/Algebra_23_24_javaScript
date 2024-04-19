"use strict";

//dohvati todos

const apiUrl = "https://jsonplaceholder.typicode.com/todos?_limit=10"; //limitirali smo 10 komada

const getTodos = () => {
  fetch(apiUrl)
    .then((res) => res.json())
    // .then((data) => console.log(data));
    .then((data) => {
      data.forEach((todo) => noviTodo(todo));
    });
};

const noviTodo = (todo) => {
  const div = document.createElement("div");
  div.classList.add("todos");
  div.appendChild(document.createTextNode(todo.title));
  div.setAttribute("data-id", todo.id);

  let trashIcon = document.createElement("i");
  trashIcon.className = "fa-solid fa-trash";
  trashIcon.addEventListener("click", deleteTodos);
  div.appendChild(trashIcon);

  if (todo.completed) {
    div.classList.add("gotov");
  }

  document.getElementById("todo-list").appendChild(div);
};

const deleteTodos = () => {
  console.log("bok");
};

const createTodo = (e) => {
  e.preventDefault();

  const input = e.target.firstElementChild;
  const noviTodoNaslov = e.target.firstElementChild.value.trim(); //input elemete forme bez first
  if (noviTodoNaslov === "") {
    alert("unesi zadatak");
    return;
  }
  const dodajTodo = {
    titl: noviTodoNaslov,
    completed: false,
  };

  fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(dodajTodo),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      input.value = "";
      noviTodo(data);
    });
};

const toggleCompleted = (e) => {
  if (e.target.classList.contains("todo")) {
    e.target.classList.toggle("gotov");
  }

  const updateTodo = (id, completed) => {
    fetch(`${apiUrl}/${id}`,{
    method:"PUT",
    body :
    headers:

    })
  }
};
document.addEventListener("DOMContentLoaded", getTodos);
document.getElementById("todo-form").addEventListener("submit", createTodo);
document.getElementById("todo-list").addEventListener("click", toggleCOpleted);
