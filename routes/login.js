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

  var post  = req.body;
  var user= post.username;
  var pass= post.password;
  
  /* Retrieve user details for login. Match the username and password */
  var sql="SELECT * FROM players WHERE username='"+user+"' and password = '"+pass+"'"; 
  conn.query(sql , function (error, results, fields) {
    console.log("results: ",results);
    if (results.length > 0){

      /* Get Welcome page after successful login */
      res.render('welcome', { username: user, current_login_time: today });
    }
    else{
        res.render('error', { message: 'Incorrect username password',error });
    }
    });
  };
