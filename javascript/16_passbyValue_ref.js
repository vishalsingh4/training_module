/**
 * Pass by value means passing variable to function will not change the value
 * Pass by reference means passing variable to function will update the value
 * Debatable but JS is pass by reference
 */

// let a = 1;

// let change = function(target) {
//     target = 2;
// }

// change(a);

// console.log(a);
// // 1 bcz its pass by value - ("=" creates a new memory and assign variable to it)

// let a = {num: 1};

// let change = function(target) {
//     target.num = 2;
// }

// change(a);

// console.log(a);
// // 1 bcz its pass by reference - (changing property of an object doesn't creates a new memory)

// let a = {num: 1};

// let change = function(target) {
//     target = {};
// }

// change(a);

// console.log(a);
// //  {num: 1} bcz its pass by value - ("=" creates a new memory and assign variable to it)

/** Example use case -- swapping operation and JS is pass by reference*/

// var a= {num: 1};
// var b = a;

// // Step 1 - changes both
// a.num = 2;

// // Step 2 - doesn;t changes both

// a = {};

// console.log(a)
// console.log(b)





