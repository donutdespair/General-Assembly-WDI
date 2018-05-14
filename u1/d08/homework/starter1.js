console.log('u01d09 hw starter.js linked');

//code goes here
//What should a user be able to do with the game?

/*When the mouse enters any of the zones change its background color to green
When the mouse leaves a zone change its background color back
When you click on a zone it locks its color to green. HINT: You probably need to
remove the hover event listeners, the this keyword we learned about might be helpful here! (mdn)
When all zones are checked green, log a statement of congratulations to the console!*/




//on mouse out, change color back
//onclick change color to green and lock
//use this and dot notation to turn off hover event listens for this event
//when all zones are green log congrats
//select area where zones live
//zones live in body -> div container -> child divs 1-4
//on mouseover or mouseenter - change color to green
//for loop to iterate over all zone divs
//will need to list for click, mouseover, mouseout
//can use .removeEventListener
//need to remove mouseout after click
//function that states if divs are green
//green
/*


var zone1 = document.getElementById("zone-1");

var addMo1 =  function() {
document.getElementById("zone-1").classList.add("green")
};
zone1.addEventListener("mouseover", addMo1)

var gtfo = function() {
  document.getElementById("zone-1").classList.remove("green")
};
zone1.addEventListener("mouseout", gtfo)


var addClick1 = zone1.addEventListener("click", function() {
document.getElementById("zone-1").classList.add("green");

zone1.removeEventListener("mouseout", gtfo);

});
*/

var zones = document.querySelectorAll('.zone');
var green = document.querySelectorAll('.green');
var counter = 0

for (var i = 0; i < zones.length; i++){
  //for loop iterates over all  values in var zones
  zones[i].onmouseover = function() {
    this.classList.add("green");
  }


zones[i].onmouseout = function() {
    this.classList.remove("green");
  }

  zones[i].onclick = function() {
    this.classList.add("green");
  }

  zones[i].onclick = function() {
    this.classList.add("green");
    this.onmouseover = function() {};
    this.onmouseout = function() {};
    counter +=1
      if(counter === 4){
        console.log("This game  is brought to you today by Soylent Red, and Soylent Yellow. And, new, delicious, Soylent Green: The \"miracle food\" of high energy plankton, gathered from the oceans of the world. Due to its enormous popularity, Soylent Green is in short supply, so remember—Tuesday is Soylent Green day.")
  };
}
};

//so i feel like since this was basically pasted in the .md file, we're maybe not suppossed to use it
//but i spent so long trying to get everything to work for one box that when i realized the answer was basically
//in the .md that i replaced all the hobbit variables and went will it. i don't think i can use .removeEventListeners
//with anonymous functions since i guess it needs a function to call on and apply to
//but it works. I tried to rewrite my original single box code to apply to everything but couldn't
//get it to work.




