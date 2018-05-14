//1. Pangolins

//Given the following object:

var detectives = {
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

//Use dot notation to console.log Scully's full name.
//Use a for..in loop to console.log each item in detectives.mulder

//dot notation Dana Scully print to console
//console.log(detectives.scully.name)

//use a for..in loop to console.log each item in detectives.mulder
//print the entire array
//for( variable in object)
//    statement
 //for (var key in detectives) {
//var detectiveStats = detectives[key];
 //  for (var prop in detectiveStats) {
 //            console.log(detectiveStats[prop]);
//   }
//};
//Fox Mulder
//David Duchovny
//Oxford
//Pscychology
//Dana Scully
//Gillian Anderson
//University of Maryland
//Physics
//for (var prop in detectives.mulder) {
 // console.log(detectives.mulder[prop]);
//};

console.log(detectives.mulder.name + " and " + detectives.scully.name +
  ", played by " + detectives.mulder.actor + " and " + detectives.scully.actor +
  ", are detectives in the X-Files");
//Use dot notation and string concatenation to console.log the following output:
//Fox Mulder and Dana Scully, played by David Duchovny and Gillian Anderson, are detectives in the X-Files


//2. Reading List
//Use a for loop to iterate over the array, and dot notation to grab values from each object.
//Iterate through the array of books. For each book, log the book title and book author like so:
//"The Hobbit by J.R.R. Tolkien".



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
//console.log("\"" +  readingList[0].title + "\"" + " by " + readingList[0].author);
//console.log("\"" + readingList[1].title + "\"" +  " by " + readingList[1].author);
//console.log("\"" + readingList[2].title + "\"" + " by " + readingList[2].author);
//log the book title and book author


//Now use an if/else statement to change the output depending on whether you read it yet or not.
//If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a
//string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

if (readingList[i].alreadyRead===true){
console.log("You already read " + "\"" +  readingList[i].title + "\"" + " by " + readingList[i].author + ".");
}

else {
console.log("You still need to read " + "\"" +  readingList[i].title + "\"" + " by " + readingList[i].author + ".");
};};





Create an object to store the following information about your favorite movie: title (a string), director
(a string), duration in minutes (a number), release year (a number), and stars (an array of strings).

Your movie object should look something like:

var wienerDog = {
    title: "Wiener-Dog",
  director: "Todd Solondz",
  duration: 88,
  releaseYear: 2016,
  stars: ["Greta Gerwig", "Keaton Nigel Cooke", "Tracy Letts", "Kieran Culkin", "Danny DeVito"]
}

favMovie = Object.create(Object.prototype, {
  wienerDog: {
  title: "Wiener-Dog",
  director: "Todd Solondz",
  duration: 88,
  releaseYear: 2016,
  stars: ["Greta Gerwig", "Keaton Nigel Cooke", "Tracy Letts", "Kieran Culkin", "Danny DeVito"]
}
  }
}
/*Create a function to print out the movie information like so: Alien, directed by Ridley Scott and released in 1979, lasts for 117 minutes. Stars: Tom Skerritt, Sigourney Weaver, Veronica Cartwright, Harry Dean Stanton, John Hurt, Ian Holm, Yaphet Kotto,
Your function should take in the movie object as an argument
Try creating a string using dot notation and string concatenation for the title, director, duration, and release year. Then iterate over the stars array using a for loop to add each star to your string followed by a comma.
Look over the work from this morning's exercise if you have trouble creating this function */


