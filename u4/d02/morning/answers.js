// ###Pet Version 1.0
// Create of the pet Object
var pet = {
  hungry: false,
  sick: false,
  age: 0,
  activity: 10,
  feed: function () {
    if (this.hungry === true) {
      console.log ('That was yummy!');
      this.hungry = false;
    } else {
    console.log ('No thanks, I\'m full.');
      this.hungry = true;
    }
  },
  medicate: function () {
    if (this.sick === true) {
      console.log ("I feel much better - hope that vet visit didn't break the bank!")
      this.sick = false;
    } else {
      console.log ('No thanks, I feel fine.');
      this.sick = true;
    }
  },
  increaseAge: function () {
    this.age += 1;
    this.activity -= 1;
    console.log ("Happy Birthday to me! I am " + this.age + "years old and my activity level is " +  this.activity + "!");
  },
};

// Create Pet Class
class Pet {
  constructor( name ){
    this.name = name,
    this.hungry = false,
    this.sick = false,
    this.age = 0,
    this.activity = 10
  }
  feed () {
      if (this.hungry === true) {
        console.log ('That was yummy!');
         this.hungry = false;
      } else {
      console.log ('No thanks, I\'m full.');
         this.hungry = true;
      }
    }
    medicate () {
      if (this.sick === true) {
        console.log ('I feel much better!');
        this.sick = false;
      } else {
        console.log ('No thanks, I feel fine.');
        this.sick = true;
      }
      }
    increaseAge () {
      this.age += 1;
      this.activity -= 1;
      console.log (`Happy Birthday to me! I am ${this.age} years old and my activity level is ${this.activity}!`);
    }
}

class Dog extends Pet {
  constructor(options){
    super(options);
  }
  bark () {
    console.log ('ruff Ruff RUFF');
  }
  goOutside () {
    console.log ('I own that tree now!');
  }
}

class Cat extends Pet {
  constructor(options){
    super(options);
  }
    meow () {
    console.log ('mmmmmeeeeow');
  }
  useLitterBox () {
    console.log ('Burrrried treasure!');
  }
}

class Fish extends Pet {
  constructor (options){
    super (options);
  }
  swim () {
    console.log('Just keep swimming...');
  }
}

// instances and application
let swimmer = new Fish ("swimmer");
swimmer.swim();
swimmer.medicate();
swimmer.medicate();

let kitten = new Cat ("kitten");
kitten.useLitterBox();
kitten.meow();

let frank = new Dog("frank")
frank.feed();
frank.feed();
console.log(frank.hungry);
frank.increaseAge();
frank.increaseAge();
console.log(frank.age);
frank.goOutside();
frank.bark();
