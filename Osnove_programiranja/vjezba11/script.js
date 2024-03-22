"use strict";

// idemo vidjeti kako scope funkcionira i kada su nam određene vrijednosti/varijable dostupne ovisno o tome što/gdje koristimo

/* const lopta = "nogometna";

const sport = () => {
  const lopta = "košarkaška";
  const lopta2 = "rukometna";
  console.log(lopta, lopta2);
};

sport(); */

// ajmo za ovaj gore primjer ubaciti podfunkciju

const lopta = "nogometna";

const sport = () => {
  const lopta2 = "rukometna";
  return {
    sport2: () => {
      return console.log(lopta, lopta2);
    },
  };
};

console.log(lopta, lopta3);

var lopta3 = "košarkaška";

const noviSport = sport();
noviSport.sport2();

// pozivanje druge funkcije unutar funkcije

function komadiVoca(voce) {
  return voce * 4;
}

function nutriBullet(jabuke, kruske) {
  const sokOdJabuke = komadiVoca(jabuke);
  const sokOdKruske = komadiVoca(kruske);
  const sok = `Sok od ${sokOdJabuke} komada jabuka i ${sokOdKruske} komada kruške.`;
  return sok;
}

console.log(nutriBullet(2, 3));
