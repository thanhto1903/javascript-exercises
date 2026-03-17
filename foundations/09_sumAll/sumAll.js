const sumAll = function (firstNumber, secondNumber) {
  let sum = 0;
  if (
    firstNumber < 0 ||
    secondNumber < 0 ||
    !Number.isInteger(firstNumber) ||
    !Number.isInteger(secondNumber) ||
    typeof firstNumber !== "number" ||
    typeof secondNumber !== "number"
  ) {
    return "ERROR";
  }
  if (firstNumber > secondNumber) {
    for (let i = secondNumber; i <= firstNumber; i++) {
      sum += i;
    }
  }
  for (let i = firstNumber; i <= secondNumber; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
