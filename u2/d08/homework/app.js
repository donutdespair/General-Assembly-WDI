//dependencies
var exp = require ('express'),
    mstE = require('mustache-express'),
    bdPars = require('body-parser'), //body parser
    methodOverride = require('method-override'), //method override
    pgp = require('pg-promise')(),
    db = pgp('postgres://student_07@localhost:5432/hogwarts_crud_test'),
    app = exp();

//configure express and related packages
app.engine('html', mstE());
app.set('view engine','html');
app.set('views',__dirname + '/views');
app.use('/', exp.static(__dirname + '/public'));
app.use(methodOverride('_method')) //method override
app.use(bdPars.urlencoded({ extended: false })); //body parser
app.use(bdPars.json()); //body parser

//start the server
app.listen(8080, function(){
  console.log('server live on 8080');
});

app.get('/', function(req, res) {
    res.render('home/index');
  });


app.get('/houses', function(req, res){
  db.many('SELECT * FROM houses')
  .then(function(data){
    var json_data = {houses: data}
    console.log(json_data)
        res.render('houses/index', json_data);
  });
});

app.get('/houses/:id', function(req, res){
  db.many("SELECT houses.name, students.fname, students.lname, students.image, img_url FROM houses JOIN students ON (students.house_id = houses.id) WHERE students.house_id = $1",[req.params.id])
    .then(function(data){
      res.render('houses/show', {houses:data[0],students:data});
    }).catch(function(error) {
      console.log("ERROR", error);
      res.render('index');
    });
});

app.get('/students', function(req, res){
  db.many('SELECT * FROM students')
  .then(function(data){
    var json_data = {students: data}
    //console.log(json_data)
        res.render('students/index', json_data);
  });
});

app.get('/students/:id',function(req, res){
  db.one('SELECT * FROM students where ID = $1',[req.params.id])
  .then(function(data){
    var json_data = {students: data}
    console.log(data)
    res.render('students/show',json_data);
  });
});

