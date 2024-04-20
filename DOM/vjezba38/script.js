"use strict";

const apiUrl = "https://jsonplaceholder.typicode.com/todos?_limit=10";

const getTodos = () => {
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((todo) => noviTodo(todo));
    });
};

const noviTodo = (todo) => {
  const div = document.createElement("div");
  div.classList.add("todo");
  div.appendChild(document.createTextNode(todo.title));
  div.setAttribute("data-id", todo.id);

  let trashIcon = document.createElement("i");
  trashIcon.className = "fa-solid fa-trash";
  trashIcon.addEventListener("click", deleteTodo);
  div.appendChild(trashIcon);

  if (todo.completed) {
    div.classList.add("gotov");
  }

  document.getElementById("todo-list").appendChild(div);
};

const deleteTodo = () => {
  console.log("bok");
};

const createTodo = (e) => {
  e.preventDefault();

  const input = e.target.firstElementChild;
  const noviTodoNaslov = input.value.trim();
  if (noviTodoNaslov === "") {
    alert("Molimo unesite novi zadatak");
    return;
  }

  const dodajTodo = {
    title: noviTodoNaslov,
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

  updateTodo(e.target.dataset.id, e.target.classList.contains("gotov"));
};

const updateTodo = (id, completed) => {
  fetch(`${apiUrl}/${id}`, {
    method: "PUT",
    body: JSON.stringify({ completed }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

document.addEventListener("DOMContentLoaded", getTodos);
document.getElementById("todo-form").addEventListener("submit", createTodo);
document.getElementById("todo-list").addEventListener("click", toggleCompleted);
