


/*

RE: LOOPS !



ASSIG.  LOOPS
File contains the following required outlined project


Exercise 1

Create a function that takes in a random array of numbers and logs only the even ones. You can use the arrays given below or create some of your own to test your function.

*/
console.log("\n EXERCISE \n Program started"); //debug



console.log(" \n This is going throught the second array now..")
const arr1 = [5,8,2,1,5,7,3,4,5,8,1,2,4,8,3,1,4,5]; // should log 8,2,4,8,2,4,8,4



var i;
var arr1_length = arr1.length;


for (i = 0; i < arr1_length; i++){
if (arr1[i] % 2 === 0){
console.log("This is a even number:"+ arr1[i]);
}


}





const arr2 = [15,26,74,12,3,6,9,1,2,5]; // should log 26,74,12,6,2

var a;
var arr2_length = arr2.length;


for (a = 0; a < arr2_length; a++){
if (arr2[a] % 2 === 0){
console.log("This is a even number:"+ arr2[a]);
}


}



/*
Exercise 2

Create a function that takes in an array of numbers and returns the value of the largest number in the array. Y
ou can use the example arrays from Exercise 1 to test your function.
*/


var random_array = [1,4,5,2,3,4,5, 100, 200, 600];

var arr_length = random_array.length; // hard code the size

var a;
var largest_element; // hold largest element
for(a = 0; a < arr_length; a++){  // increment through array

largest = random_array[a]; // largest == current array element

if(largest_element < random_array[a]); // compare
largest_element = random_array[a]; // tke greatest value

}
console.log(" \n EXERCISE (2) /n Our largest element is:"+largest_element);

/*
Exercise 3

Create a function that takes in an integer and prints all
 numbers from 1 to the given integer the number of times equal to the current loop index (ie. 1, 2, 2, 3, 3, 3, ...).
*/





var big_number = 20;
var ret_value = take_my_number(big_number); // enter function







function take_my_number(big_number){



var i,j;

big_number = 20;

for(i=1;i<=big_number;i++){

for(j=1;j<=i;j++)
console.log(i);
console.log("\b");
}



}


                                                    





/*
Exercise 4

Alter your answer to Exercise 3 to log the numbers in the form of a triangle.

*/



  var height = 20;



for (var i = 1; i <= height; i++) {
var row = '';
for (var j = 1; j <= i; j++) {
      row += i;

      if(row== 9){
        console.log(" \n I will have a step soon because Im going into double digits")
      }
    }
console.log(row);
  }

