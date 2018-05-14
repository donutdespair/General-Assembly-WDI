//////Dependencies
var express = require("express");
var app = express();
var port = process.env.PORT || 8080;
var pgp = require("pg-promise")();
var db = pgp("postgres://student_07@localhost:5432/crud_practice_db");
var mustacheExpress = require("mustache-express");
var methodOverride = require('method-override') ;
var bdPars = require('body-parser');



app.engine('html',mustacheExpress());
app.set('view engine','html');


app.set('views',__dirname+'/views');
app.use(express.static(__dirname + "/public"));

app.use(methodOverride('_method'));
app.use(bdPars.urlencoded({extended: false})); //body parser
app.use(bdPars.json());

app.listen(port)
console.log("Server started on " + port);


////Get db
app.get("/users", function(req, res) {
  console.log("hit users route");
  db.many("SELECT * FROM users").then(function(data){
    console.log(data);
    var json_data = {users: data}
        res.render('users/index', json_data);
  });
});

app.get('/users/:id', function(req, res){
  id = req.params.id;
  db.one("SELECT * FROM users WHERE id = $1", [req.params.id])
  .then(function(data){
    json_data = {users: data};
    res.render('users/single', json_data);
    console.log(data)
  });
});



app.delete('/users/:id',function(req, res){
  id = req.params.id;
  db.many("DELETE FROM users WHERE id = $1", [req.params.id]);
    res.send('Account Deleted');
  });




app.get('/users', function(req, res) {

  var name = req.param('name');
  var email = req.param('email');
  var email = req.param('password');
});

app.post('/users', function(req, res) {

  var name = req.param('name');
  var email = req.param('email');
  var email = req.param('password');
  console.log(user_id + ' ' + name + ' ' + email + ' ' + password);
  res.send(user_id + ' ' + name + ' ' + email + ' ' + password);
});


