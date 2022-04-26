// Hoisting

// var  i = 2;

// var x = function() {
//     // var i = 1;

//     var y = function() {
//         console.log(i)
//         var  i =4;
//         // var  i =2;
//         // console.log(i)
//     };

//     y();
//     console.log(i);
// }

// x();


// Object.defineProperty(window, PI, {
//     value: 3.14,
//     writable: false
// })

// PI = 2; // should give me error

// console.log(PI)

/**
 * Constructors functions since declarations are hoisted to top 
 */
var foo = new Bar(); // this appears to work
console.log(foo.x)   // but doesn't

function Bar(x) {
    this.x = x || Bar.defaultX;
}
Bar.defaultX = 0;

/**
 * Classes and all es6 like let const are half hoisted  - temporal dead zone
 */

var foo = new Bar(); // ReferenceError
console.log(foo.x);

class Bar {
    constructor (x = Bar.defaultX) {
        this.x = x;
    }
}
Bar.defaultX = 0;