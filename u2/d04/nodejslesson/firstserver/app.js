var http = require("http");
//if path not specified assumption is that you are looking for package
var fs = require("fs");
//file system
/*var server = http.createServer(function(req, res){
//takes two arguments, request and response
  res.writeHead(200, {"Content-type": "text/plain"});
  //200 is successful request, returns plain text
  res.end("Hello World");
  })*/
  var getHTML = function(res){
  res.writeHead(200, {"Content-type": "text/html"});
  var html = fs.readFileSync(__dirname + "/public/index.html");
  //picks a file, takes filepath as param
  res.end(html);
  }

    var getCSS = function(res){
  res.writeHead(200, {"Content-type": "text/css"});
  var css = fs.readFileSync(__dirname + "/public/style.css");
  //picks a file, takes filepath as param
  res.end(css);
  }

var server = http.createServer(function(req, res){
  if (req.url === "/style.css"){
    getCSS(res);
  }else if (req.url === "/"){
    getHTML(res);
  }
});


var port = 8080;
server.listen(port);
console.log("listening on port", port);
