"use strict";
/*
    promise - je objekt koji će rezultirati jednom vrijednosti koja moze biti ili riješene ili ne riješena.
    Sastoji se od egzekutor funckije koja mora napraviti provjeru resolve (uspješno rješeno) 
    ili reject neuspješno rješeno(odbačeno)
    Nakon toga sa .then metodom mozemo definirati što će se dogoditi u oba slučaja

*/
let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("uspjeh");
  } else {
    reject("Failed");
  }
});

p.then((message) => {
  //radi ovo ako uspije
  console.log("ovo je u then:" + message);
}).catch((message) => {
  //radi ovo ako ne uspije
  console.log("ovo je u catch:" + message);
});

//2.
const userLeft = false;
const userWatchingCatMeme = true;

function watchTutorialPromise() {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: "user left",
        message: ":(",
      });
    } else if (userWatchingCatMeme) {
      reject({
        name: "User watching cat meme",
        message: "web simplified < cat",
      });
    } else {
      resolve("Palac gore i subscribe");
    }
  });
}

watchTutorialPromise()
  .then((message) => {
    console.log("uspjeh: " + message);
  })
  .catch((error) => {
    console.log(error.name + " " + error.message);
  });

//3.

const recordVideo1 = new Promise((resolve, reject) => {
  resolve("video one recorded");
});

const recordVideo2 = new Promise((resolve, reject) => {
  resolve("video 2 recorded");
});

const recordVideo3 = new Promise((resolve, reject) => {
  resolve("video 3 recorded");
});

//gelda da su sva 3 završila i vraća array
// Promise.all([recordVideo1, recordVideo2, recordVideo3]).then((messages) => {
//   console.log(messages);
// });
//čeka da samo prvi završi
Promise.race([recordVideo1, recordVideo2, recordVideo3]).then((message) => {
  console.log(message);
});

//4 Igorov primjer
const imena = [
  { ime: "Marija", prezime: "Marić" },
  { ime: "Iva", prezime: "Ivić" },
];

const kreirajIme = (ime) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let greska = false;
      if (!greska) {
        imena.push(ime);
        resolve();
      } else {
        reject("nije uspio zapis imena");
      }
    }, 1000);
  });
};

const getImena2 = () => {
  setTimeout(() => {
    imena.forEach((osoba) => {
      const div = document.createElement("div");
      div.innerHTML = `<p>${osoba.ime} ${osoba.prezime}</p>`;
      document.getElementById("imena").appendChild(div);
    });
  }, 1000);
};
