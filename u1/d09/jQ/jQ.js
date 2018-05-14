"use strict";
$(function(){//this calls jQuery

console.log("loaded")
$("body").append("<p>first</p>")
$("body").append("<p>second</p>")
//select body, append child paragraph

$("body").append("<article> </article>")
$('article').prepend('<img id="theImg" src="http://blog.xojo.com/wp-content/uploads/2016/01/coding_cat.pngt1466486449161ampwidth320" />')

var $first_p = $("p")[0];
var $second_p = $("p")[1];
//first p is 0 index
$($first_p).prepend("<h3>duuuude</h3>")
$($second_p).append("<ul>")
$("ul").append("<li>some garbage</li>")

var $attribute1 = $("p")[1]
$($attribute1).attr('classname', 'crap');
/*var i = 0;
$("p").each(function(element){
  i++
  this.innerText = ("paragraph" + i) */
  //overwrites paragraphs
})

//})
