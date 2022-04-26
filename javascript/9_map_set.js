/**
 * Maps = es6 = unique keys as objects
 */

// Problem with objects

// var a = {};
// var b = {
//     z: 2
// };

// var result = {};

// result[a] = 'test';
// result[b] = 'rest';

// console.dir(result[a]);

// new Map

// let result = new Map();
// result.set(a, 'Vishal').set(b, 'Singh').set(a, 'Hey Mr.');
// result.delete(a);

// console.dir(result);

// for(let [key, value] of result.entries()) {
//     console.log(key, value);
// }

// console.log([...result]);

// weak Map - memory not getting garbage collected

// {
//     let a = {
//         b: [1,2]
//     }

//     // holding onto memory defined by let - block scope
//     // var map = new Map(); 
//     var map = new WeakMap();
//     map.set(a, 'Test');
// }

// console.log(map)




/**
 * Sets - Used to hold unique values...No literal, only constructor
 */

// const arr = [1,2,3];

// let set = new Set(arr);

// set.add(4).add(5).delete(1);

// // console.log(set.clear());

// // console.log(set.size);

// for(let item of set) {
//     console.log(item)
// }

// unique items of array
// const arr = [1,2,1,3,4,4,'q','q'];

// console.log([...new Set(arr)]);
// console.log(Array.from(new Set(arr)));

// WeakSets - only objects as keys and no Primary data types which are immutables
// for of cannot be applied

// let wSet = new WeakSet();
// wSet.add({a:1});

// class X {
//     constructor() {
//         wSet.add(this);
//     }

//     m1() {
//         if(!wSet.has(this)) {
//             throw new Error('Somrhitn')
//         }
//     }
// }
