"use strict";

class Zivotinja {
  constructor(ime) {
    this.ime = ime;
  }

  kljun() {
    console.log("Ima crni kljun");
  }
}

class Ptica extends Zivotinja {
  constructor(ime) {
    super(ime);
  }

  kljun() {
    super.kljun();
    console.log("Ima žuti kljun");
  }
}

const zivina1 = new Zivotinja("Svraka");
const zivina2 = new Ptica("Papiga");
zivina1.kljun();
zivina2.kljun();
