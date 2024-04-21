"use strict";

const d1 = document.querySelector(".description");
const fut1 = document.getElementById("footer");
const li = document.getElementsByTagName("li");

const listaRijeka = document.querySelector(".list1");
const listaPritoka = document.querySelector(".pritoke");

const btnDodajRijeku = document.querySelector("#btnDodajRijeku");
const btnDodajPritoku = document.querySelector("#btnDodajPritoku");

const bodyChildren = document.querySelector("body").children;
//prvo dete
const firstEl = document.querySelector("body").firstElementChild;

const drugoDijete = document.querySelector("body :nth-child(2)");

const treceDijete = document.querySelector("body :nth-child(3)");

const filter = document.querySelector("#filter");

const forma = document.querySelector("body");

const edtUnesiRijeku = document.querySelector("#rijeka-input");

console.log(forma);

//-----------------------
console.log(li);
console.log(d1.textContent);
console.log(listaRijeka.children);
console.log(firstEl);
console.log(bodyChildren);
console.log(drugoDijete);
console.log(treceDijete);
//global event listener
function addGlobalEvnentListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) callback(e);
  });
}

//dodaj novi zapis u listu
const noviZapis = document.createElement("li");
noviZapis.textContent = "Mrežnica";
listaRijeka.appendChild(noviZapis);

const dodajRijeku = (e) => {
  e.preventDefault();
  if (edtUnesiRijeku.value === "") {
    alert("Unesi rijeku.");
  }
  const novaRijeka = document.createElement("li");
  novaRijeka.textContent = edtUnesiRijeku.value;
  listaRijeka.appendChild(novaRijeka);
};

const filtrirajRijeke = (e) => {
  //console.log("daj");
  drugoDijete.innerHTML = e.target.value;
};
//console.log(btnDodajRijeku.textContent);

//forma.addEventListener("submit", dodajRijeku);

btnDodajRijeku.addEventListener("click", dodajRijeku);

btnDodajPritoku.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("kume dodaj pritoke");
});

/*
forma.addEventListener("click", (e) => {
  console.log(e.target.value);
});
*/
//pretraživanje
filter.addEventListener("input", filtrirajRijeke);

/*
addGlobalEvnentListener("click", btnDodajRijeku, (e) => {
  console.log("Hi");
});
*/
listaRijeka.firstElementChild.style.color = "RED";
console.log(listaRijeka.firstElementChild.textContent);
