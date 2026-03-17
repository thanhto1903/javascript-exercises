const removeFromArray = function (array, ...itemToRemove) {
  for (let i = array.length - 1; i >= 0; i--) {
    for (const item of itemToRemove) {
      if (item === array[i]) {
        array.splice(i, 1);
      }
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
