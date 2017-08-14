

/*


Introduction

Understanding what a web server is and how is works is vital to your path 
of becoming a web developer. In this assignment, we will create a web server in
 Node using the Express framework. In particular, this assignment focuses on two different 
 ways to serve static files using Express. We willl also see how to set the caching behaviour 
 for each of these methods.

---------------------------------------------------------------------------------------------------------------------------
INSTRUCTIONS:
Create an Express server
In your server, set up an endpoint at the path ‘/joke’ that will respond to GET requests.
 When a GET request is received to this endpoint, your server should use the res.sendFile()
  method to send back a static html file that displays a joke of your choice. Do not worry 
  about styling this page. The important thing is that you understand how to serve the file, not what it contains.
Create a sub-directory in the same folder as your main server file to hold your static files. 
Copy the files from your journal assignment into this directory.
Use express.static to to instruct your web server to serve all static files from the sub-directory 
that was just created. Supply an options object to express.static that uses the maxAge option to 
specify that these files are not cached for more than 2 days
*/

const express = require('express');
const app = express('path'); // set path

var mssg = "I chased clouds all day but I must have Fog-et my net - reddit user ;)"; // our funny message

app.use(express.static('public'));

/*
 
app.get('/joke/express', function (req, res) {

app.use(express.static('public'));
app.use(express.static('public'));  set a directory
//res.sendFile("/Users/travishaycock/Desktop/doc.pdf"); // set abs. file path

*/


app.get('/joke', function (req, res) {
// file you want to send below
res.send(mssg);

});


app.listen(3000, function () {

      console.log('Example app listening on port 3000! \n Please use the sub directory')

})





