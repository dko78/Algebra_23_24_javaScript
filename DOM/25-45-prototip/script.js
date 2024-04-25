"use strict";

const user = {
  ime: "Igor",
};

console.log(user);

console.log(user.__proto__);

console.log(useuser.__proto__ === Object.prototype); //tru, ito je

//konstruktor funckija
function korisnik(ime) {
  this.ime = ime;
 
  };
}
//da si na objekt dodao onda bi se više puta pokrenula funckija
korisnik.prototype.login = function(){
  console.log(`${this.ime} se logirao.`)
}


const korisnik1 = new korisnik("Dalibor");

const korisnik2 = new korisnik("Emina");

korisnik.login(); //dalibor se logirao

const user1 = {
  id:1,ime:"Maja",
  povecaj(){
    this.id++
  }
}
console.log(user1)

user1.povecaj()

console.log(user1)

//funckijakoja kreira objekte

function kreirajUsera(id, name){
  const user = {}
  user.id = user,
  user.ime = ime,
  user.povecaj = () =>{this.id++};
  return user;
}