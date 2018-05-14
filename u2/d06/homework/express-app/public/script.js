$(document).ready(function(){
  //runs function, calls AJAX, appends data on page load
  //https://api.jquery.com/ready/
   console.log("loaded");
   var $body = $('body');

      $.ajax({
        url: 'http://localhost:8080/api/npmPackages',
        method: 'GET',
          //returns Object {title: "Popular NPM Frameworks",
          //text: "These are the most popular frameworks", packages: Array[6]}
   }).done(function(data){
      packages = data.packages

      var $title = $('<h1>').text(data.title).addClass('packTitle')
      var $text = $('<h3>').text(data.text).addClass('packText')
      var $mainContainer = $('<div>').addClass('mainContainer').append($title, $text)

     packages.forEach(function(package){
      var $description = $('<div>').addClass('packContainer')
      var $name = $('<h5>').text(package.name)
      var $category = $('<p>').text(package.category)
      var $img = $('<img>').addClass('packImg').attr('src', package.img)
      $mainContainer.append($description)
      $description.append($name, $category, $img)
      $body.append($mainContainer)
        });
    });


    function getLang() {
      console.log('button!');
      $.ajax({
        url: 'http://localhost:8080/api/languages',
        method: 'GET',
   }).done(function(data){
      languages = data.languagesArray

      var $title = $('<h1>').text('Languages').addClass('packTitle')
      var $mainContainer2 = $('<div>').addClass('mainContainer2').append($title)

      languages.forEach(function(language){
      var $description = $('<div>').addClass('langContainer')
      var $name = $('<h5>').text(language.name)
      var $desc = $('<p>').text(language.desc)
      var $img = $('<img>').addClass('langImg').attr('src', language.img)
      $mainContainer2.append($description)
      $description.append($name, $desc, $img)
      $body.append($mainContainer2)
      });
    });
  };
    $('button').on('click', getLang);
});




