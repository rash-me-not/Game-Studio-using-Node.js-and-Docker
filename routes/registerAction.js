var express = require('express');

//create a sql connection
var mysql = require('mysql');

var conn = mysql.createConnection({
    host: 'db',
    user: 'agsroot',
    password: 'ags',
    database: 'aztecgames',
    port: 3306
});


conn.connect(function(err){
  if(!err) {
      console.log("Database is connected ");
  } else {
      console.log("Error while connecting with database:",err.stack);
  }
  });

module.exports = function(req,res){
console.log("req: ",req);
  var today = new Date();
  var users={
    "first_name":req.body.first_name,
    "last_name":req.body.last_name,
    "dob":req.body.dob,
    "role":req.body.role,
    "username":req.body.username,
    "password":req.body.password,
    "phone":req.body.phone,
    "fav_game":req.body.fav_game,
    "phone_type":req.body.phone_type,
    "last_login":today
  }

  /*Insert user details from the registation form into the database */
  conn.query('INSERT INTO players SET ?',users, function (error, results, fields) {
  console.log("results: ",results);
  if (error) {
    console.log("error ocurred",error);
    res.send({
      "code":400,
      "failed":"error ocurred"
    })
  }else{
    /*Get Welcome Page */
    res.render('welcome', { username: req.body.username, current_login_time: today });
  }
  });
};



