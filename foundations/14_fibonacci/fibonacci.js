const fibonacci = function (number) {
  if (number < 0) {
    return "OOPS";
  }
  let arr = [0, 1];
  for (let i = 0; i < number; i++) {
    arr.push(arr[i] + arr[i + 1]);
    console.log(arr);
  }
  return arr[number];
};

// Do not edit below this line
module.exports = fibonacci;
