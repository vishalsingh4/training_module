// Variable and Scoping

// var i;

// console.log(i)

// i = 2;

// console.log(i)

// var --> Lexical Scoping (not Block Scope) --->  'use strict'

// var i = 2;
//     (function() {
//         var i = 3;
//         (function() {
//             console.log(i);
//             (function() {
//                 i = 6;
//                 console.log(i);
//             })();
//         })();
//     })();

//     console.log(i);

// Block Scope

// (function(){
//     var i = 1;

//     if(true) {
//         var i = 2;
//         console.log(i)
//     }

//     console.log(i)
// })();

// const

// const i = 1;

// // i =2;

// console.log(i);

// var constant = Object.freeze({
//     a: 1,
//     b: 2
// });

// constant.a  = 8;

// console.log(constant)

// var constant = {};

// Object.defineProperty(constant, 'firstName', {
//     value: 'Vishal',
//     writable: false,
//     enumerable: true,
//     configurable: true
// })

// constant.firstName = 'Test'
// constant['lastName'] = 'Singh'
// // constant = {
// //     lastName: 'Singh'
// // }
// console.log(constant);

// var myObj = {
//     get readOnlyValue() {return 'Vishal';}
// }

// console.log(myObj.readOnlyValue);

// const a = {
//     z: 1,
//     k: 5
// }

// a.z = 10;

// console.log(a)