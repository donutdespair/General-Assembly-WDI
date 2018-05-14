$(document).ready(function(){
  console.log("loaded");

  var getData = function(movieTitle){
  var movieUrl = "http://www.omdbapi.com/?t=" + movieTitle + "&r=json";
  $.ajax({
  "url": movieUrl,
  "method": "GET",
  success: function(movieUrl) {
    console.log(movieTitle);
    handleResponse(movieUrl);
    }
  });
};

  var addAJAXFunction = function(){
    $("button").click(function(){
      var movieTitle = $("input").val();
      getData(movieTitle);
    });
 };

  var appendMovie = function(name,imagePath){
    $("#movies").
    append("<div class='four columns'><h5>" + name + "</h5><img src=" + imagePath + "></div>");
    var dateTime = moment().tz(cityName).format();
    console.log(dateTime)
    };

  var handleResponse = function(data){
    var name = data.Title;
    var imagePath = data.Poster;
    appendMovie(name, imagePath);
    };

addAJAXFunction();

});
 // ends doc.ready



