
/**********************************************************************************************/
// Minimum

/* The previous chapter introduced the standard function Math.min that returns its smallest argument. 
We can build something like that now. Write a function min that takes two arguments and returns 
their minimum. */

var min = function(x, y) {
    return (x <= y) ? x : y;
};

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
console.log(min(4, 4));
// → 4


/**********************************************************************************************/
// Recursion

/* Define a recursive function isEven corresponding to this description. The function should 
accept a single parameter (a positive, whole number) and return a Boolean.
Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this? */

var isEven = function(num) {
    num = Math.abs(num); //convert to absolute value to account for negative numbers
    if (num === 0)
        return true;
    else if (num === 1)
        return false;
    else
        return isEven(num - 2);
};

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false
console.log(isEven(-10002));
// → true

/*********************************************************************************************/
// Bean Counting

/* Write a function countBs that takes a string as its only argument and returns a number that 
indicates how many uppercase “B” characters there are in the string. Next, write a function 
called countChar that behaves like countBs, except it takes a second argument that indicates 
the character that is to be counted (rather than counting only uppercase “B” characters). 
Rewrite countBs to make use of this new function. */

// I got help about this problem from this website https://www.w3schools.com/jsref/jsref_regexp_g.asp

var countBs = function(str) {      // sets up a function that calls to a string
    return str.match(/B/g).length; // uses regex g modifier to find all global matches of the word boundary and not stop after the 1st
};                                 // returns the number of word boundary matches to the console

var countChar = function(str, character) { // sets up a similar function to call to a string with a specific character
    var matchExp = new RegExp(character, 'g'); // matchExp will be the new regex that looks for a character and finds all global matches
    return str.match(matchExp).length; // finds a match to the character, returns the amount of matches found to the console
};

console.log(countBs('BBC'));
// → 2
console.log(countChar('kakkerlak', 'k'));
// → 4
