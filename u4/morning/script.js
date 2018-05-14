// 1 Write function that takes an array of numbers as argument and returns
// a new array with only the odd numbers
var numbers = [1,2,3,4,5];

function oddNumbers(array) {
  return array.filter(function(number){
    return number % 2 !== 0;
  });
}

oddNumbers(numbers)
// 2 Write a function that takes an object as an argument and returns
// a new object with only values greater than 10 characters in length
var bagelBites = {
  bagel: "bites",
  pizza: "in the morning, in the evening, at supper time",
  when: "pizza is on a bagel",
  you: "can eat pizza anytime"
};

function findGreaterThanTen (object){
  newObject = {};
  for (key in object) {
    if (object[key].length > 10){
      newObject[key] = object[key];
    }
  }
  return newObject
}

console.log(findGreaterThanTen(bagelBites))

// 3 Create an function that returns a random number from the number's array
// and uses that number to print each key and value from the bagelBites object
// that number of times
var numbers = [1,2,3,4,5];
var bagelBites = {
  bagel: "bites",
  pizza: "in the morning, in the evening, at supper time",
  when: "pizza is on a bagel",
  you: "can eat pizza anytime"
};


function randomPrint(){
  var randomNum = this.numbers[Math.floor(Math.random() * this.numbers.length + 1)];
  console.log(randomNum)
  while(randomNum > 0){
    for (var key in this.bagelBites){
      console.log(key + ": " + this.bagelBites[key]);
    }
    randomNum --
  }
}

randomPrint()

// 4 Create an object called "bagelBitesWorld". This object should contain the
// numbers array, the bagelBites object, and the function you created in number 3
var numbers = [1,2,3,4,5];
var bagelBites = {
  bagel: "bites",
  pizza: "in the morning, in the evening, at supper time",
  when: "pizza is on a bagel",
  you: "can eat pizza anytime"
};

var bagelBitesWorld = {
  numbers: numbers,
  bagelBites: bagelBites,
  randomPrint: function(){
      var randomNum = this.numbers[Math.floor(Math.random() * this.numbers.length + 1)];
  while(randomNum > 0){
    for (var key in this.bagelBites){
      console.log(key + ": " + this.bagelBites[key]);
  }
  randomNum --
    }
  }
}

// 5 Write a constructor function which can make instances of a bagelBite. This constructor
// function should take in a type (pepperoni, cheese, sausage, etc) as an argument when
// creating a new bagelBite. Add the numbers array to this constructor and make each method you made
// in #4 a prototype method.
var numbers = [1,2,3,4,5];
var bagelBites = {
  bagel: "bites",
  pizza: "in the morning, in the evening, at supper time",
  when: "pizza is on a bagel",
  you: "can eat pizza anytime"
};

function bagelBite (type){
  this.type = type;
  this.numbers = numbers;
  this.bagelBites = bagelBites
}

bagelBite.prototype.printBites = function(){
  var randomNum = this.numbers[Math.floor(Math.random() * this.numbers.length + 1)];
  while(randomNum > 0){
    for (key in object)
      console.log(key + ": " + this.bagelBites[key]);
}
  randomNum --
  }
bagelBite1 = new bagelBite("pepperoni");
bagelBite2 = new bagelBite("cheese");
