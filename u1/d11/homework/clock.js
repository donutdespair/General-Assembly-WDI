$(function(){
  "use strict";
  /*
  ** Declare variables here that use jQuery to grab
  ** each of the clock hands
  */
  //Step 1
  var body = $('body');
  var clock = $('<div class="clock">');
  var $minuteHand = $('#minute-hand')
  var $secondHand = $('#second-hand')
  var $hourHand = $('#hour-hand')

  var clock = function(){

    // Put all clock functonality in here
    // Your setInterval(s) should be in here
    //Step 2
      var seconds = 6; // 360/6 - 60 increments per rotation over 360 degs (60 secs in min)
      var minutes = 6; // 360/6 - 60 increments per rotation over 360 degs (60 mins in hour)
      var hours = 30; //360/12 - 12 increments per rotation over 360 degs (24 hours in day but loops clock twice)

      setInterval(function() {
        $secondHand.css('transform', 'rotate('+ seconds +'deg)');
          seconds = seconds + 6; //moves 6 deg on the sec
      }, 1000); //1000 ms = 1sec


      setInterval(function() {
      $minuteHand.css('transform', 'rotate('+ minutes +'deg)');
        minutes = minutes + 6; //moves 6 deg on the min
      }, 60000); //60000 ms = 1min


      setInterval(function() {
      $hourHand.css('transform', 'rotate('+ hours +'deg)');
        hours = hours + 30; //moves 30 deg on the hour
      }, 3600000); //3600000 ms = 1hr

  };
clock()
//calls function
});



/*$(function() {
var $minuteHand = $('#minute-hand')
  $("#minute-hand");
    rotate(45);
        function rotate(degree) {
        $secondHand.css('transform', 'rotate('+ seconds +'deg)');
        }*/
