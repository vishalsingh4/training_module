//es6 / e7/ e8

//***** multi line strings 
// const test = `123
// 123`;

// console.log(test);

//***** */ destructure

// const obj = {
//     a: 1,
//     b: 2
// }

// const {a: z, b: k} = obj;

// // console.log(a, b)
// console.log(z, k)

// const [a, b] = arr = [1,2];

//**** */ for -of

// for(let value of 'vishal') {
//     console.log(value)
// }

// //**** */ spread 

// var a = {
//     a: 1
// }

// var b = {
//     b: 1
// }

// console.log({...a, ...b});

//**** */ rest 
// function test(a,b,...args) {
//     console.log(a, b, args);
// }

// test(1,2,3,4,5,6);

// //**** */ includes - not supported by IE

// console.log([1,2,3].includes(2))

// let const

// if(false) {
//     var test = 'example';
// }

// console.log(test);

// var test;

// // if(false) {
// //     test = 'example';
// // }

// const 

// import 

import {abc} from './abc';

// padStart/ padend
str.method(lenToPrint, charToAdd)

// class - properties static, getter/setter, prototypes, inheritance, new keyword, this in funtion constructors

// async await 
function getData() {
    fetch(utl).then(data => data.json()).then(json => json[0]).catch(err => console.log(err))
}

async function getData() {
    try {
        const res = await fetch(utl)
        const data = await res && res.json()
    }catch(e) {
        throw new Error('error')
    }
}

// Sets/ Map

// Set - add /has/delete/size/ clear/ foreach




