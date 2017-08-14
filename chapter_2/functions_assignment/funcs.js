/*

Assign. is in respect to the " functions exercises " Please see below  - Travis Haycock


Instructions

For this assignment, you will be writing functions to generate a 
JavaScript restaurant. You can start by downloading the starter code here. 
The starter code contains a function that returns a menu array. This menu 
array contains the items that the restaurant can serve. Each menu item object 
will have a name, price, and a time property.

This challenge will require you to write 3 functions. These functions will 
accept a user's order, cook the specified meal, and then serve the meal. For 
this assignment, all meals will consist of 3 items, a main dish, a side dish, and a drink.

The first function will be the 'order' function, which should take in 3 parameters, 
the main, side, and drink. If these 3 arguments are provided by a user, then the order 
function will call the next function, the cook function, with the 3 items as arguments.
 If less than 3 arguments are provided, then the function should display an error and ask the user to order again.
The second function will be the 'cook' function, which again will take in the 3 meal 
parameters. This function will need to look through the restaurant's menu and determine 
the total time it will take to prepare the 3 items that were ordered. Once the total time
 has been determined, the function should tell the user how much time it will take to prepare the meal, and then wait that amount of time in seconds. After that, the 'serve' function will be called with the 3 meal items as arguments.
The final 'serve' function will need to take in the 3 meal parameters, and loop through
 the menu to find out the total price of all 3 menu items. The function should log that the meal is ready to serve, and also inform the user what the price of the meal will be.
*/


//JavaScript restaurant
//use the generateMenu() function to get a menu object when you need it

// This is a test order. It should take 8 seconds and should cost $65.
// You can also test your restaurant functions with other menu items.
//order('Lobster','Wild Rice','Wine')


// WRITE YOUR CODE BELOW
// Order Function Here:

// Cook Function Here:

// Serve Function Here:



// function that returns a menu array, no need to modify this function


// self explan.
//var main, side, drink;

var total_of_meals;

accept_order();  // step into out first function




function accept_order(){
console.log("Please Specify Your Order! \n Here Are Our  Menu Options [ currently I am hard-coded ] ");
// lets use hardcoded for occurences of exectuions outside the browser like in VS

var ret_value = generateMenu(); // return value of object

var i;
var length = ret_value.length;


for(i = 0; i < length; i++){

    console.log("\n"+i+":"+ ret_value[i].name);

}




var main_m1 = ret_value[0].name; // meal
var main_t1= ret_value[0].time;  //time
var main_p1= ret_value[0].price; //price


var main_m2 = ret_value[3].name;
var main_t2= ret_value[3].time;    
var main_p2= ret_value[3].price;


var main_m3 = ret_value[7].name;
var main_t3= ret_value[7].time;    
var main_p3= ret_value[7].price;    


// check to see if the three args have been passed


    if(main_t1 && main_t2 && main_t3 != null){ // execute block
    
    console.log("great, I have three selections!");
  


    //NOTE! Can change hardcoded anwser to a different value
    var cook_time = cook(main_t1,main_t2, main_t3);


    console.log("The Cook Will Take This Much Time To Prepare Your Meal:"+ cook_time + " Minutes");

    var wait_time = cook_time * 1000; //  by 1000 to achieve ms's


    setTimeout(function() {

            total_of_meals  = serve_meal(main_p1, main_p2, main_p3);
            console.log("Total of all your meal cost will be: $"+ total_of_meals);
           // monkey_wrench(); uncomment me if you want to run the method



    }, wait_time); // wait * 1000 ms's




} else if(main_t1 && main_t2 && main_t3 == null){
    

      console.log("Something has went wrong and we have a undefined item on the list \n start me over please!");
    }






}




// cook 
function cook(main_t1, main_t2, main_t3){

    var total_time = main_t1 + main_t2 + main_t3;
     return total_time;
}






function serve_meal(main_p1, main_p2, main_p3){

    var total_price_amount = main_p1+ main_p2+ main_p3;
    return total_price_amount;

}


