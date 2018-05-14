$(document).ready(function() {
  console.log('script loaded');

  // json data
var data =  {
  	"people": [
      {
    		"name": "Luke Skywalker",
    		"height": "172",
    		"mass": "77",
    		"hair_color": "blond",
    		"skin_color": "fair",
    		"eye_color": "blue",
    		"birth_year": "19BBY",
    		"gender": "male"
    	}, {
    		"name": "C-3PO",
    		"height": "167",
    		"mass": "75",
    		"hair_color": "n/a",
    		"skin_color": "gold",
    		"eye_color": "yellow",
    		"birth_year": "112BBY",
    		"gender": "oh my"
    	}, {
    		"name": "R2-D2",
    		"height": "96",
    		"mass": "32",
    		"hair_color": "n/a",
    		"skin_color": "white, blue",
    		"eye_color": "red",
    		"birth_year": "33BBY",
    		"gender": "beep boop"
    	}, {
    		"name": "Darth Vader",
    		"height": "202",
    		"mass": "136",
    		"hair_color": "none",
    		"skin_color": "white",
    		"eye_color": "yellow",
    		"birth_year": "41.9BBY",
    		"gender": "male"
    	}, {
    		"name": "Leia Organa",
    		"height": "150",
    		"mass": "49",
    		"hair_color": "brown",
    		"skin_color": "light",
    		"eye_color": "brown",
    		"birth_year": "19BBY",
    		"gender": "female"
  	}]
} // ends var data


  // your work here
//Write a function that console.logs the data json object
var logData = function() {
  console.log(data)
};
//logData()

//Write a function that console.logs each character's name
var logNames = function() {
Object.keys(data.people).forEach(function (key) {
  console.log(data.people[key]['name'])
  })
};
//logNames()
//data.people.forEach(function(person){
//  console.log(person.name)
//}

//Write a function that console.logs each character's name and eye color
var logNameEyes = function() {
Object.keys(data.people).forEach(function (key) {
  console.log(data.people[key]['name'], data.people[key]['eye_color'])
  })
};
//logNameEyes()

//for (var i = o; i < data.people.length; i++){
//  console.log(data.people[i].name + data.people[i].eye_color)
//}

//data.people.forEach(function(person){
//  console.log(person.name + person.eye_color)
//}


//Write a function that console.logs each character's name whose mass is greater than 75
var logByMass = function() {
data.people.map(function(person){
  if (person.mass > 75){
    console.log(person.name)
    }
  })
};
//logByMass()

var heavies = data.people.filter(function(person){
  if (person.mass > 75){
    return person;
  }
});
console.log(heavies)


//Grab each character's name and use jQuery to append a new p tag with the character's name inside the #characters div.
var appendCharacterNames = function() {
  data.people.map(function(person) {
   $('#characters').append('<p>'+ person.name + '</p>')
  })
};

//Grab each character's name whose mass is greater than 75, use jQuery to append a new p tag with their name inside the #characters div, and update the text of the #title h1 tag to be "Mass > 75"
var appendByMass = function() {

var appendByMass = function() {
  data.people.map(function(person){
    if(person.mass > 75){
        $('#characters').append('<p>'+ person.name+'</p>')
    }
  $('#title').text('Mass > 75');
  })
};

$(document).ready(function(){
//appendCharacterNames()
//appendByMass();



}); // ends document ready
