"use strict";

/* 
HyperText Transfer Protocol je protokol za slanje i primanje podataka na webu. 
Zahtjev inicijalizirate vi (klijent), a server će reagirati sa odgovorom. 
Odgovor može sadržavati JTML/CSS/JS fileove, slike ili druge resurse kao što su podaci u XML ili JSON obliku.

Najčešće dohvaćamo, podatke i ispisujemo ih putem DOM manipulacije, ili updateamo/brišemo određene podatke.

Imamo GET, POST, PUT&PATCH (EDIT), DELETE zahtjeve.

GET - traži podatke sa servera.
POST - šalje podatke na server.
PUT&PATCH  - updatea podatke na serveru.
DELETE - briše podatke za servera.

HTTP status kodovi:

100 - continue

200 - uspjeh
201 - uspjeh (nešto je kreirano)
204 - uspjeh (nema sadržaja)

300 - redirect
301 - trajni redirect
302 - privremeni redirect

400 - error kod klijenta (Bad request)
401 - neautoriziran zahtjev
403 - zabranjeni zahtjev
404 - zahtjev za nečim što ne postoji (server ne može naći)

500 - greška na serveru

Možete se igrati sa statusima ovdje : https://httpstat.us/

XMLHttpRequest je objekt ugrađen u našem browseru koji nam omogućava da radimo zahtjeve prema serveru
bez refresha stranice. To nam omogućava dinamičko ponašanje stranice.
Moramo definirati naš XMLHttpRequest kao novi objekt koji će sadržavati naše podatke. Moramo definirati metodu.
I moramo definirati url...
*/

const xhr = new XMLHttpRequest();
const metoda = "GET";
const url = "./imena.json";

// open metoda na našem XMLHttpRequestu inicijalizira HTTP zahtjev i zaprima 2 parametra , metodu i adresu
xhr.open(metoda, url);

/* Nakon inicijaliziranja HTTP zahtjeva možemo sa event handlerom na našem objektu koji se zove onreadystatechange upravljati
našim readyState svojstvom. ReadyState sadrži stanje u kojem se naš XMLHttpRequest klijent nalazi... */
xhr.onreadystatechange = function () {
  console.log(this.readyState);
  console.log(this.status);
};

// nakon svega još moramo i poslati naš HTTP zahtjev, a to radimo send metodom na našem XMLHttpRequestu.
xhr.send();

/* 
Postoji 5 mogućih rješenja za naš readyState:
0: zahtjev nije inicijaliziran
1: server konekcija je uspostavljena
2: zahtjev je zaprimljen
3: procesuiranje zahtjeva
4: zahtjev je završio i odgovor je spreman
*/

const xhr2 = new XMLHttpRequest();

xhr2.open(metoda, url);

xhr2.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const data = JSON.parse(this.response);
    data.forEach((osoba) => {
      const li = document.createElement("li");
      li.innerHTML = `${osoba.ime} ${osoba.prezime} ima ${osoba.godina} godina/e`;
      document.getElementById("imena").appendChild(li);
    });
  }
};

xhr2.send();

// primjer dohvaćanja usera sa gitHuba

const xhr3 = new XMLHttpRequest();
xhr3.open("GET", "https://api.github.com/users");

xhr3.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const data = JSON.parse(this.response);
    data.forEach((user) => {
      const li = document.createElement("li");
      li.innerHTML = `${user.login} je GitHub korisnik`;
      document.getElementById("useri").appendChild(li);
    });
  }
};

xhr3.send();
