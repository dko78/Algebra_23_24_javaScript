"use strict";

let x = new Date();

console.log(x);

x = new Date("2000-01-01T10:00:00");
let y = new Date("01/10/2000 10:00:00");
console.log(x, y);

// toString metoda pretvara vrijednost objekta u string
x = y.toString();

// getFullYear metoda dohvaća samo godinu

x = y.getFullYear();

// getMonth dohvaća samo mjesec

x = y.getMonth() + 1;

// getDay ako želimo dan - dan kreće od nedjelje (nedjelja je 0, a subota je 6)

x = y.getDay();

// getHours nam daje sat

x = y.getHours();

// getMinutes daje minute

x = y.getMinutes();

// getSeconds daje sekunde

x = Intl.DateTimeFormat("hr-HR").format(y);

console.log(x);
