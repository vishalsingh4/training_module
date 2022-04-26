/**
** Array.from - constructor Array
*/
/* 

console.dir(Array);
console.dir([]); */

// Make new array

/* const myArr = new Array(5).fill(0).map((item, index) => index); */
/* const myArr = Array.from({length: 5}, (item, index) => index); */


/* console.log(myArr) */

// strings to array

/* const str = 'rakesh';

console.log([...str]);
console.log(Array.from(str)); */


// function arguments

/* const myFn = function() {
  console.log(Array.from(arguments).join(''));
}

myFn('r', 'a', 'k', 'e', 's', 'h'); */

// unique array

/* const arr = [1,1,2,'a','a',2,3,4,5];

const uniqueArr = [...new Set(arr)];

const uniqueArr = Array.from(new Set(arr));

console.log(uniqueArr); */
