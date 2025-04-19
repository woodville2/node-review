"use strict";

export function greet(name) {
  return "howdy," + name;
}


import _ from "lodash";

export function repeatfavoriteCar(brand, count = 10) {
  const trimmedBrand = _.trim(brand);
  return _.repeat(` ${trimmedBrand}  is my favorite car `, count);
}

