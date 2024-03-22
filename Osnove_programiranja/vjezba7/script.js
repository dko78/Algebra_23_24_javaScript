console.log("gol 1");
console.log("gol 2");
console.log("gol 3");
console.log("gol 4");
console.log("gol 5");
console.log("gol 6");
console.log("gol 7");
console.log("gol 8");
console.log("gol 9");
console.log("gol 10");

for (let ponavljanje = 1; ponavljanje <= 10; ponavljanje++) {
  console.log(`gol ${ponavljanje}`);
}

const lista = ["stol", "stolica", "stoljnak", "vaza"];

for (let i = 0; i < lista.length; i++) {
  console.log(lista[i]);
}

// Lista / niz / array - objektni tip podatka

const prijatelj1 = "Luka";
const prijatelj2 = "Ivan";
const prijatelj3 = "Hrvoje";

const prijatelji = ["Luka", "Ivan", "Hrvoje"];

/* Ovako redefiniranje vrijednosti nije moguće kao ni kod primitivnih vrijednosti jer to povlači izmjene u memoriji gdje se to ne smije:

const prijatelji = ["nova lista"];
prijatelji = ["još novija lista"]; */

console.log(prijatelji[0]);
console.log(prijatelji.length);
console.log(prijatelji[prijatelji.length - 1]);

prijatelji[2] = "Stjepan";
console.log(prijatelji);

/* Vrijednost const varijable se ne može mijenjati na primitivnim vrijednostima. Lista nije primitivna vrijednost, stoga možemo
s obzirom da se zapisuje u drugu vrstu memorije mijenjati njezine vrijednosti. */

// jednostavne metode listi

prijatelji.unshift("Barbara"); // unshift metodom dodajemo novog člana na početak liste
prijatelji.push("Maja"); // push metodom dodajemo novog člana na kraj liste
prijatelji.shift(); // shift metodom mičemo prvog člana liste
prijatelji.pop(); // pop metoda miče zadnjeg člana liste
prijatelji.reverse(); // mijenjamo slijed liste

console.log(prijatelji);

// jednostavne metode na brojevnim listama

const godine = new Array(24, 28, 32, 36, 42, 58);

let x;

x = godine.includes(28); // provjera da li u listi imamo određenu vrijednost, vraća Boolean vrijednost
x = godine.indexOf(28); // provjera gdje se u listi nalazi tražena vrijednost
x = godine.indexOf(26); // ako stavimo u provjeru vrijednost koja se ne nalazi na listi dobit ćemo -1
//u slice metodi definiramo jednim brojem metodu, onda definiramo koliko članova s početka liste mičemo i spremamo novu listu bez tih članova.
x = godine.slice(1);
// u slice metodom češće iz postojeće liste definiramo koje članove liste (od / do) želimo izvući i spremiti u novu listu.
x = godine.slice(1, 5);
/* splice metodom razbijam postojeću listu na 2 liste, na način da kao prvi parametar definiram od kojeg člana liste krećem. A drugi parametar
definira koliko članova liste uzimam i spremam u novu listu. Članovi automatski prestaju biti članovi originalne liste. */
x = godine.splice(4, 2);

console.log(godine, x);
