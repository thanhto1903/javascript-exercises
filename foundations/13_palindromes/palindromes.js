const palindromes = function (string) {
  const clean = string.toLowerCase().replace(/[," ".!]/g, "");
  const reversed = clean.split("").reverse().join("");
  if (clean === reversed) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
