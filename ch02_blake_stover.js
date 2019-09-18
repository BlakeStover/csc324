function notify(text) {
	console.log(`\nTesting ${text} ... \n`);
}
/*****************************************************************************************************************
Looping a Triangle

Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

notes on my solution

    I wondered how to loop a traingle so I did a google search and found this link:
    https://stackoverflow.com/questions/40532776/looping-a-triangle-with-a-while-loop
*/
notify("Looping a Triangle"); 

for (let result = "#"; result.length <=7; result = result + "#")
console.log(result);

         
        //  This sets a for loop with result being the var for #. 
        //  Then it takes the result of # and measures the length 
        //  If the length of result is less then 7, it adds another # on a new line. 
        



/*************************************************************************************************************

FizzBuzz

Write a program that uses console.log to print all the numbers from 1 to 100, 
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, 
and for numbers divisible by 5 (and not 3), print "Buzz" instead.

Notes on my solution:
    I found this link to a github page with someone who worked on similar excercises: 
    https://github.com/heyitsolivia/eloquent-javascript-exercises/blob/master/chapter-2.md.
    I found that although these questions are similar, the way that the solutions are shown are 
    not quite how I would like them to be; 

This was the example that was given:

// for (let i=1; i<=100; i++) {             **This is a little too complicated for what I want to do; 
//     if ( !(i%5) && !(i%3) ) {              instead of making an if statement of not being divisible
//         console.log('FizzBuzz');           by 5 and not by 3, followed by else statements I would
//     } else if ( !(i%5) && (i%3)) {         rather have a solution that creates 2 different vars that 
//         console.log('Buzz');               
//     } else if ( !(i%3) ) {
//         console.log('Fizz');
//     } else {
//         console.log(i);
//     }
// }

Here is my solution that we worked on in class: */

notify("Fizzbuzz");

for( let i = 1; i <= 100; i += 1){
  let divByThree = i % 3 == 0;
  let divByFive = i % 5 == 0;
  if (divByThree){
     console.log("Fizz");
    } else if(divByFive && !divByThree){
     console.log("Buzz");
    } else {
        console.log(i);
    }
}

/*************************************************************************************************
Chessboard

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
 At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #


 * When you have a program that generates this pattern, define a binding size = 8 and change the program so 
 * that it works for any size, outputting a grid of the given width and height.

 ****************************************************************************************************************/
/* SOLUTION */

notify("Chessboard");

/* This excercise came from the same website as #2, but I like the way this one is set up. 
    After trying to rearrange the code, I found myself using this format to get the chessboard 
    the easiest way possible. */

let size = 8;       // sets the size of the chessboard to be 8
let block = '#';    // sets block as # for each chessboard place 
let space = ' ';    // sets a space for in between each # 

for (let i = 1; i <= size; i++) {  // sets i to be 1, and adding 1 progressively
  let line = ''; // sets line as a smaller space

  for (let y = 1; y <= size; y++){ // sets y to be 1, and adding 1 progressively
    if (i%2) {     // needs i = 0 and set to FALSE, y = 1 and set to TRUE
        if (y%2) {
            line = line + space;    // if i and y are both odd, then add a space to line
        } else {
            line = line + block;    // if it is anything else then add a block to line
        }
    } else {
        if (y%2) {
            line = line + block;    // if y is odd  then add a # to the space       
        } else {
            line = line + space;    // anything else then add a space to the line
        }
    }
  }

  console.log(line);    // logs to the console 
}

