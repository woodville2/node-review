"use strict";
import { input } from "@inquirer/prompts";

export function greet(name) {
  return "howdy," + name;
}

export function sum(a, b) {
  return a * b;
}

export async function askName() {
  const answer = await input({ message: 'Enter your name' });
   
  return answer;
}

//import _ from "lodash";

//export function repeatfavoriteCar(brand, count = 10) {
// const trimmedBrand = _.trim(brand);
// return _.repeat(` ${trimmedBrand}  is my favorite car `, count);
//}//
