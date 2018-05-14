var http = require("http");
//if path not specified assumption is that you are looking for package
var fs = require("fs");

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

  var getJS = function(res){
  res.writeHead(200, {"Content-type": "application/javascript"});
  var css = fs.readFileSync(__dirname + "/public/script.js");
  //picks a file, takes filepath as param
  res.end(css);
  }

var server = http.createServer(function(req, res){
  if (req.url === "/style.css"){
    getCSS(res);
  }else if (req.url === "/"){
    getHTML(res);
  }
  else if (req.url === "/script.js"){
    getJS(res);
  }
});


var port = 8080;
server.listen(port);
console.log("listening on port", port);
//http://stackoverflow.com/questions/7704480/why-does-git-commit-not-save-my-changes
//commitment issues (kinda like in my life, womp womp, but not really, i'm committed to a lot of things)
//http://stackoverflow.com/questions/10522532/stop-node-js-program-from-command-line
//http://stackoverflow.com/questions/9664282/difference-between-application-x-javascript-and-text-javascript-content-types
//exit local host
//node app.js to run app
//ctrl-c to kill app
//browser to localhost:8080 to view

