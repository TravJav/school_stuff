/*
Web scrapers are power tools for mining information out of websites. For this challenge read "Web Scraping with NodeJS" and follow the instructions to assemble a web scraper. Use your web scraper to scrape the front page of Reddit and output to the console a list of all the titles of all the articles on the Reddit homepage.

1. Set up a web scraper by going through Web Scraping with NodeJS
2. Use your web scraper to scrape the front page of Reddit
3. Output to the console a list of all the titles of all of the articles on the Reddit homepage.
4. Once this is working, try scraping through the first 3 pages of Reddit, scraping each page separately.
 Console.log "Page 1", "Page 2" and "Page 3" as part of each scraping function. Which result returned first?
  Run your code again -- did your results return in the same order?
The result you get from your web scraper could be different from what you see when you visit Reddit on your browser. 
This is completely fine, and you can just move on.


OVERVIEW:

Using the tags I found I have managed to scrape the apprpopriate data; Was orignally looking for the button
click mehtod but do not beleive there is one included in the below libraries ( was going with selenium) But managed
to just use the URL's of the pages exp. 1,2,3 etc... and loop through NOTE; these pages may have changed when ran as this
is hardcoded page numbers essentially that may happen to be page num. 30 when doing this is the future a
elegant solution would be to use selenium to click the button NEXT on the pages.. this will be significantly slower
as a result though and will actually open up a zombie browser.. Additionally if these URLs changes you may see a odd
result returned with the page number or may not exist / run atall!


Reddit doesnt have page numbers so getting the actual page number maybe ( page 1001 or 4352) is not possible 
unless you scraped the page data made a algo that counted the number of posts per page then divide them
could give you somewhat of a page number to work with
*/




var url_array = ["https://www.reddit.com","https://www.reddit.com/?count=25&after=t3_6m7dtc","https://www.reddit.com/?count=50&after=t3_6m92wf"];


// libs
var request = require('request');
var cheerio = require('cheerio');

/*
var i;
var titles;

for(i =0; i < url_array.length; i++ ){ 





request(url_array[i], function (error, response, body) 
{
  if (!error && response.statusCode == 200) 
  {
     

          var $ = cheerio.load(body);
     
   
  titles = $("p.title").text();
  scrape();
console.log("PAGE NUMBER:"+i+"\n \n \n " + titles);


  } else{
    console.log("check your page URL's");
  }
})



} // end for loop 1


function scrape() {





}
*/




