// ### Task-4

// What will be the result of the following codes:

// var a = isNaN(‘11’);
// console.log(a);

// var b = isNaN(2-10);
// console.log(a);
/*
Explain your answers.
[01. a = false]
[02. b = false]
*/
// isNan checks the value if it is not a number then it gives true but in both case the value is numeric so the output will came false...
var a = isNaN('11');  // Use straight single quotes here
console.log(a);  // Should output: false

var b = isNaN(2 - 10);
console.log(b);  // Should output: false

