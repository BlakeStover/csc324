
// THE SUM OF A RANGE

function range (){
    var array = []; 
    var lower = Math.min.apply(null, arguments);    
    var upper = Math.max.apply(null, arguments);    

    for (var i=lower;i<=upper;i++){  
        array.push(i);  
    }
    return array;  
} 

function sum(array){  
    return  array.reduce((x,y)=>x+y,0);
} 

console.log(range(1, 10)); 
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1)); 
// [-1, 0, 1, 2, 3, 4, 5]
console.log(sum(range(1, 10)));
// 55


/********************************************************************************************/

// REVERSING AN ARRAY

function reverseArray(input){
    var output = [];
    for (let i = 0; i < input.length; i++){
      output.unshift(input[i]);
    }
    return output;
}
  
  function reverseArrayInPlace(input){
     for (let i = 1; i < input.length; i++){
       var remove = input.splice(i,1)
         input.unshift(remove[0]);
      }
   return input;
}
    
  console.log(reverseArray(["A", "B", "C"]));
  // → ["C", "B", "A"];
  console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));
  // → [5, 4, 3, 2, 1]
  console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6]));
  // → [6, 5, 4, 3, 2, 1]


/*******************************************************************************************/

// DEEP COMPARISON

var deepEqual = function (x, y) {
if (x === y) {
    return true;
}
else if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
    if (Object.keys(x).length != Object.keys(y).length)
    return false;

    for (var prop in x) {
    if (y.hasOwnProperty(prop))
    {  
        if (! deepEqual(x[prop], y[prop]))
        return false;
    }
    else
        return false;
    }
    return true;
}
else 
    return false;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true

