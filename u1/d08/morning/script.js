var carson = {};
//Create an empty object literal
carson.firstName = "Carson";
carson.lastName = "Hyde";
carson.age = 30;
/*Use dot notation to add the following information to your object:
firstName (string)
lastName (string)
age (integer)*/
carson.hobbies =  ["Biking", "Cooking", "Reading"]
/*Add another key value pair to your object, where the key is hobbies
and the value is an array of strings.*/

//var printName = function(carson){
//  console.log(carson.firstName + " " + carson.lastName);
//};

carson.printName = function() {
return this.firstName + " " + this.lastName;
}

//carson.printName = function() {
//console.log(this.firstName + " " + this.lastName);
//}
/*Write a function that will print your first and last name to the console.
This function should accept your object as an argument.

Now use dot notation to make that function into a method that belongs to your
About Me object with the key printName. Don't forget to use the this keyword to
access information inside of the object! */
//carson.printName()
//invokes function

/*Add another method to your object that prints a single string
(including your first name, last name, and all of your hobbies) to the console.*/

carson.printData = function () {
str = "Hi my name is" + this.printName() +
  " my hobbies include "; + str
  for (i = 0; i < this.hobbies.length; i++) {
    str += this.hobbies[i] + ",";
  }
  console.log(str);
}
  carson.printData()
