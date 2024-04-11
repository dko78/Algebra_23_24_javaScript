"use strict";

const granparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
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
    //e.stopPropagation();
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

granparent.addEventListener("click", (e) => {
  //console.log(e.target);
  console.log("Grandparent Bubble");
});

/*
parent.addEventListener(
  "click",
  (e) => {
    //console.log(e.target);
    console.log("Parent Bubble");
  
  },
  { once: true }
);
*/
parent.addEventListener("click", printHi);

setTimeout(() => {
  parent.removeEventListener("click", printHi);
});

child.addEventListener("click", (e) => {
  //console.log(e.target);
  console.log("child Bubble");
  //e.stopPropagation();
});

function printHi() {
  console.log("Hi");
}
