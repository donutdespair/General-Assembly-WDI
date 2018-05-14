$(document).ready(function(){
  console.log("loaded");
$(function() {
    $('#lunaPark').hide();
    $('#lunaParkP').hide();
  });
$("#button").click(function() {
    $("#button").hide();
    $("#mainImg" ).hide();
    $("#vacayQ" ).text("Have you considered...");
    $("#lunaPark").show();
    $("#lunaParkP").show();
  });
$("#lunaParkP").mouseover(function() {
    $("#lunaParkP").text("The happiest place not on earth.")
});

});
