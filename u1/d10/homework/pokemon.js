"use strict";

(function(){

  var pokemon = [
    ['Voltorb','images/voltorb.png',100],
    ['Charizard','images/charizard.png',200],
    ['Gyarados','images/gyarados.png',125],
    ['Mew','images/mew.png',75],
    ['Geodude','images/geodude.png',90],
    ['Snorlax','images/snorlax.png',110],
    ['Kabutops','images/kabutops.png',95],
    ['Eevee','images/eevee.png',60],
    ['Beedrill','images/beedrill.png',70],
    ['Magikarp','images/magikarp.gif',40],
    ['Gastly','images/gastly.png',50],
    ['Rat','images/rat.png',500],
  ];

  var chooseEnemy = function(){
  //picks random enemy from pokemon array. populates initial page with their data.
  //needs to pull random array from array
  //drops enemy in here
  //    <div id='enemy'>
 var $randomPokemon = pokemon[Math.ceil(Math.random() * pokemon.length - 1)];
 //generates random pokemon
 //Math.random returns a number between 0 and 1 so * by the number of pokemon
 //and apply Math.ceil to round up to nearest whole number which will be equal to
 //an index containing pokeData
 //http://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
$("#enemy > .name").text($randomPokemon[0])
//this gets the enemy name <p> and applies the name based on randomization
//function above
$("#enemy > .health").text("Health: " + $randomPokemon[2])
//this gets the enemy health <p> and applies starting health
$("#enemy").append("<img id='enemy_img' src='"+$randomPokemon[1]+"'>")
  //this gets div where the enemy is and adds picture
    };
  chooseEnemy()
//https://gist.github.com/stephenscaff/8266351
//http://gamequeryjs.com/documentation/first-tutorial/first-tutorial-step-3/#enemiesgen
//https://blog.kevinchisholm.com/javascript/jquery/super-flexible-javascript-object-and-array-iteration-with-jquery-each/
//https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget
var doHeal = function(){
//heals your character with a random amount from 25-50
var $pikaHealth = $("#pikachu >.health").text().match(/\d+/)[0]
//pikachu's health
var max = 50
var min = 25
var $potion = Math.floor(Math.random() * (max - min + 1)) + min;
//similar to above, returns a random number also but between 25 and 50
var $pikaHealthNum = parseInt($pikaHealth, 10)

var $newHealth = ($pikaHealthNum + $potion)
var $printHealth = $("#pikachu >.health").html("Health: " + $newHealth )
//console.log($potion)
{$("#heal_btn").toggle(function(){
  $("#attack_btn").hide();
   $("#heal_btn").hide();
  $("#status_text").show()
  $("#status_text").html("Enemy will attack in 3 seconds!");
})
  setTimeout(function(){
    $("#attack_btn").show();
      $("#status_text").hide();
      $("#heal_btn").show();
      enemyAttack();
  }, 3000);}
 };

  var enemyAttack = function(){

//set pika health
var $pikaHealth = $("#pikachu>.health").text().match(/\d+/)[0]

//10% chance nothing happens (if over .9)
if (Math.random()<.1){}

//90% chance something happens
  else{

//calculate random damage between 5 and 30
var upper = 30
var lower = 5

var $success = Math.floor(Math.random() * (upper - lower + 1)+lower);
//update pika health
var $pikaHealthNum = parseInt($pikaHealth, 10)
var $pikaHealthNum = ($pikaHealthNum - $success)
var $printHealth = $("#pikachu>.health").html("Health: " + $pikaHealthNum)
 if ($pikaHealthNum<=0){
var $pikaDown = $("#status_text").replaceWith("<span id='status_text'>Pikachu has fainted! Get ready to battle again.</span>");
  $("#attack_btn").hide();
   $("#heal_btn").hide();
  setTimeout(function(){
window.location.reload()
  }, 2500);}
}

 }


  var youAttack = function(){
  //90% chance to do between 5-30 damage.
  //after completed, says 'enemy will attack in 3 seconds' (buttons hidden during this time)
  //check if enemy health is <= 0.

//set enemy health
var $enemyHealth = $("#enemy>.health").text().match(/\d+/)[0]

//10% chance nothing happens (if over .9)
if (Math.random()<.1){}

//90% chance something happens
  else{

//calculate random damage between 5 and 30
var upper = 30
var lower = 5

var $success = Math.floor(Math.random() * (upper - lower + 1)+lower);
//update enemy health
var $enemyHealthNum = parseInt($enemyHealth, 10)
var $enemyHealthNum = ($enemyHealthNum - $success)
var $printHealth = $("#enemy>.health").html("Health: " + $enemyHealthNum)
{$("#attack_btn").toggle(function(){
  $("#attack_btn").hide();
   $("#heal_btn").hide();
  $("#status_text").show()
  $("#status_text").html("Enemy will attack in 3 seconds!");})
  setTimeout(function(){
    $("#attack_btn").show();
      $("#status_text").hide();
      $("#heal_btn").show();
      enemyAttack()
  }, 3000);}


 if ($enemyHealthNum<=0){
var $enemyDown = $("#status_text").replaceWith("<span id='status_text'>Enemy has fainted! Get ready to battle again.</span>")
  $("#attack_btn").hide();
   $("#heal_btn").hide();
 setTimeout(function(){
window.location.reload()
  }, 2500);
}
;
}};

  var addEventListeners = function(){
  //add the click events on the attack and heal buttons.
   $("#heal_btn").click(doHeal)
$("#attack_btn").click(youAttack)

}





  $(document).ready(function(){
    addEventListeners();
  })

})()
