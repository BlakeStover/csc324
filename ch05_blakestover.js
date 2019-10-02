/********************************************************************************************/

// Flattening

var arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce(function(flat, current) {
  return flat.concat(current); 
}, []));

// → [1, 2, 3, 4, 5, 6]

/********************************************************************************************/

// Your own loop

function loop(start, test, update, body) {
    for (let value = start; test(value); value = update(value)) {
      body(value);
    }
  }
 
loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

/********************************************************************************************/

// Everything (write two methods)

// First methid, using for loop
function every(array, test) {
    for (let element of array) {
      if (!test(element)) {
        return false;
      }
    }
    return true;
  }
  
console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
  
// second method, using array.some

function every(array, test) {
    return array.some(test);
  }
  
console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

/********************************************************************************************/
