"use strict";

const lbl1 = document.querySelector(".lbl1");
const edt1 = document.querySelector(".edt1");
const btn1 = document.querySelector(".btn1");

/*
edt1.addEventListener("input", (e) => {
  let unos;
  unos = e.target.value;
  console.log(tekstSaPlusevima(unos));
  lbl1.textContent = tekstSaPlusevima(unos);
});
*/
btn1.addEventListener("click", (e) => {
  lbl1.textContent = tekstSaPlusevima(edt1.value);
  edt1.value = "";
});

//lbl1.textContent = tekstSaPlusevima(unos);

function tekstSaPlusevima(tekst) {
  let lista = [];
  if (tekst.indexOf(" ") > -1) {
    lista = tekst.split(" ");
    //(lista.toString()) => vrati polja sa zarezima sada trebaš zamijeniti zareze za pravzna mjesta
    lista = lista.toString().replaceAll(",", "+").trim();
  } else {
    lista = tekst.trim();
  }
  //   //result = tekst.substr(tekst[0], tekst.indexOf(" "));
  /*
    let text = "a,b,c,d,e,f";
    const myArray = text.split(",");
    document.getElementById("demo").innerHTML = myArray[0];
  */
  return lista;
}

