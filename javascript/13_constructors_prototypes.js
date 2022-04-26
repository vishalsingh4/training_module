/**
 * 
 * Constructors are functions which can be called using new Keyword and can be used to create
 * multiple instance of same object.
 * Every constructor has property called prototypes which can be used to add methods to it.
 */

// const add = function(x, y) {
//     return x+y;
// }

// const sum = add(2,3);
// console.log(sum);

// const Car = function(_color) {
//     // if(!new.target) throw new Error('Car must be called with new keyword');
//     // this.color = color;

//     this.setColor = function(color){
//         _color =color; // private variables --> Closures
//     }

//     this.getColor = function() {
//         return _color;
//     }
// }

// const redCar = new Car('red');
// // const redCar = Car('red'); // this ---> window

// console.log(redCar.getColor())

/**
 * Prototypes.
 * Methods keep looking down the prototype chain.
 */

// const Car = function(color) {
//     this.color = color;
//     // this.getColor = function() {
//     //     return this.color;
//     // }
// }

// Car.prototype.getColor = function() {
//     return this.color;
// }

// Object.prototype.toString = function() {
//     return `${this.color}`
// }

// const redCar = new Car('red');
// console.log(redCar.toString())
// console.log(redCar instanceof Car)