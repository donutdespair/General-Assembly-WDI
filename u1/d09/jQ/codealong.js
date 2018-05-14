"use strict";
$(function(){//this calls jQuery

console.log("loaded")


$("body").append("<p>")
$("body").append("<p>")
$("body").append("<p>")
$("body").append("<p>")
$("body").append("<p>")

var i = 0
$("p").each(function(element){
  i++
  this.innerText = ("paragraph" + i)
})

$("p").first()
//first in collection
$("p").last().hide()
$("p").last().show()

var $temp = $("p").last().clone()
//copies and stored
$("body").append($temp)
//adds to body
$("p").last().text("added")
//changes text

$("p").css({
  "cursor":"pointer",
  "color":"red"
})
//changes css text red, cursor pointer


var pOver = function(){
  $("p").css("background-color", "teal")
}
var pOut = function(){
  $("p").css("background-color", "pink")
}
$("p").hover(pOver,pOut)

$("p").last().attr("align", "center")
});
