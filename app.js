"use strict";

import { greet } from "./utils.js";
import { sum } from "./utils.js";
import { askName } from "./utils.js";



 const name = await askName();
console.log(greet(name));

console.log(sum(5, 10));
