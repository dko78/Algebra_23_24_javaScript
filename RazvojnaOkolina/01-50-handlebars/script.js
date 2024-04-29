"use strict";

//handelbar  helper funckija

fetch("https://pokeapi.co/api/v2/pokemon-color/yellow")
  .then((res) => res.json())
  .then((data) => {
    const source = document.getElementById("pokemon-list").innerHTML;
    const template = Handlebars.compile(source);
    const context = { pokemon: data.pokemon_species };
    const html = template(context);
    document.getElementById("result").innerHTML = html;
  })
  .catch((error) => console.log("error", error));
