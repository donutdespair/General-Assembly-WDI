//////Dependencies
var express = require("express");
var app = express();
var port = process.env.PORT || 8080;
var pgp = require("pg-promise")();
var db = pgp("postgres://student_07@localhost:5432/realty_db");
var mustacheExpress = require("mustache-express");

app.engine('html',mustacheExpress());
app.set('view engine','html');


app.set('views',__dirname+'/views');
app.use(express.static(__dirname + "/public"));


app.listen(port)
console.log("Server started on " + port);



////////Get data from tables
app.get("/buildings", function(req, res) {
  console.log("hit buildings route");
  db.many("SELECT * FROM buildings").then(function(data){
    //console.log(data);
    var json_data = {buildings: data}
        res.render('buildings', json_data);
  });
});


app.get('/building/:id', function(req, res){
  id = req.params.id;
  db.many("SELECT * FROM buildings WHERE id = $1", [req.params.id])
  .then(function(data){
    json_data = {buildings: data};
    res.render('building', json_data);
    //console.log(data)
  });
});


app.get("/doormen", function(req, res) {
  console.log("hit doormen route");
  db.many("SELECT * FROM doormen").then(function(data){
    //console.log(data);
    var json_data = {doormen: data}
        res.render('doormen', json_data);
  });
});

app.get('/doorman/:id', function(req, res){
  id = req.params.id;
  db.many("SELECT * FROM doormen WHERE id = $1", [req.params.id])
  .then(function(data){
    json_data = {doormen: data};
    res.render('doorman', json_data);
    //console.log(data)
  });
});

app.get("/apartments", function(req, res) {
  console.log("hit apartments route");
  db.many("SELECT * FROM apartments").then(function(data){
    //console.log(data);
    var json_data = {apartments: data}
    res.render('apartments', json_data);
  });
});


app.get('/apartment/:id', function(req, res){
  id = req.params.id;
  db.many("SELECT * FROM apartments WHERE id = $1", [req.params.id])
  .then(function(data){
    json_data = {apartments: data};
    res.render('apartment', json_data);
    //console.log(data)
  });
});

app.get("/tenants", function(req, res) {
  console.log("hit tenants route");
  db.many("SELECT * FROM tenants").then(function(data){
    //console.log(data);
    var json_data = {tenants: data}
    res.render('tenants', json_data);
  });
});

app.get('/tenant/:id', function(req, res){
  id = req.params.id;
  db.many("SELECT * FROM tenants WHERE id = $1", [req.params.id])
  .then(function(data){
    json_data = {tenants: data};
    res.render('tenant', json_data);
    //console.log(data)
  });
});

