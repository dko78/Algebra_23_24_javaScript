"use strict";

function getData(putanja, cb) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", putanja);

  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      cb(JSON.parse(this.response));
    }
  };

  setTimeout(() => {
    xhr.send();
  }, Math.floor(Math.random() * 2000) + 100);
}

getData("./filmovi.json", (filmovi) => {
  console.log(filmovi);
  getData("./glumci.json", (glumci) => {
    console.log(glumci);
    getData("./redatelji.json", (redatelji) => {
      console.log(redatelji);
    });
  });
});
