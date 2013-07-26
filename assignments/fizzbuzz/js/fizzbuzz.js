
var numbers = _.range(1,101);


_.map(numbers, function(number) {
  if (number % 15 == 0){
    console.log("FizzBuzz");
  }
  else if (number % 3 != 0 && number % 5 == 0) {
    console.log("Buzz");
  }
  else if (number % 3 == 0 && number % 5!= 0) {
    console.log("Fizz");
  }
  else {
    console.log(number);
  }
});


