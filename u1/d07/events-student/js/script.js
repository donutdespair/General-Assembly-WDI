// Example 1
var i = 0;

document
 .getElementById('click-button')
 .addEventListener('click', function() {
  //console.log('I am being clicked.');
    var counter = document.getElementById('click-display');
    counter.innerHTML = "click count" + event.detail;
    //counter.innerHTML = "click count" + ++i;
    //i++;
 });
//finds button and listens for click
//console.log "I am being clicked."
//counter.innerHTML = "click count" + ++i;
//increments count by 1 on click
//i starts as 0 but ++i will increment before displaying (i++ would print zero on first click)

// Example 2 DOM Level 2
document
 .getElementById('hover-button')
 .addEventListener('mouseover',function() {
  //console.log('I am being hovered over.');
  var status = document.getElementById('hover-display');
  status.innerHTML = 'status: on';
  //changes status to status on
});
 document
 .getElementById('hover-button')
.addEventListener('mouseout',function() {
//console.log('I am being hovered off?');
  var status = document.getElementById('hover-display');
  status.innerHTML = 'status: off';
  });

// Example 3

// Example 4

//when you type into input, print to space label lives in
//where it says type something
var input = document.getElementById('input-box')
input.addEventListener('keyup',function(){
  //The keyup event is fired when a key is released.
//https://developer.mozilla.org/en-US/docs/Web/Events/keyup
  var container = document.getElementById('input-label');
  container.innerHTML = input.value;
  //.value to get value of variable
  //http://stackoverflow.com/questions/11563638/javascript-how-to-get-value-of-text-input-field
});




