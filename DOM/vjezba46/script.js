"use strict";

/* Getters and setters u klasama
Getteri nam služe da dohvatimo svojstva iz klase
Setteri nam služe da promijenimo svojstva iz klase (mijenjajući svojstvo iz klase van klase)
*/

class User {
  constructor(id, ime, prezime) {
    this.id = id;
    this.ime = ime;
    this.prezime = prezime;
  }

  get punoIme() {
    return `${this.ime} ${this.prezime}`;
  }

  set punoIme(input) {
    const listaOdInputa = input.split(" ");
    console.log(listaOdInputa);
    this.ime = listaOdInputa[0];
    this.prezime = listaOdInputa[1];
  }

  /* Recimo da želimo dodati novo ime i želimo provjeriti imamo li takvo ime već kao objekt možemo koristiti statične metode u klasama.
  Kada pozivamo statične metode iz klasa, onda zovemo statičnu metodu direktno na klasi.
  Statične funkcije gledajte isključivo kao pomoćne funkcije koje vam mogu odraditi određene provjere... */

  static provjera(x, y) {
    return x.ime === y.ime && x.prezime === y.prezime;
  }
}

const user1 = new User(1, "Igor", "Jevremović");
const user2 = new User(2, "Ivan", "Ivić");

user1.punoIme = "Ivan Ivić";

console.log(user1.punoIme);

console.log(user1.ime);
console.log(user2.ime);

console.log(User.provjera(user1, user2));
