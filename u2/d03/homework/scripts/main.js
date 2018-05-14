
//milwaukee - http://api.openweathermap.org/data/2.5/weather?id=5263045&appid=[apiKey]
$(document).ready(function(){
  console.log("loaded");

  var getData = function(cityName){
  var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q="  + cityName + "&units=imperial&APPID=[apiKey]";
  $.ajax({
  "url": weatherUrl,
  "method": "GET",
  success: function(data) {
    console.log(data);
    handleResponse(data);
    }
  });
};

  var addClickEvent = function(){
    $("button").click(function(){
      event.preventDefault();
      //http://jsforallof.us/2014/07/08/epreventdefault-estoppropagation/
      var cityName = $("input").val();
      getData(cityName);
        //var date = moment().format("YYYY-MM-DD");
        //var time = moment().format("HH:mm:ss")
    //console.log(date, time)
    });
 };

  var handleResponse = function(data){
    var cityName = data.name;
    var currentTemperature = data.main.temp;
    addTemperature(cityName, currentTemperature);
  };

  var addTemperature =  function(cityName, currentTemperature){
    if (currentTemperature < 50){
    $("#forecast").
    text("It's " + currentTemperature + " degrees in " + cityName + ". That's chilly!" );
  }else{
    $("#forecast").
    text("It's " + currentTemperature + " degrees in " + cityName + ". Is it even fall?" );
    };
  }

addClickEvent()

});
