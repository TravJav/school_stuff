


var url_array = ["https://www.reddit.com","https://www.reddit.com/?count=25&after=t3_6m7dtc","https://www.reddit.com/?count=50&after=t3_6m92wf"];


// libs
var request = require('request');
var cheerio = require('cheerio');
var selenium = require ('selenium');

var i;

var webdriver = require('selenium-webdriver');
var browser = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'chrome' }).build();





for(i =0; i < url_array.length; i++ ){ 





request(url_array[i], function (error, response, body) 
{
  if (!error && response.statusCode == 200) 
  {
     

          var $ = cheerio.load(body);
              var titles = $("p.title").text();
        
        
          console.log("Page Number" + i+ "\n \n" +titles);
   
  } else{
    console.log("check your page URL's");
  }
})



} // end for loop 1
