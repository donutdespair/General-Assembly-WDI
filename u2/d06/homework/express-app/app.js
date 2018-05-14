var npmPackages = {

    title: "Popular NPM Frameworks",
    text: "These are the most popular frameworks",

    packages: [
      {
        name: "Express",
        category: "Server-side Framework",
        img: "https://camo.githubusercontent.com/fc61dcbdb7a6e49d3adecc12194b24ab20dfa25b/68747470733a2f2f692e636c6f756475702e636f6d2f7a6659366c4c376546612d3330303078333030302e706e67"
      },
      {
        name: "Gulp",
        category: "Build System",
        img: "http://maxcdn.webappers.com/img/2014/01/gulp-js.jpg"
      },
      {
        name: "Mocha",
        category: "Testing Framework",
        img: "https://s3.amazonaws.com/dailyjs/images/posts/mocha-tests.png"
      },
      {
        name: "React",
        category: "Front-end Framework",
        img: "http://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png"
      },
      {
        name: "Passport",
        category: "Authentication Tool",
        img: "https://pbs.twimg.com/profile_images/599259952574693376/DMrPoJtc.png"
      },
      {
        name: "PG Promise",
        category: "Promises Interface for PostgeSQL Database",
        img: "https://securedb.co/wp-content/uploads/2015/07/worlds-most-advanced-open-source-database-securedb-encyrption-as-a-service.gif"
      }
    ]
}


var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.listen(port);
console.log('Server started on ' + port);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.send('index');
});


app.get('/api/npmPackages', function(req, res) {
  var json_data = npmPackages;
  res.json(json_data);
});


  var languages = {};
  var languagesArray = [];
  languages["languagesArray"] = languagesArray;
//http://stackoverflow.com/questions/10838746/adding-array-to-object
    function language(name, img, desc){
      this.name = name;
      this.img = img;
      this.desc = desc;
    }

    function addLanguage(name, img, desc){
        var l = new language(name, img, desc);
        languagesArray.push(l);
    }


addLanguage("JavaScript", "https://www.codementor.io/assets/page_img/learn-javascript.png", "A lightweight, interpreted, programming language with first-class functions");
addLanguage("Ruby", "https://coderdojo.com/wp-content/uploads/2015/03/Ruby.png", " A dynamic, reflective, object-oriented, general-purpose programming language.");
addLanguage("Golang", "http://www.unixstickers.com/image/cache/data/stickers/golang/golang.sh-600x600.png", "A compiled, statically typed language in the tradition of Algol and C, with garbage collection, limited structural typing, memory safety features and CSP-style concurrent programming features added.");
addLanguage("Elm", "https://camo.githubusercontent.com/ed415a36e6e7df240aba341de4b384fb796b788d/68747470733a2f2f7062732e7477696d672e636f6d2f70726f66696c655f696d616765732f3434333535313532373330373731383635362f635a486873462d632e706e67", " A domain-specific programming language for declaratively creating web browser-based graphical user interfaces.");
addLanguage("Elixir", "https://avatars2.githubusercontent.com/u/1481354?v=3&s=400", "A functional, concurrent, general-purpose programming language that runs on the Erlang virtual machine (BEAM).");



app.get('/api/languages', function(req, res) {
  var json_data = languages;
  res.json(json_data);
});

