//Part 1 - Objects

//1. Pangolins
//Given the following object:

/*var detectives = {
  mulder: {
    name: "Fox Mulder",
    actor: "David Duchovny",
    school: "Oxford",
    degree: "Pscychology"
  },
  scully: {
    name: "Dana Scully",
    actor: "Gillian Anderson",
    school: "University of Maryland",
    degree: "Physics"
  }
};

console.log(detectives.scully.name);
//Use dot notation to console.log Scully's full name.

for (var prop in detectives.mulder) {
       console.log(detectives.mulder[prop]);
};
//Use a for..in loop to console.log each item in detectives.mulder
console.log(detectives.mulder.name + " and " + detectives.scully.name +
  ", played by " + detectives.mulder.actor + " and " + detectives.scully.actor +
  ", are detectives in the X-Files");
//Use dot notation and string concatenation to console.log the following output:
//Fox Mulder and Dana Scully, played by David Duchovny and Gillian Anderson,
//are detectives in the X-Files


//2. Reading List

var readingList = [
  {
    title: "REAMDE",
    author: "Neal Stephenson",
    alreadyRead: true
  },
  {
    title: "Handmaid's Tale",
    author: "Margaret Atwood",
    alreadyRead: true
  },
    {
    title: "Economics of the Undead",
    author: "Glen Whitman",
    alreadyRead: false
  }
];

//Use a for loop to iterate over the array, and dot notation to grab values from each object.
for (var i = 0; i < readingList.length; i++){
  //creates for loop that iterates through array
document.getElementById(Object.values("readingList"));
//grabs values from object
//console.log("\"" +  readingList[i].title + "\"" + " by " + readingList[i].author);}
//log the book title and book author

//Now use an if/else statement to change the output depending on whether you read it yet or not.
if (readingList[i].alreadyRead===true){
console.log("You already read " + "\"" +  readingList[i].title + "\"" + " by " + readingList[i].author + ".");
}
//If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a
//string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
else {
console.log("You still need to read " + "\"" +  readingList[i].title + "\"" + " by " + readingList[i].author + ".");
};};

//3. Movie Database
//Create an object to store the following information about your favorite movie: title (a string), director
//(a string), duration in minutes (a number), release year (a number), and stars (an array of strings).
var favMovie = {
  title: "Wiener-Dog",
  director: "Todd Solondz",
  duration: 88,
  releaseYear: 2016,
  stars: ["Greta Gerwig", "Keaton Nigel Cooke", "Tracy Letts", "Kieran Culkin", "Danny DeVito"]
};
//Create a function to print out the movie information
 var movieStats = function(favMovie) {
    var actors = null;
    var actorsPunc = null;
    for(var i = 0; i < favMovie.stars.length; i++){
         actors += favMovie.stars;
          for(var i = 0; i < favMovie.stars.length-1; i++){
         actorsPunc += actors + ",";
  //Your function should take in the movie object as an argument
  str = favMovie.title + ", " + "directed by " + favMovie.director + " and released in "
  + favMovie.releaseYear + ", " + "last for " + favMovie.duration + " minutes. " + "Stars: " ;
//Try creating a string using dot notation and string concatenation for the title, director, duration,
//and release year. Then iterate over the stars array using a for loop to add each star to your
//string followed by a comma.

     }
     return str + actors + "." ;
 };
};
 console.log(movieStats(favMovie));
 */


//Part Two - JS Events

/*4. getElementById

Javascript allows us to grab html elements by their id so we can have access to them in
our script.js file. The document.getElementById function will find html elements with the
id we pass in.*/

var subtitle = document.getElementById("subtitle");
//Add a variable called subtitle and set it equal to the html element with the id of "subtitle".
console.log(subtitle);
//Add console.log(subtitle) and reload the page.

//Event - onclick

/*Another Javascript event we can use in the browser is the click method. It will run a
function when a particular html element is clicked by the user.*/

//6. onclick

var clickListItem = document.getElementById( "clickListItem");
//Set a variable with the name "clickListItem" equal to
//document.getElementById() and pass in the id of "clickListItem"
clickListItem.onclick = function(){
  console.log("You have clicked the li with the text 'Click Me.'");
};
//Then set clickListItem.onclick equal to a function that console.logs
//"You have clicked the li with the text 'Click Me'"

//Event - mouseover

//Set a variable with the name hoverListItem equal to document.getElementById()
//and pass in an id of "hoverListItem"
var hoverListItem = document.getElementById( "hoverListItem");
//set ListItem.mouseover equal to a function that uses a console.log
//to tell the user "You have hovered over the li with the text 'Hover Over Me'"
hoverListItem.onmouseover = function(){
  console.log("You have hovered over the li with the text 'Hover Over Me.'");
};

//Event - Adding Elements!

//document.createElement() allows us to generate html elements using javascript
var clickMe = document.getElementById('clickListItem');
//add a message, "A message has been clicked" that appears on the screen
//when you click the "Click Me" element.
clickMe.onclick = function() {
var message = document.createElement("li");
message.setAttribute('id', 'message');
message.innerHTML = "A message has been clicked."
document.getElementById('clickListItem').appendChild(message);
 };

//onload

function load() {
        alert("alert boxes are kind of annoying");
      }
       window.onload = load;

//onscroll
window.onscroll = function () {
                alert("hey stop that");
            }






