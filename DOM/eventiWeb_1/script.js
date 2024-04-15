"use strict";

const granparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

const divs = document.querySelectorAll("div");
console.log("divs", divs);

const divs2 = document.getElementsByTagName("div");

console.log("divs2", divs2);
/*
granparent.addEventListener(
  "click",
  (e) => {
    //console.log(e.target);
    console.log("Grandparent Capture");
  },
  { capture: true }
);

granparent.addEventListener("click", (e) => {
  //console.log(e.target);
  console.log("Grandparent Bubble");
});

parent.addEventListener(
  "click",
  (e) => {
    //console.log(e.target);

    console.log("Parent Capture");
  },
  { capture: true }
);

parent.addEventListener("click", (e) => {
  //console.log(e.target);
  console.log("Parent Bubble");
});

child.addEventListener(
  "click",
  (e) => {
    //console.log(e.target);
    console.log("child Capture");
  },
  { capture: true }
);

child.addEventListener("click", (e) => {
  //console.log(e.target);
  console.log("child Bubble");
  e.stopPropagation();
});

document.addEventListener(
  "click",
  (e) => {
    //console.log(e.target);
    console.log("document Capture");
  },
  { capture: true }
);

document.addEventListener("click", (e) => {
  //console.log(e.target);
  console.log("document Bubble");
});
*/

//2. remove eventListner
/*
granparent.addEventListener("click", (e) => {
  //console.log(e.target);
  console.log("Grandparent Bubble");
});

parent.addEventListener("click", printHi);

setTimeout(() => {
  parent.removeEventListener("click", printHi); //mora biti funkcija, ne mozes samo kod kopirati. isto tako kao gore
}, 2000);

child.addEventListener("click", (e) => {
  //console.log(e.target);
  console.log("child Bubble");
});

function printHi() {
  console.log("Hi");
}
*/

//3. Delegate element

//divs.forEach((div) => {
//  div.addEventListener("click", () => {
//    console.log("HI");
//  });
//});

addGlobalEvnentListener("click", "div", (e) => {
  console.log("Hi");
});

function addGlobalEvnentListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) callback(e);
  });
}

const newDiv = document.createElement("div");
newDiv.style.width = "200px";
newDiv.style.height = "200px";
newDiv.style.backgroundColor = "yellow";
document.body.append(newDiv);
