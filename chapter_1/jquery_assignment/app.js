




// first box to turn green
 var BOX_ONE= document.getElementById( 'box1' );
 BOX_ONE.style.backgroundColor = 'green';




// second to change to bold and big
var BOLD_ME = document.getElementById("para1");
BOLD_ME.style.fontSize = "35px";



// use box2 and add it to the spin in html class

$("div.box2").addClass("spin");




// hover and turn green

 var BOX_ONE= document.getElementById('box3');

 BOX_ONE.onmouseover = function() {
  this.style.backgroundColor = 'green';
 
};




// click button and obtain a message pop-up box!

var popup = document.getElementById("button1");
 
 $(popup).click(function(){
    alert(" You're pushing my buttons...");
});


 
// log chars
$("input").change(function(){ // action event listener
   // alert("The text has been changed.");
   var value = $("input").val()
   console.log(value);
});


//move right

setTimeout(
  function() 
  {


$(document).ready(function(){

 $("div.box4").animate({
    
     'marginLeft' : "+=400px", 

	    
        });
  
});

  }, 1000);



// move down
setTimeout(
  function() 
  {


$(document).ready(function(){

 $("div.box4").animate({
    

    'marginTop' : "+=150px"
	    
        });
  
});

  }, 1000);






/*
// move box lef then right
$(document).ready(function(){
  console.log("i should be moving");
 $("div.box4").animate({
    
     'marginLeft' : "+=400px", 
    'marginTop' : "+=150px"
	    
        });
  
});

*/