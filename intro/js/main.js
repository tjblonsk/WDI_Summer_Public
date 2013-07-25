// alert("hey girl");

// var name = prompt("what is your name?");
// var age = parseInt(prompt("what is your age?"));
// console.log("you entered " + name);

// if (age > 18) {
//   console.log("you are an adult");
// } else if ( age < 10 ) {
//   console.log("you are a baby");
// } else {
//   console.log("you are a teenager");
// }


// while (age < 100) {
//   console.log("you are alive");
//   debugger;
//   age++;
// }

// do {
//   age = prompt("how old are you?")
//   console.log("you are alive")
// } while ( age < 100)

// prompt the user to (a)dd, (s)ubstract, (m)ultiply, (d)ivide or (h)istory, (q)uit
// store each number entered into a history array.
// take two numbers and perform the operation


var msg = "(a)dd, (s)ubstract, (m)ultiply, (d)ivide or (q)uit";

var choice = prompt(msg);
var numbers = [];

while (choice != 'q') {
  var firstNumber = parseInt(prompt("pick a number"));
  var secondNumber = parseInt(prompt("pick a number"));
  numbers.push(firstNumber);
  numbers.push(secondNumber);
  switch (choice) {
    case 'a':
    console.log(firstNumber + secondNumber);
    break;
    case 's':
    console.log( firstNumber - secondNumber);
    break;
    case 'm':
    console.log( firstNumber * secondNumber);
    break;
    case 'd':
    console.log( firstNumber / secondNumber);
    break;
    case 'h':
    for (var i = 0; i < numbers.length; i++){
      console.log(numbers[i]);
    }
    break;
    default:
    console.log("not a valid option");
  }
  choice = prompt(msg);
}
console.log("exit");







