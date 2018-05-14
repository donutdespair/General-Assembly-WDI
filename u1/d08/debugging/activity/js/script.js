(function(){

console.log("script loaded");

var userName = prompt("What is your name?");
var cat_count = prompt("How many cats do you want? (Maximum: 3)");



for(i = 1; i <= cat_count; i++){
  var new_cat = document.createElement("div");
  new_cat.className = "cat";
  new_cat.className += " cat-" + i;
//new_cat.className = new_cat.className + " cat-" + i;
  var container = document.querySelector('#cat_container')
  container.appendChild(new_cat);
}

})();

//add document.createElement
//add document.querySelector
//change  var container = document.querySelector('#cat_container')
//cat divs have no style, check CSS, use class to display divs
//change to  new_cat.className += " cat-" + i; (don't forget space)
//debugger; pauses code

/*
(function(){

console.log("script loaded");

var userName = prompt("What is your name?");
var cat_count = prompt("How many cats do you want? (Maximum: 3)");


for(i = 0; i <= cat_count; i++){
  var new_cat = createElement("div");
  new_cat.className = "cat";
  new_cat.className = "cat-" + i;
  var container = querySelector('.cat_container')
  container.appendChild(new_cat);
}

*/



