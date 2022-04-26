/**
 * Functions with scope meaning closures are inner function that has all scope - global, outer and inner
 */

/**
 * Lexical scoping
 */

// var  i =1; // lexical scope

// const myFn = function() {
//     console.log(i);
// }

// myFn();

/**
 * Blocking scope
 */
// let myFn;

// if(true) {
//     let  i =1; // lexical scope

//     myFn = function() {
//         console.log(i);
//     }
// }

// // console.log(i);
// // console.dir(myFn);
// myFn();

/**
 * Calling one fn in another scope
 */

// let input = 2;

// let fn1 = function(input) {
//     let i = 1;
//      let j = 2;
//     return () => {
//         //  console.log(i, j);
//         return input + i;
//     };
// }

// console.log(fn1(input)());

// const t1 = new fn1(2);
// const t2 = new fn1(3);

// console.log(t1());
// console.log(t2());

/**
 * Loops
 */

// for(var i = 0; i<3; i++) {
//     (function(i) {
//         setTimeout(() => {
//             console.log(i)
//         }, 1000); 
//     })(i);

//    ((i) => setTimeout(() => {
//         console.log(i)
//     }, 1000))(i);
// }
// console.log('hey'); -  check settimeout

// i = 0; f(closure: i =0)
// i = 1; f(closure: i =1) -- let created new variable everytime loop runs
// i = 2; f(closure: i =2)

// i =0 ; f(closure: i =0) -  var lexical/ function scope, doesnot create new variable.. reassigns same variable again n again
// After 2nd loop , above i changes to i =1 --> f(closure: i = 1) and so on
// i =1 ; f(closure: i =1)
// After 2nd loop , above i changes to i =2 --> f(closure: i = 2) and so on
// i =2 ; f(closure: i =2)


/**
 * Array method flat flatMap reduceRight copywithin
 */

/** flat - 2d array to 1d array */

// const arr = [[1,2,3], [4,5,6]];

// console.log(arr.flat(1));

// const arr = [[1,2,3], [4,[[[[[[[[[5]]]]]]]]],6]];

// console.log(arr.flat(Infinity));

/**flatMap - combine 2 arrays into 1 */

// const arr1 = [1,2,3];

// const arr2 = ['Eena', 'Meena', 'Deeka'];

// //[1, 'Eena', 2, 'Meena', 3, 'Deeka']
// // const result = arr1.map((item, index) => [item, arr2[index]]);
// const result = arr1.flatMap((item, index) => [item, arr2[index]]);

// console.log(result);

/**
 * combine array items (join) and reverse at one go
 */

// const arr = ['l','a','h','s','i','v'];

// // const res = arr.reduce((acc, item) => acc + item);

// const res = arr.reduceRight((acc, item) => acc + item);

// console.log(res);

/**Copying array with own array */

// const arr1 = [0,1,2,3,4,5,6,7,8,9];

// console.log(arr1.copyWithin(0)) -- array target index
// console.log(arr1.copyWithin(1))
// console.log(arr1.copyWithin(0, 3)) - start Index
// console.log(arr1.copyWithin(0, 3, 4)) - end Index