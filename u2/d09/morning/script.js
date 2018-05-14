$(function(){

console.log("loaded")

$('#cat1').hover(function () {
  $(this).addClass('magictime puffIn');
});


$('#cat2').click(function () {
  $(this).addClass('magictime bombRightOut');
});

$('#cat3').click(function () {
  $(this).addClass('magictime foolishOut');
});


$('#cat4').hover(function () {
  $(this).addClass('magictime openDownRightOut');
});

$('#cat5').hover(function () {
  $(this).addClass('magictime tinRightIn');
});

$('#cat6').click(function () {
  $(this).addClass('magictime holeOut');
});

$('.button').click(function () {
  $('.container').addClass('magictime vanishOut');
});

});
