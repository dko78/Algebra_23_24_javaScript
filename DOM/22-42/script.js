"use strict";

import { kosarica, dodajKosarica } from "./cart.js";

dodajKosarica("juha", 5);
dodajKosarica("kruh", 1);

console.log(kosarica); // ako u chart maknes export let kosarica ovo ti neće raditi,
//iako se koristi u dodajKosarica ovdje
