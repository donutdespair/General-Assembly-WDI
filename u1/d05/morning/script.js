var counter = 1;
while (counter < 10) {
  console.log(counter + " is 1 number closer to 10");
  counter++;
}
// while loop: while the var counter is < 10, the loop increments by
// 1 and adds string
// 1 is 1 number closer to 10
// 2 is 1 number closer to 10
// 3 is 1 number closer to 10
// 4 is 1 number closer to 10
// 5 is 1 number closer to 10
// 6 is 1 number closer to 10
// 7 is 1 number closer to 10
// 8 is 1 number closer to 10
// 9 is 1 number closer to 10


for (var i = 0; i < 5; i++){
  // just increment i
}

function numberLogger() {
  var i = 4; // can only be accessed by this function
  console.log(i);
}

// console.log(i);
// numberLogger();
// console.log(i);
// 5
// 4
// 5

// for loop: i increments as long as < 5
// function prints var i which is assigned 4
// console.log(i); prints the index of i (assigned integer 4) which
// is 5 since index starts at 0
//  numberLogger(); prints var i (assigned 4)

var sayGoodbye = function() {
  console.log("Goodbye");
}
// this is an anonymous function because as declared without any
// named identifier to refer to it. an anonymous function is usually
// not accessible after its initial creation.
// also called functional expressions


// what is the difference between an argument and a parameter
// in a js function?

// the terms parameter and argument are often used interchangeably,
// because the context usually makes it clear what the intended meaning is.
// the following is a rule of thumb for distinguishing them:

// parameters are used to define a function. they are also called
// formal parameters and formal arguments. in the following
// example, param1 and param2 are parameters:
// function foo(param1, param2) {
//    ...
// }
// arguments are used to invoke a function. they are also called
// actual parameters and actual arguments. in the following
// example, 3 and 7 are arguments:
// foo(3, 7);
// http://speakingjs.com/es5/ch15.html
// function has parameters and it takes arguments

var words = ["hello", "what", "is", "up", "dude"];

// creates array

var lengthFinder = function(collection) // parameter
 {
  return "The length is " + collection.length;
};

// returns string + length of the array (number of items in it)

var arrayReverse = function(collection) {
  return collection.reverse();
};

// reveres the order of the values in the array

var arrayJoiner = function(collection) {
  return "If the array was a single string, it would look like '" + collection.join(" ") + "'!";
};

// joins the values of the array with a space between each
// array becomes one string
// adds string to beginning and end (concatenates)

console.log(lengthFinder(words)); // argument
// prints number of values in array
console.log(arrayReverse(words));
// reverses order of values in array
console.log(arrayJoiner(words));
// joins the values of the array with a space between each
// adds string to beginning and end (concatenates)

//  The length is 5
// ["hello", "what", "is", "up", "dude"]
// If the array was a single string, it would look like 'hello what is up dude'!


// Using prompt and alert how would you ask the user for their name, and
// respond with it in all caps?
var input = prompt("What's your name?");
// user input is stored here
alert(input.toUpperCase());
// alert returns name in uppercase

//Now try using an anonymous function to handle the login of the previous problem.
var response = function(statement){
    return statement.toUpperCase();
};

var input = prompt("What's your name?");
alert(response(input));

// let vs var:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
// scope
// http://hangar.runway7.net/javascript/guide


var question = prompt("Mathmatical equation? (put a space between each value)")

var n1 = parseInt(question.split (" ")[0]);
var n2 = parseInt(question.split (" ")[2]);
var operator = question.split(" ")[1];


var getSol = function () {
if (operator === '*')
 return n1*n2;
else if (operator === '/')
 return n1/n2;
else if (operator === '+')
 return n1+n2;
else if (operator === '-')
 return n1-n2;
};

alert(getSol());


// from notes on control flow

var numbers = [1,2,3,4];

for (var i = 0; i < numbers.length; i++)
numbers[i] = numbers[i].toString();

var counter = 4;
while (counter < 3) {
  console.log("not yet");
}
console.log("more than 3 is " + counter);
// be careful, if var counter is less than 3, infinite loop of fucked


var jsParadigms = {
  functional: "yes",
  objectOriented: "yes",
  procedural: "yes",
  classicalInheritance: "no"
}

for (var property in jsParadigms) {
  jsParadigms[property] + "!";
}

// higher order functions
// http://eloquentjavascript.net/05_higher_order.html
var numbers = [1,2,3,4,5];

var total = numbers.reduce(function(prev, current){
  console.log("current: " + current, "previous: " + prev)
  return prev += current;
}, 10);

console.log(total)



// Use forEach to take an array of numbers and console log each number
var nums = [1,2,3,4,5];
nums.forEach(function(n) {
    console.log(n);
});

// Use map to take the array of numbers and create a new array with each
// number doubled
var doubled = nums.map(function(n){
  return n * 2;
});
 console.log(doubled)



// Use filter to take an array of numbers and create a new array with only the
// numbers which are divisible by 3
var nums = [1,2,3,4,5];

var divByThree = nums.filter(function(n){
  return n % 3 ===0;
})
console.log(divByThree)

// Use reduce to take an array of numbers and add them together
var nums = [1,2,3,4,5];

var total = nums.reduce(function(prev, curr){
  return prev += curr;
}, 5);
console.log(total)

// this =20 because you start at 5


