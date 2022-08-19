const repeatString = function (string, num) {
  let givenString = "";
  if (num < 0) {
    return "ERROR";
  }

  while (num > 0) {
    givenString += string;
    num--;
  }
  return givenString;
};

// Do not edit below this line
module.exports = repeatString;
