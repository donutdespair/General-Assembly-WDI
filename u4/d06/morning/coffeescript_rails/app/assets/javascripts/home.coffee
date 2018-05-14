# CoffeeScript here
# 1. Add a document ready function that prints "cofeescript loaded" in the Chrome console
$ ->
  console.log("coffeescript loaded")
# 2. Write a click function on the #submit button. It should take whatever you type into the input box and print it in the Chrome console
###$ ->
  $("#submit").click ->
    console.log(input_box.value)###
# 3. Comment out problem 2 and rewrite it so that the value of the input box is appended to the p tag. This function should reset the input box, and clear out anything that is in the p tag before appending to it.
###$ ->
  $("#submit").click ->
    $("#input_text").text(input_box.value)
    $(input_box).val(' ')###
# 4. Comment out problem 3 and rewrite it so that the text appears after 2 seconds. This function should also change the text color of the button to blue
$ ->
  $("#submit").click ->
    setTimeout ( ->
      $("#input_text").text(input_box.value)
      $(input_box).val(' ')
      $("button").css("color", "blue")
      ), 2000
# 5.
$ ->
  $("#heading").mouseover ->
        $(this).text("oooooh a hover function")

    $("#heading").mouseout ->
        $(this).text("CoffeeScript Practice")
