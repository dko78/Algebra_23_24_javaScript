"use strict";

//PROMISES COLORCODE

function getWeather() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("Sunčano");
    }, 100);
  });
}

function getWeatherIcon(weather) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      switch (weather) {
        case "Sunčano":
          resolve("🌝");
          break;
        case "Oblačno":
          resolve("🌈");
          break;
        case "Kiša":
          resolve("☂");
          break;
        default:
          reject("Nema ikone!");
      }
    }, 100);
  });
}

/* moze ovako ali je ruzno
const promise = getWeather();

promise.then(
  function (data) {
    console.log(`First param ${data}`);
  },
  function (data) {
    console.log(`Second param ${data}`);
  }
);
console.log(promise);

end moze ovako ali je ruzno*/
//
function onSuccess(data) {
  console.log(`Sucess ${data}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

getWeather().then(getWeatherIcon).then(onSuccess, onError); //frugi parametar u .then() je ustvari catch
//.catch(onError);
