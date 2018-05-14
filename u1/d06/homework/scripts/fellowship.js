console.log("Linked.");

// Our heros
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

// Their compatriots
var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];


// Their journey
var lands = ['The Shire', 'Rivendell', 'Mordor'];

// An example of using query selector
var body = document.querySelector('body');

// Part 1
 var makeMiddleEarth = function(){
      // assign id to section
      body.innerHTML += "<section>"
      middleEarth = document.querySelector("section");
      body.appendChild(middleEarth);
      // add section to body
      //appendChild - https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
   for (var i = 0; i < lands.length; i++) {
      var article = document.createElement("article'");
      // add each land as an article tag
      //creating new nodes - http://christianheilmann.com/stuff/JavaScript-DOM-Cheatsheet.pdf
      article.innerHTML= "<h1>" + lands[i] + "</h1>";
      // inside each article tag include an h1 with the name of each land(unsure how to do this)
      middleEarth.appendChild(article);
      // append middle-earth to your document body
   };
 };
 makeMiddleEarth();


 // Part 2
 var makeHobbits = function() {
    var theShire = document.querySelectorAll("article")[0]
    //select shire
    var hobbitList = document.createElement("ul");
    // display an unordered list of hobbits in the shire
    theShire.appendChild(hobbitList);
    // adds hobbits to shire
    for (var i = 0; i < hobbits.length; i++){
    var hobbitListItem = document.createElement('li');
    hobbitListItem.class = "hobbits";
    // give each hobbit a class of hobbit
     hobbitListItem.innerHTML +="<li>"+hobbits[i]+"</li>"
     //prints hobbits to shire
     hobbitList.appendChild(hobbitListItem);
   };
 };
 makeHobbits();






