"use strict";

/* Možemo dohvatiti i određeni element po HTML tagu, ali onda će se od tih elemenata
napraviti lista i uz pomoć te liste dohvaćamo onaj element kojeg hoćemo. */
console.log(document.getElementsByTagName("h1")[0].innerHTML);

/* Možemo dohvatiti određeni element i na njega nakačiti novi atribut sa 
željenom vrijednosti. */

document.getElementById("naslov").setAttribute("class", "naslov_h1");

const naslov = document.getElementById("naslov");
naslov.innerHTML = "<strong>Ovo je novi naslov</strong>";

/* Ovo među ostalim možemo onda elegantno koristi i za izmjenu CSS-a. */
naslov.style.color = "#FF0000";
naslov.style.backgroundColor = "#eee";
naslov.style.padding = "2rem";
naslov.style.borderRadius = "5px";

/* QuerySelectorom možemo odabrati što god hoćemo po atributu. */

console.log(document.querySelector("#naslov"));

/* QuerySelectorAll funkcionira isto kao i QuerySelector, ali s njim selektiramo
sve instance koje imaju podešen atribut kojeg targetiramo. */

const lista = document.querySelectorAll("ul li");
console.log(lista);
console.log(lista[2].innerHTML);

lista.forEach((clan_liste, kljuc) => {
  clan_liste.style.color = "#ff0000";

  if (kljuc === 1) {
    clan_liste.remove();
  }

  if (kljuc === 2) {
    clan_liste.innerHTML = `Kupi novine <mark>u trgovini</mark>`;
  }
});

/* GetElementByClassName */

const dijete = document.getElementsByClassName("dijete");
console.log(dijete);
console.log(dijete[2].innerHTML);

//primjer...

let podaci;
const roditelj = document.querySelector(".roditelj");
console.log(roditelj);

podaci = roditelj.children;
podaci = roditelj.children[1].innerHTML;
podaci = roditelj.children[1].innerText;
podaci = roditelj.children[1].className;
console.log(podaci);

roditelj.children[1].innerText = "Promijenio sam tekst";
roditelj.children[1].innerHTML = "Promijenio sam tekst, <mark>opet</mark>";
roditelj.children[1].style.color = "#ff0000";

roditelj.firstElementChild.innerText = "Ovako mijenjamo prvog člana";
roditelj.lastElementChild.innerText = "Ovako mijenjamo zadnjeg člana";

// primjer drugog smjera kretanja

const drugoDijete = document.querySelector(".dijete:nth-child(2)");
console.log(drugoDijete);

podaci = drugoDijete.nextElementSibling;
drugoDijete.nextElementSibling.style.fontSize = "3rem";
drugoDijete.previousElementSibling.style.fontSize = "3rem";
console.log(podaci);
