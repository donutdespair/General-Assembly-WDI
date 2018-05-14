var greetings = {};

greetings.sayHello = function(person){
  console.log("Hello " + person + "!");
}

greetings.sayGoodbye = function(){
  console.log("Good bye");
}


module.exports = greetings;
