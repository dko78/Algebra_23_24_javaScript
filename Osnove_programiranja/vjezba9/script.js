// Strict mode ne dozvoljava određene stvari, ideja je da javlja greške koje inače JS po defaultu neće prijaviti.
// Služi za pisanje sigurnijeg koda kako bi lakše izbjegli greške.

"use strict";

let imaVozackuDozvolu = false;
const prosaoVozackiIspit = true;

if (prosaoVozackiIspit) {
  imaVozackuDozvolu = true;
}

const interface = "Audio";
const private = "lozinka";
