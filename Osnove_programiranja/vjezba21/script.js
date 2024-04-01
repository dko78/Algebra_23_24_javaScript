"use strict";

/* window objekt i sve metode koje možemo primjeniti na window objektu */
console.log(window);

/* Naš HTML dokument i prikaz njega u konzoli. Možemo ga napisati bez prefiksa window jer je window top lvl objekt a document je njegov
podobjekt. */
console.log(document);

// sa innerHTML metodom možemo dohvatiti HTML kod unutar našeg document objekta koji dolazi iz DOM-a. Ovdje dohvaćamo HTML kod bodya
console.log(document.body.innerHTML);

// sa innerText metodom možemo dohvatiti sadržaj unutar našeg bodya...
console.log(document.body.innerText);

// Ova priča nije samo read-only, mi možemo mijenjati stvari na ovaj način. Npr. izmjeniti sadržaj bodya...
document.body.innerHTML = "<h1>Hello World</h1>";
