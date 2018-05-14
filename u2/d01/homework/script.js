//Part 1 - .map()
//1)

/*The client isn't happy with the format of our data.
Let's grab the frontEnd array from the frameworks
JSON object and use map() to return a new array.
This array should be modified so that each framework's name will end in '.js'.
Save this array into a variable called 'modifiedFrontEnd' and print it to the console.*/
var modifiedFrontEnd = frameworks.frontEnd.map(function(framework){
  return (framework.name) + ".js";
});

console.log(modifiedFrontEnd)

//2)
/*The client is back! They were very pleased with the results of your previous work!
However, they need the same thing done to the backEnd array. Use map() to
return a new array so each framework's name ends in '.js'.
Save this array to a variable called 'modifiedBackEnd' and print it to the console.*/
var modifiedBackEnd = frameworks.backEnd.map(function(framework){
  return (framework.name) + ".js";
});

console.log(modifiedBackEnd)

//Part 2 - .filter()
//1)

/*Going back to our frameworks JSON object, let's use .filter() to create a
new array out of the frontEnd array. This new array should contain every
object whose description is more than 30 characters long.
store this new array as 'filteredFrontEnd' and print it to the console.*/

var filteredFrontEnd = frameworks.frontEnd.filter(function(framework){
  if(framework.description.length > 30){
    return (framework)
  }
});

console.log(filteredFrontEnd)

//2)
/*Once more, with .filter() let's make a new array from the backEnd array
in our frameworks JSON file. This array should contain every backEnd
framework whose name begins with a vowel.
store this new array as 'filteredBackEnd' and print it to the console*/

var filteredBackEnd = frameworks.backEnd.filter(function(framework){
  var firstVowel = framework.name[0]
  if(firstVowel.match(/[aeiou]/ig,'')){
    return (framework)
  }

});

console.log(filteredBackEnd)
