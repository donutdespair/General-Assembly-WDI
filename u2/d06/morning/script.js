$(document).ready(function(){
  console.log("loaded");
  var $body = $('body');

  // getResults function goes here
var getResults = function(){
$(".item").remove();
var query = $('#itunes-search').val();
  $.ajax({
  url: "https://itunes.apple.com/search",
  method: "GET",
  dataType: "jsonp",
  data: { term: query, media: 'music', entity: 'album', limit: 25}
}).done(function(data) {
      console.log(data)

  result = data.results;
   $results = $('<ul>');
   var $item, $thumbnail, $description, $artist, $album, $price;

result.forEach(function(album) {
  var $item = ($results).append("<li class = 'item'> </li>");
  var $thumbnail = ($results).append("<img class = 'albumCover' src=' '>");
  var $decription = ($results).append("<div>");
  var $artist = ($results).append("<p class = 'artist'>");
  var $album = ($results).append("<p class = 'album'>");
  var $price = ($results).append("<p class = 'price'>");

})
 $body.append($results)

//end AJAX
    }
  )
///getResult
}


  // Event Handlers go here

$("#click-me").on('click', getResults);
//Create a click handler that takes a click event for the button
//and then fires a function called getResults.

});




// $(document).ready(function(){
//   console.log("loaded");
//   var $body = $('body');

//   // getResults function goes here
// function getResults() {
//   console.log('fired');
//   var $item = $('.item');
//   $item.remove();
//   var $query = $('input').val();

//   $.ajax({
//     method : 'GET',
//     dataType : 'jsonp',
//     data: { term: $query, media: "music", entity: "album", limit: 25},
//     url: 'https://itunes.apple.com/search',
//   }).done(function(data){
//     console.log(data)
//     results = data.results;
//     $results = $('<ul>');
//     //var $item, $thumbnail, $description, $artist, $album, $price;
//     results.forEach(function(result){
//       //console.log(result)
//       var $item = $('<li>').addClass('item');
//       var $thumbnail = $('<img>').addClass('albumCover').attr('src', result.artworkUrl100);
//       var $description = $('<div>');
//       var $artist = $('<p>').addClass('artist').text(result.artistName);
//       var $album = $('<p>').addClass('album').text(result.collectionName);
//       var $price = $('<p>').addClass('price').text('$' + result.collectionPrice);
//       $description.append($artist, $album, $price);
//       $item.append($thumbnail, $description);
//       $results.append($item);
//     })
//     $('body').append($results);
//   })
// }

//   // Event Handlers go here
//   $('button').on('click', getResults);

// });
