console.log("Page Loaded");

$(document).ready(function(){
// Students! Write your playful jQuery code here!

// 2. Query the DOM for the h1 and store it in a sensibly named variable.
var $laInhabitants = $( "h1" )
//to get -> $( "h1" ).get( 0 )
// 3. Change the heading's text so that it reads "Inhabitants of Los Angeles (1984)".
//$laInhabitants.append("Inhabitants of Los Angeles (1984)")
$laInhabitants.text("Inhabitants of Los Angeles (1984)") //->better
// 4. Query the DOM for any list items with the class of cop, and store the elements in a variable called cops.
//var $cop = $( "li" ).filter( ".cop" )
var $cop = $("li.cop")
//to get->$( "li" ).filter( ".cop" )
// 5. Make all the cops' names the color of lightskyblue.
$($cop).css('color', 'lightskyblue')
// 6. Create a div with the class of terminator, and append it to the div with the id of los-angeles.
$("#los-angeles").append($("<div class='terminator'></div>"))
//$( "div" ).filter( ".terminator" ) ->to see that it exists
// 7. Query the DOM for the element with id of the-one-true-sarah-connor, and save it in a variable called theOneTrueSarahConnor.
var $theOneTrueSarahConnor = $( "#the-one-true-sarah-connor" )
//$( "li" ).filter( "#the-one-true-sarah-connor" )
// 8. Give theOneTrueSarahConnor the class of badass.
$($theOneTrueSarahConnor).addClass("badass")
// 9. Query the DOM for all elements that have the class collateral-damage, and save the elements in a variable called poorSouls.
var $poorSouls = $(".collateral-damage")
//$( "li" ).filter( ".collateral-damage" )
// 10. Remove poorSouls from the DOM one by one.
$poorSouls.each(function(i, eachItem){
  //for each item in var $poorSouls
  var el = $(eachItem);
  //set var el = to each item in class that are iterated over
  el.delay(500*i).fadeOut(2000);
  //for el, the items will fade out based on index number (0 fades first at 0 seconds
  //followed by each other item after 500ms; 2000 total ms for animation)
})
});