/*******************************************************************************************************************************

For the extra challenge I wanted to try something crazy... with lots of different things going on
but yet make it fun to do some object calling

Lets make Javascript cry with some seemingly pointless but fun math activities.. totally what its not for :)


*******************************************************************************************************************************/ 
function monkey_wrench(){

           

    var ret_value = generateMenu();

    console.log(" Javascript wont like you");

    var a1 = ret_value[0].name; // meal
    var a2 = ret_value[0].time;  //time           // INDEX 0
    var a3= ret_value[0].price; //price


    var  b1 = ret_value[1].name;
    var  b2 = ret_value[1].time;                   // INDEX 1
    var  b3 = ret_value[1].price;


    var  c1 = ret_value[2].name;
    var  c2 = ret_value[2].time;                    // INDEX 3
    var  c3 = ret_value[2].price;    


    var d1 = ret_value[3].name;                   // INDEX 4 ...
    var d2 = ret_value[3].time;    
    var d3 = ret_value[3].price;  

    var e1 = ret_value[4].name;
    var e2 = ret_value[4].time;    
    var e3 = ret_value[4].price;  

    var f1 = ret_value[5].name;
    var f2= ret_value[5].time;    
    var f3= ret_value[5].price;  

    var g1= ret_value[6].name;
    var g2= ret_value[6].time;    
    var g3= ret_value[6].price;  

    var h1= ret_value[7].name;
    var h2= ret_value[7].time;    
    var h3= ret_value[7].price;  

    var  i1 = ret_value[8].name;
    var i2= ret_value[8].time;    
    var i3= ret_value[8].price;  

    var j1 = ret_value[9].name;
    var j2= ret_value[9].time;    
    var j3= ret_value[9].price;  

    var k1 = ret_value[10].name;
    var k2= ret_value[10].time;    
    var k3= ret_value[10].price;  

    var l1 = ret_value[11].name;
    var l2= ret_value[11].time;    
    var l3= ret_value[11].price;  

    var m1= ret_value[12].name;
    var m2= ret_value[12].time;    
    var m3= ret_value[12].price;  

    var n1 = ret_value[13].name;
    var n2= ret_value[13].time;    
    var n3= ret_value[13].price;  

    var o1 = ret_value[14].name;
    var o2= ret_value[14].time;    
    var o3= ret_value[14].price;  

    var p1 = ret_value[15].name;
    var p2= ret_value[15].time;    
    var p3= ret_value[15].price;  

    var q1 = ret_value[16].name;
    var q2= ret_value[16].time;    
    var q3= ret_value[16].price;  


    var total_time_serveAll = a2+b2+c2+d2+e2+f2+g2+h2+i2+j2+k2+l2+n2+p2+q2 * 1000;
    var mins = a2+b2+c2+d2+e2+f2+g2+h2+i2+j2+k2+l2+n2+p2+q2;

    console.log("\n It would take : "+ total_time_serveAll + "\n In ms's to serve all these items on the list  or: \n " + mins + "minutes" );

     var tot_cost = a3+b3+c3+d3+e3+f3+g3+h3+i3+j3+k3+l3+m3+n3+o3+p3+q3;

    

    // hardcode but able to use prompt in browser enviorment
     //var input = prompt();


    var how_many = 7; // number of people eating with us
       
     number_of_people_eating(how_many,mins,tot_cost);
    



if( tot_cost <= 500){

        console.log(" \n You better have deep pockets or consider a pay day loan");

} else {


if( tot_cost > 500){
                console.log(" \n Hopefully it's not cold out or you will be sleeping on the street or selling a kidney");
 } else {
 
        
    if(tot_cost >700){
        console.log("Tell the server you forgot your wallet in your car and dash")
    }


            }

    } 

console.log(" \n the total cost for all these meals would be:"+ tot_cost);


}





function number_of_people_eating(how_many,mins,tot_cost){

    var price_per_head, mean_wait_time;
 

    price_per_head = tot_cost / how_many;

    mean_wait_time = how_many / mins;

    console.log(" \n Average wait time will be:"+ mean_wait_time+ "\n Average price of dinnerwill be: "+ price_per_head);




return ; // return to function who called me  (SEE: Money wrench)
}





function generateMenu (){


return [{
name:'Steak',
time:5,
price:40
},{
name:'Burger',
time:4,
price:15
},{
name:'Shawarma',
time:4,
price:20
},{
name:'Pizza',
time:3,
price:10
},{
name:'Sushi',
time:3,
price:15
},{
name:'Lobster',
time:5,
price:50
},{
name:'Carpaccio',
time:5,
price:25
},{
name:'Chicken',
time:4,
price:10
},{
name:'Wild Rice',
time:2,
price:5,
},{
name:'Fries',
time:1,
price:5
},{
name:'Baked Potato',
time:1,
price:5
},{
name:'Salad',
time:1,
price:5
},{
name:'Coffee',
time:1,
price:0
},{
name:'Tea', // Drinks
time:1,
price:0
},{
name:'Pop',
time:1,
price:0
},{
name:'Beer', // Acohol
time:1,
price:5
},{
name:'Wine',
time:1,
price:10
}]
}
