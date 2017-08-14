

const express = require('express');
var bodyParser = require('body-parser');
var axios = require('axios');
var app = express();



app.use(bodyParser.json());


// run nodemon  server.js


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// set the current state of the project 

	var  todoObject = {
      todos: [
        {text: 'learn angular', done: false, id: 1},
        {text: 'write the content for the next module', done: false, id: 2},
        {text: 'buy cheese', done: true, id: 3},
        {text: 'buy milk', done: true, id: 4}

	     ],

         id: 5,
        selection: 'all'

  };
  
// working when hit
app.get('/todos/api', (req, res) => {

    console.log("im hitting");

    res.json(todoObject);

    console.log(todoObject);

});




app.post('/todos/api', (req, res)=>{

    todoObject = req.body;
    res.send("I have received Update");
    
    console.log(todoObject);

 });



app.listen(8080, () => {
    console.log('Server Started on http://127.0.0.1:8080');
    console.log('Press CTRL + C to stop server');
    console.log("Server running");
});







app.use(function(req, res, next) {





  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});




