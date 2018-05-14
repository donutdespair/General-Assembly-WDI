//1. Create the Pre-ES6 pet object
function Pet (hungry = false, sick = false, age = 0, activity = 10){
  this.hungry = hungry,
  this.sick = sick,
  this.age = age,
  this.activity = activity
}

//Methods
//a) feed() - if hungry is true, return "That was yummy!" and set hungry to false.
//If hungry is false, return "No thanks, I'm full." and set hungry to true.
Pet.prototype.feed = function(){
  if (this.hungry === true){
    console.log ("That was yummy!");
  this.hungry = false;}
  else
    {
      console.log ("No thanks, I'm full.");
      this.hungry = true;}
}
var pet1 = new Pet

//2. Create the ES6 Pet class
Class Pet {
  constructor ({name}) {
    this.name = name,
    this.hungry = false,
    this.sick = false,
    this.age = 0,
    this.activity = 10
}
//3. Create Dog, Cat, and Fish classes that inherit from the Pet class

//4. Create a new instance of the Dog, Cat, and Fish Class

//5. Run the following commands on the instances created in 4:

//  Feed the dog twice, then check it's hunger.

//  Increase the dog's age twice, then check how old it is.

//  Make the dog bark.

//  Make the dog go outside.

//  Make the cat meow.

//  Make the cat use the litter box.

//  Give the fish medicine twice, then check it's health.

//  Make the fish swim.
