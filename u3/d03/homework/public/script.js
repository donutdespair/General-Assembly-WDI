$(document).ready(function() {
  console.log("loaded")
  var body = document.body
      $(body).css('background',colorizer());
})

colorizer = function() {
    colors = ['#ff00ff', '#00ffff', '#00ff00', '#ffff00', '#ffff00', '#ff0000', '#0000ff', '#7920FF', '#FD0987', '#FF3300', '#32CD32', '#FF8300', '#7fff00', '#ff1493' ]
    return colors[Math.floor(Math.random()*colors.length)];
};



