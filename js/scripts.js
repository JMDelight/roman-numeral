var numerals = ["M", "D", "C", "L", "X", "V", "I"]
var numbers = ["1000", "500", "100", "50", "10", "5", "1"]


var convertor = function(number) {
  var num = number + 10000;
  var result = "";
  var numberString = num.toString();
  var numberArray = numberString.split("");
  var workingNumber = parseInt(numberArray[1]);
  for (i = workingNumber; i > 0; i -- ) {
    result = result + "M";
  };
  return result;
};
