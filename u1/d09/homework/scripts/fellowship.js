console.log("followship.js loaded");



// An example of using setTimeout to call makeMiddleEarth after 2 seconds.
setTimeout(makeMiddleEarth, 2000)

var makeMiddleEarth = function() {
  var $body = $("body");
  var $middleEarth = $('body').append("<section id = 'middle-earth'></section>")
  // Create a section tag with an id of middle-earth

var $theShire = $('section').append("<article id = 'the-shire'></article>")
var $rivendell = $('section').append("<article id = 'rivendell'></article>")
var $mordor = $('section').append("<article id = 'mordor'></article>")
  // Create an article tag for each land in the lands array in characters.js
var $lands = $("article").attr("classname","lands")
  // Give each article tag a class of "land"
var $theShire= $("article")[0]
$($theShire).append("<h1>The Shire</h1>")
var $rivendell= $("article")[1]
$($rivendell).append("<h1>Rivendell</h1>")
var $mordor= $("article")[2]
$($mordor).append("<h1>Mordor</h1>")
  // Inside each article tag include an h1 with the name of the land

  // Append each article.land to section#middle-earth - did this when I created the lands
  // Append section#middle-earth to the document body - did this when I created Middle Earth
  // Use setTimeout to delay the execution of the next function (in this case,
  // makeHobbits) by several seconds

}


makeMiddleEarth()


var makeHobbits = function() {
var $hobbitHome = $("article")[0]

$($hobbitHome).append("<ul id='hobbits'></ul>")
 var $hobbitUl = $("ul")

for(i=0; i<hobbits.length; i++){
$("#hobbits")
.append('<li  class="hobbit" id="'+hobbits[i]+ '">' + hobbits[i] + '</li>')
    }
  // Create a ul with an id of "hobbits"
  //omg i did it i wrote this loop and it works perefectly and this is one of the greatest days of my life

  // Create li tags for each Hobbit in the hobbits array in characters.js
  // Give each li tag a class of "hobbit"
  // Set the text of each li.hobbit to one of the Hobbits in the array
  // Append the ul#hobbits to the article.land representing "The Shire"
  // (the first article tag on the page)
  }
makeHobbits()
//setTimeout(makeHobbits, 5000)
//this is literally forever
var keepItSecretKeepItSafe = function() {
    var $theRing = $("<div />")
    .attr("id","the-ring")
    .addClass("magic-imbued-jewelry");
     $("ul li:eq(0)").append($theRing)
     .click(nazgulScreech)
  //http://stackoverflow.com/questions/12032521/how-to-append-a-listitem-in-first-position-of-list-using-jquery

  // Create a div with an id of 'the-ring'
  // Give div#the-ring a class of 'magic-imbued-jewelry'
  // Add an event listener so that when a user clicks on the ring,
  // The nazgulScreech function (provided in index.html) is invoked
  // look up .click() - https://api.jquery.com/click/ in the jQuery docs to see how this works
  // it'll look like target.click(nazgulScreech)
  // bit of a freebie since we're not covering events until tomorrow
  // Add div#the-ring as a child element of the li.hobbit representing "Frodo"
  // Use setTimeout to delay the execution of the next function
}

keepItSecretKeepItSafe()


var makeBuddies = function() {
var $buds = $("article:eq(1)").append("<aside />")
$("article:nth-child(2) > aside").append('<ul id = "buddies" />')

var $budsUl = $("<ul />")

for(i=0; i<buddies.length; i++){
$("#buddies")
.append('<li  class="buddy" id="'+buddies[i]+ '">' + buddies[i] + '</li>')

    }

  // Create an aside tag
  // Create a ul tag with an id of "buddies" and append it to the aside tag
  // Create li tags for each buddy in the buddies array in characters.js
  // give each li tag a class of "buddy" and append them to "ul#buddies"
  // Insert the aside tag as a child element of the section.land representing "Rivendell"
  // Use setTimeout to delay the execution of the next function
}
makeBuddies()



var beautifulStranger = function() {
  $(".buddy:nth-child(4)").text("Aragorn").css("color", "green");
  // Find the li.buddy representing "Strider"
  // Change the "Strider" textnode to "Aragorn" and make its text green
  // Use setTimeout to delay the execution of the next function
}
beautifulStranger()



  var leaveTheShire = function() {
$("#hobbits").appendTo("article:nth-child(2)");
}
leaveTheShire()
  // Assemble the Hobbits and move them to Rivendell
  // Use setTimeout to delay the execution of the next function




var forgeTheFellowShip = function() {
  $("#rivendell").append($("<div id='the-fellowship'></div>"))

  for (var i=0; i < hobbits.length; i++) {
    alert(hobbits[i] + " has joined your party!")
  }
  for (var i=0; i < buddies.length; i++) {
    alert(buddies[i] + " has joined your party!")
}
}
forgeTheFellowShip()
  // Create a div with an id of 'the-fellowship' within the section.land for "Rivendell"
  // Add each hobbit and buddy one at a time to 'div#the-fellowship'
  // After each character is added make an alert that they have joined your party
  // Use setTimeout to delay the execution of the next function by several seconds


