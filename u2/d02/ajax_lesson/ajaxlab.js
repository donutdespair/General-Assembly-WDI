$(document).ready(function() {
console.log("loaded!!");

var personUrl = "https://randomuser.me/api/";
/*
var dataLog = function(data){
  console.log(data)
}*/

var makeCall= function() {
 return $.ajax({
  url: personUrl,
  method: "GET",
  success: function(data) {
    getData(data)
    }
  })
}

  var getData = function(data){
    var data = data.results[0]
  var firstName = data.name.first;
  var lastName = data.name.last;
  var name = firstName + " " + lastName;

  var email = data.email;
  var dob = data.dob;

var street = data.location.street;
var city = data.location.city;
var state = data.location.state
var address = street + " " + city + " " + state;

var phone = data.phone;
var pw = data.login.password;
var imgUrl = data.picture.large;
  console.log(name)

var manipulateDOM = function(){
              $("h1").text(name);
              $('#hoverText').text("My name is" + " ")
              $('#me').css('background-image', ('url(' + imgUrl + ')'))


              $('#name').hover(function(){
              $("h1").text(name);
              $('#hoverText').text("My name is" + " ")
})
              $('#email').hover(function(){
              $("h1").text(email);
              $('#hoverText').text("My email is" + " ")
})
              $('#birthday').hover(function(){
              $("h1").text(dob);
              $('#hoverText').text("My DOB is" + " ")
})
              $('#address').hover(function(){
              $("h1").text(address);
              $('#hoverText').text("My address is" + " ")
})
              $('#phone').hover(function(){
              $("h1").text(phone);
              $('#hoverText').text("My phone number is" + " ")
})
              $('#password').hover(function(){
              $("h1").text(pw);
              $('#hoverText').text("My password is" + " ")
})
  }
  manipulateDOM()
}

makeCall()

$("#changePerson").click(makeCall)




});
