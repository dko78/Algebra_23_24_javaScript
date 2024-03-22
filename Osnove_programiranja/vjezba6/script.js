// primjer switcha

/* const dan = prompt("Koji je danas dan?");

switch (dan) {
  case "ponedjeljak": // ovaj case radi provjeri kao da sam upisao : dan === ponedjeljak
    console.log("danas je prvi dan tjedna");
    console.log("danas smo 4 dana udaljeni od vikenda");
    break; // kada ovdje ne bi bilo breaka, kod će ispisati i idući dan, u biti sve dok ne naleti na prvi break

  case "utorak":
    console.log("danas je drugi dan tjedna");
    break;

  case "srijeda":
    console.log("sredina tjedna");
  case "četvrtak":
    console.log("mali petak");
    break; // s obzirom da nakon casea srijede nije bilo breaka, ispisat će se i case četvrtak

  case "petak":
    console.log("PETAK JE!!!");
    break;

  case "subota":
  case "nedjelja":
    console.log("vikend...");
    break;

  default:
    console.log("niste unesli dan u tjednu");
} */

// primjer do-while, while-do

let count = 0;
while (count < 10) {
  console.log(count);
  count++;
}

let brojac = 0;

do {
  brojac++;
  console.log(brojac);
} while (brojac < 10);

// napišite while petlju koja će ispisivati sve brojeve od 3 do 20
// korak dalje, ispisujemo brojeve koji su dijeljivi sa 9, i one koji nisu dijeljivi sa 9...

let broj = 3;

while (broj <= 20) {
  if (broj % 9 === 0) {
    console.log(broj);
  } else if (broj % 9 != 0) {
    console.log(broj);
  }
  broj++;
}
