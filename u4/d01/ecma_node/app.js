var cn = require('./src/common.js');

// This file is just an entry point for running code in other files.
var scriptPath =
      //'./src/arrowFunctions.js';
      './src/classes.js';

var script = require(scriptPath);

function top(){

  console.log('Running from the top.');
  console.log('scriptPath: ' + scriptPath);
  script();
}

top();


//harmony makes a lot of es6 stuff available in node
//nodemon --harmony app.js - reruns when code changes
