/**
 * Decorators are just modifying the behavior of the function or method passed to it by returning a new function.
 * Decorators are the design pattern that allows behavior to be added to an individual object, either statically or dynamically without affecting the behavior of other objects from the same class.
 * They're implemented by wrapping one piece of code with another or apply a wrapper around a function in JavaScript.
 */

// let shapeDesc = function(desc) {
// 	return function(target) {
//     target.desc = desc;
// 	}
// }

// let isRectangle = function(target){
// 		target.rect = 'NO'; 
// }

// @shapeDesc('Square1')
// @isRectangle
// class Shape {

// }

// console.log(`Hi my shape is: ${Shape.desc}`)
// console.log(`Hi my shape is: ${Shape.rect}`)


/**
 * Property decorators
 */

//  const readOnly = function(target, key, descriptor) {
// 	console.log(target, key, descriptor);
//   descriptor.writable = false;
//   return descriptor;
// }

// class Car {
// 	constructor(color) {
//   	this.color = color
//   }
  
//  @readOnly
//  getColor() {
//     return this.color;
//   }
// }

// // no method override
// /* Object.defineProperty(Car.prototype, 'getColor', {
//   value: function() {
//     return this.color;
//   },
//   writable: false,
//   enumerable: true,
//   configurable: true
// }); */

// const redCar = new Car('red');

// redCar.getColor = function() {
//   return 'blue';
// }
// console.log(redCar.getColor())


