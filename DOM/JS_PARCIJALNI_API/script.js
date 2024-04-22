"use strict";
/*

The fully-qualified URL must have the following format:

https://itunes.apple.com/search?parameterkeyvalue

Where parameterkeyvalue can be one or more parameter key and value pairs indicating the details of your query.

To construct a parameter key and value pair, you must concatenate each parameter key with an equal sign (=) and a value string. For example: key1=value1. To create a string of parameter key and value pairs, you must concatenate each pair using an ampersand (&). For example:

key1=value1&key2=value2&key3=value3

Note: When creating search fields and scripts for your website, you should use dynamic script tags for your xmlhttp script call requests. For example:

<script src="https://.../search?parameterkeyvalue&callback="{name of JavaScript function in webpage}"/>

*/

const apiUrl = "https://itunes.apple.com/search?term=indie&entity=song";
const jachJohnsonApiURL =
  "https://itunes.apple.com/search?term=jack+johnson&entity=musicVideo";

fetch(jachJohnsonApiURL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => `ERROR: ${error}`);

/*
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
*/
