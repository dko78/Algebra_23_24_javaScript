console.log("gol 1");
console.log("gol 2");
console.log("gol 3");
console.log("gol 4");
console.log("gol 5");
console.log("gol 6");
console.log("gol 7");
console.log("gol 8");
console.log("gol 9");

for (let ponavljanje = 1; ponavljanje <= 10; ponavljanje++) {
  console.log(`gol ${ponavljanje}`);
}

// liste

const lista = [2, 5, 6];

console.log(lista.length);

lista.length = 0; //prazni listu

console.log(lista.length);

const prijatelji = ["ivan", "Luka", "Pero"];

const godine = new Array(28, 30, 18, 25, 13, 11, 6);

console.log(prijatelji, godine);

prijatelji[2] = "Stjepan"; //iako je const nepromjenjiov, mozes promijeniti.
//Const samo za primitivne tipove(broj, string) vrijediosti ne mozes promiejniti, objekt mozes.
//Objekt je vrsta memotije koju zovemo HEAP, primitivni je stack

/*
unshift - na početak liste
shift - mičeš 1.
push
Dodaje element na kraj niza
pop
Miče zadnji element niza
join
Pretvara sve elemente niza u konkatenirani string
reverse
Obrne redosljed elemenata u nizu
sort
Sortira elemente niza (default: po abecedi)
forEach (ES5)
Iterira kroz niz, pozivajući funkciju koju odredite za svaki element
map (ES5)
Prosljeđuje svaki element niza funkciji i vraća niz koji sadrži vrijednosti vraćene tom funkcijom
*/

prijatelji.unshift("Barbara"); //na početak liste

prijatelji.push("Maja"); //na kraj

prijatelji.shift(); //mičeš prvog člana

prijatelji.pop(); //mičeš zadnjeg člana

let x;
x = godine.includes(30); //da li određena lista iam određenu vrijednost, vraća boolean
x = godine.indexOf(30); //na kojemmjestu u listi se nalazi tražena vrijednost, ako se ne nalazi u listi onda -1

//slice
x = godine.slice(1); //izbacujem koliko članova od početka lista izbacuješ i rezultat je nova lista bez tih članova
x = godine.slice(2, 4); //od koje do koje ču izvuć i spremiti u novu listu

//splice-razbijam postojeću listu na 2 liste ,prvi parametar je index od kojeg člana liste krećem
//drugi parametar koliko članova liste uzimam i spermam u listu.
//članovi više nisu dio originalnog niza !!!

x = godine.splice(3, 1); //uzimam od 3 do 1 i makni ih iz lista godine!

console.log(godine, x); //
