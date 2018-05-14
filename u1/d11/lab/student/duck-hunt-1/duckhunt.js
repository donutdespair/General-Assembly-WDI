// This is a jQuery "ready" closure:
jQuery(function() {
  // - Unlike a normal closure, we don't have to call it
  // - jQuery will call it when the page is loaded
//$(document).ready(function(){
//}; - same thing
//always use so it waits until functions are loaded before calling
  // I'll do some of the work for you, first I will grab the <body></body>
  var body = $('body');

  // 1. Can you create a <div> with the class "duck" and name it "duck"
var duck = $('<div class = "duck"></div>')
body.append(duck);

  // 2. Next, use setInterval to toggle the "flap" class on the duck every 250 ms (1/4 second)
  //images load in browser in order from server, unless hosted on cdn then d/l in parallel
  //can also use one large image instead of multiple separate images
  //no lag this way
  //you can use css to section off parts of large sprite to use for animations
  //dump in chrome and position using dev tools
setInterval(function(){
  duck.toggleClass('flap')
}, 250)

  // 3. Fantastic!  Now, let's move the duck using CSS "top" and "left"
//duck.css({'top': '200px', 'left': '250px'});
duck.css('top', Math.random() * window.innerHeight);
duck.css('left', Math.random() * window.innerWidth);
  // 4. Try making the duck move to a different location after 1 second
setInterval(function(){
  duck.toggleClass();
  duck.css('top', Math.random() * window.innerHeight);
  duck.css('left', Math.random() * window.innerWidth);
}, 1000)
  // 5. Congratulations!
})
