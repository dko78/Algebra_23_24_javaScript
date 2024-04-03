"use strict";
//event listener

const clearBtn = document.querySelector("#clear"); //# jer je ID

clearBtn.addEventListener("click", function () {
  console.log("Event listner se pokrenuo!");
});

// napisano kao arrow

clearBtn.addEventListener("click", () => {
  console.log("Event listner se pokrenuo arrow!");
});

//odvojeno definirano

function konzola() {
  console.log("Event listner se pokrenuo posebno!");
}

clearBtn.addEventListener("click", konzola); //!!! pazi ne smiješ ju pozvati

//zadatak: pobrisati sve zadatek zadatak

const clearTasks = () => {
  const listaZadataka = document.querySelector(".zadatak");

  const zadaci = listaZadataka.querySelectorAll(".pojedinacni-zadatak");

  zadaci.forEach((zadatak) => {
    zadatak.remove();
  });
};

clearBtn.addEventListener("click", clearTasks);

// pointer ponoci

const pointer = document.querySelector("h2");

const pointerEvent = (e) => {
  console.log(e.target); //daje elemnt kojeg smo kliknuli
  console.log(e.type); //daje tip/vrstu eventa pomoćukojeg je aktivirana funckija
  console.log(e.clientX);
  console.log(e.clientY);
  console.log(e.offsetX);
  console.log(e.offsetY);
  console.log(e.pageX);
  console.log(e.pageY);
  console.log(e.screenX);
  console.log(e.screenY);
};

pointer.addEventListener("click", pointerEvent);

//prevent default metodac -sprečava def ponapšanje elemata, npr refresh stranice prilikom klika na gumb

document.querySelector("#clear").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("spriječili smodefaultno ponašanje");
});
/*
document.querySelector(".btn").addEventListener("drag", (e) => {
  document.querySelector(
    "h1"
  ).innerHTML = `X koridnata: ${e.clientX}, y kordinata:${e.clientY} `;
});
*/
