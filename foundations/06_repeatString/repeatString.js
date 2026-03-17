const repeatString = function (string, number) {
  let output = "";
  if (number < 0) {
    return "ERROR";
  }
  for (let i = number; i > 0; i--) {
    output += string;
  }
  return output;
};

// Do not edit below this line
module.exports = repeatString;
