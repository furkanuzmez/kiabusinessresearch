var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var http = require('http');
var formidable = require('formidable');
var nodemailer = require('nodemailer');
//DB Connection Config
var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Martin123",
  database: "ihconedb"
  
});
var db2 = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Martin123",
  database: "kıa-position"
});
db.connect(function(err) {
  if (err) {
    throw err;
  }else {
    console.log("Connected!");
  }
});
db2.connect(function(err) {
  if (err) {
    throw err;
  }else {
    console.log("Connected!");
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('test', { title: 'Express' });
});

router.get('/admin', function(req, res, next) {
  res.render('admin', { title: 'Admin Page' });
});

router.get('/test', function(req, res, next) {
  res.render('test', { title: 'Admin Page' });
});
router.get('/vdetails/:id', function(req, res, next) {
  var x = 'http://localhost:3000/imagescar/'+req.params.id +".webp"
  res.render('vehicledetail', { title: 'Business Research',note: req.params.id,cef:'helloworld',mex: x });
});



router.get('/details/:id', function(req, res, next) {
  var x = 'http://localhost:3000/images/'+req.params.id +".png"
  res.render('playground', { title: 'Tech Word',note: req.params.id,cef:'helloworld',mex: x });
});


// Create table
router.get('/createpoststable', (req, res) => {
    var sql = "SELECT vehicles.vehicle_type, vehicles.vehicle_model,vehicles.sold_kia_model,countries.country_name FROM countries JOIN vehicles ON countries.country_name = vehicles.country_name ORDER BY vehicles.country_name";
    db2.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});
router.get('/getcountry', (req, res) => {
  var sql = "SELECT * from countries ";
  db2.query(sql, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send(result);
  });
});
router.get('/getcompetitors/:id', (req, res) => {
  var sql = 'SELECT * from competitors WHERE competitors.vehicle_model='+"'"+req.params.id+"'";
  db2.query(sql, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send(result);
  });
});

router.get('/getcars/:id', (req, res) => {
  if(req.params.id == "all") {
    var sql = 'SELECT * from vehicles ';
  }
  else {
    var sql = 'SELECT * from vehicles WHERE vehicles.country_name='+"'"+req.params.id+"'" ;
  }
  
  console.log(sql);
  db2.query(sql, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send(result);
  });
});

// Insert post 1
router.get('/addpost1', (req, res) => {
    let post = {title:'Post One', body:'This is post number one'};
    let sql = 'INSERT INTO posts SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post 1 added...');
    });
});

// Insert post 2
router.get('/addpost2', (req, res) => {
    let post = {title:'Post Two', body:'This is post number two'};
    let sql = 'INSERT INTO posts SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post 2 added...');
    });
});


// Update post
router.get('/updatepost/:id&:tag', (req, res) => {
    let newTitle = 'Updated Title';
    let sql = `UPDATE map SET map_tag = '${req.params.tag}' WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});





module.exports = router;
