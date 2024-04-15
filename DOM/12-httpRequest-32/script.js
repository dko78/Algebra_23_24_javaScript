"use strict";

/*
  get -traži podatke sa servera
  post-šalje podatke na serer
  put&patch-edit-updejta podatke na serveru
  delete-briš epodatke s servera

  response od servera ima status kodove:

  100-continue
  
  200-uspjeh

  201-nešto kreirano uspjeh
  204-uspjeh nema sadržaja
  
  300-redirect
  301 trajni redirect
  302 privremeni redirect
   
  400- error kod klijenta - bad request
  401 - neautoriziran zahtjev
  404 zahtjev ne moze naći , server ne moze naći

  500-greška na serveru

  ...https://httpstat.us/


  XMLHttpRequest je objelkt ugrađen u našem browseru koji omogućava da radimo zahtjeve prema serveru bez refresha stranice-
  to nam omogućava dinamičko ponašanje stranice.

*/

//dohvati imena
//objekt, metoda, putanja

const xhr = new XMLHttpRequest();
const metoda = "GET";
const url = "./imena.json";

//open metoda na našem objektu
xhr.open(metoda, url);

//nakon incijaliziranaj mozemo sa event handleru (onreadystatechange)

xhr.onreadystatechange = function () {
  console.log(this.readyState);
  console.log(this.status);
};

//moraš poslati zahtjev
xhr.send();

/* postoje 5 mogućih rješenja za readyState
  0 zahtjev nije inicjaliziran
  1 server konekcija je uspstavljena
  2 zahtjev je zaprimljen
  3 procesuiranje zahtjeva
  4 zahtjev je završio i odgovor je spreman
*/
const xhr2 = new XMLHttpRequest();
xhr2.open(metoda, url);

xhr2.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const data = JSON.parse(this.response);
    data.forEach((osoba) => {
      const li = document.createElement("li");
      li.innerHTML = `${osoba.ime} ${osoba.prezime} ${osoba.dob}`;
      document.getElementById("imena").appendChild(li);
    });
  }
};

xhr2.send();

const xhr3 = new XMLHttpRequest();
xhr3.open("GET", "https://api.github.com/users");

xhr3.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const data = JSON.parse(this.response);
    //console.log(data);

    data.forEach((user) => {
      const li = document.createElement("li");
      li.innerHTML = `${user.login}`;
      document.getElementById("useri").appendChild(li);
    });
  }
};

xhr3.send();
