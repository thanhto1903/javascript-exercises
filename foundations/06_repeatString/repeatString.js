const repeatString = function (string, number) {
  let output = "";
  for (let i = number; i > 0; i--) {
    if (i < 0) {
      return "ERROR";
    }
    output += string;
  }
  return output;
};

// Do not edit below this line
module.exports = repeatString;
