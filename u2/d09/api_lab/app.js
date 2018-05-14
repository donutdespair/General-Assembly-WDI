//dependencies
var exp = require ('express'),
    mstE = require('mustache-express'),
    bdPars = require('body-parser'), //body parser
    methodOverride = require('method-override'), //method override
    pgp = require('pg-promise')(),
    db = pgp('postgres://student_07@localhost:5432/api_lab'),
    app = exp();

//configure express and related packages
app.engine('html', mstE());
app.set('view engine','html');
app.set('views',__dirname + '/views');
app.use('/', exp.static(__dirname + '/public'));
app.use(methodOverride('_method')); //method override
app.use(bdPars.urlencoded({ extended: false })); //body parser
app.use(bdPars.json()); //body parser

//start the server
app.listen(8080, function(){
  console.log('server live on 8080');
});

// Create the appropriate route to list all species.
app.get('/creatures', function(req, res){
  db.many('SELECT * FROM creatures')
  .then(function(data){
    var json_data = {creatures: data}
    console.log(json_data)
        res.render('index', json_data);
  });
});

//Each species by ID.
app.get('/creatures/:id', function(req, res){
  db.one('SELECT * FROM creatures WHERE id = $1',[req.params.id])
  .then(function(data){
    var json_data = {creatures: data}
    console.log(data)
    res.render('show',json_data);
  });
});

//Create the appropriate route to list all species for a particular planet.
app.get('/creatures/:id', function(req, res){
  db.many('SELECT * FROM creatures WHERE planet = $1',[req.params.id])
  .then(function(data){
    var json_data = {creatures: data}
    console.log(data)
    res.render('show',json_data);
  });
});

//Create the appropriate route to update information on a species.
app.put('/creatures/:id', function(req, res){
  creature = req.body
  id = req.params.id
  db.none('UPDATE creatures SET species=$1, family=$2, habitat=$3, diet=$4, planet=$5 WHERE id=$6',
    [creature.species,creature.family,creature.habitat,creature.diet,creature.planet,id])
  res.redirect('/creatures/'+id);
});

//Create the appropriate route to add new species.
//show the view to make a new user.
app.get('/create',function(req,res){
  res.render('create')
})

//create a new user.
app.post('/creatures',function(req, res){
  creature = req.body

  db.none('INSERT INTO creatures (species,family,habitat,diet,planet) VALUES ($1,$2,$3,$4,$5)',
    [creature.species,creature.family,creature.habitat,creature.diet,creature.planet])

  res.render('index')
});



app.get('/delete',function(req,res){
  res.render('delete')
})

//delete a single user.
app.delete('/creatures/:id',function(req, res){
  id = req.params.id
  db.none("DELETE FROM creatures WHERE id=$1", [id])
  res.render('index')
});



