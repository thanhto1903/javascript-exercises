const add = function (firstNo, secondNo) {
  return firstNo + secondNo;
};

const subtract = function (firstNo, secondNo) {
  return firstNo - secondNo;
};

const sum = function (arr) {
  return arr.reduce((a, b) => a + b, 0);
};

const multiply = function (arr) {
  return arr.reduce((a, b) => a * b, 1);
};

const power = function (base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
};

const factorial = function () {};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
