/**
 * Spread - (...args)
 * Rest - (a,b,c, ...rest)
 */

// let test = function(...args) {
//     // console.log(Array.prototype.slice.call(arguments, 0));
//     // console.log([].slice.call(arguments, 0));
//     // console.log(arguments);
//     // console.log([...args]);
// }

// let test = function(a,b,c, ...rest) {
//     console.log(a,b,c,rest);
// }

// test(1,2,3,4);

/**
 * Array join problem
 */

// let arr1 = [1,2,3];
// let arr2 = [4,5,6];

// // console.log(arr1.concat(arr2), arr1, arr2);
// arr1.push(...arr2);
// console.log(arr1, arr2);

// console.log([...arr1, ...arr2]);