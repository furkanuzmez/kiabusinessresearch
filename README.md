# kiabusinessresearch
Kia Test App 

My aim is just show fundamental process with combining frontend,backend and database communication.

Source Website:
  - Bootstrap:
  - Express:
  - Node.js
  - EJS Web Template 
  - Images from car companies websites 

!!!!!
I have combined the other first 3 brands and their models in the competitor table, normally creating a separate brand with the vehicle model table is a more accurate arrangement.
My aim is just show fundamental process with combining frontend,backend and database communication.

Sql Queries , 

router.get('/getcompetitors/:id', (req, res) => {
  var sql = 'SELECT * from competitors WHERE competitors.vehicle_model='+"'"+req.params.id+"'";
  db2.query(sql, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send(result);
  });
});

router.get('/createjoin', (req, res) => {
    var sql = "SELECT vehicles.vehicle_type, vehicles.vehicle_model,vehicles.sold_kia_model,countries.country_name FROM countries JOIN vehicles ON countries.country_name = vehicles.country_name ORDER BY vehicles.country_name";
    db2.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});

DATABASE STRUCTURE
![DBStructure](public/images/DBStructure.png)
