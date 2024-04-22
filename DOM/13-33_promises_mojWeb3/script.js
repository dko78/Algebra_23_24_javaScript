"use strict";

//PROMISES COLORCODE 2

function fun1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("404");
    }, 100);
  });
}

function fun2() {
  console.log("ovo je fun2");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("😀");
    }, 100);
  });
}

function onSuccess(data) {
  console.log(`Success: ${data}`);
}

function onError(errorCode) {
  console.log(`ERROR: ${errorCode}`);
}

function onFinally() {
  console.log("Finnaly");
}

//ako fun1 je reject ne zove se fun2 nego ide catch,
//ako bilo koja funckija fail u lancu ide na CATCH, fun2 se ne izvršava

fun1().then(fun2).then(onSuccess).catch(onError).finally(onFinally);

//drugačije je ako imaš u then drugi parametar

//fun1().then(fun2, onError).then(onSuccess); //ako prva ne prođe ne prekida izvođenje već ide na drugu
