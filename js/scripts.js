var numerals = ["M", "C", "X", "I", "D", "L", "V"];

var convertor = function(number) {
  var num = number + 10000;
  var result = "";
  var numberString = num.toString();
  var numberArray = numberString.split("");
  for(i=1; i<=4; i++) {
    var workingNumber = parseInt(numberArray[i]);
    if (workingNumber === 9) {
      result = result + numerals[i - 1] + numerals[i - 2];
      workingNumber-= 9;
    } else if (workingNumber === 4) {
      result = result + numerals[i - 1] + numerals[i + 2];
      workingNumber -= 4;
    } else {
      while (workingNumber >= 5) {
        result = result + numerals[i + 2];
        workingNumber -= 5;
      };
      for (index = workingNumber; index > 0; index -- ) {
        result = result + numerals[i - 1];
      };
    }
  };
  return result;
};

$(document).ready(function() {
  $(".roman-form").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#user-input").val());
    var output = convertor(userInput);
    $("#result").text(output);
  });
});
