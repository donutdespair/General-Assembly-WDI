$(document).ready(function(){
  var first_film_url = "http://swapi.co/api/films/1/";

  // Do AJAX calls here - using promises
var dataLogger = function(data){
    console.log(data);
}

 var initialRequest = function(){
  return $.ajax({
    url: first_film_url,
    method: "GET"
      })
  }


var starshipRequest = function(data){
  return $.ajax({
    url: data.starships[6],
    method: "GET"
      })
  }

var pilotData = function(data){
  return $.ajax({
    url: data.pilots[2],
    method: "GET"
      })
  }


initialRequest()
    .then(starshipRequest)
    .then(pilotData)
    .then(dataLogger)









});

/*
///////////Callback Hell////////////
$.ajax({
 url: first_film_url,
 method: "GET",
 success: function(data){
      console.log(data);
      $.ajax({
        url: data.starships[6],
        method: "GET",
        success : function (shipData){
          console.log(shipData);
          $.ajax({
            url: shipData.pilots[2],
            method: "GET",
            success: function (pilotData){
              console.log(pilotData);
              var container = $('#titles #titlecontent p');
              container.text(JSON.stringify(pilotData));
            }
          })
        }
      })
    }
  });
});

*/
