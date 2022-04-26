/**
 * call functions with different object context
 */

// const test = function(a,b,c) {
//     return this.item + a + b + c;
// }

// const obj = {
//     item: 3
// };

// console.log(test.call(obj, 2, 4,5));
// console.log(test.apply(obj,[2, 4,5]));

// // bind returns instance of the function
// const instance = test.bind(obj, 2, 4,5);

// console.log(instance(2, 4,5)); // good way to pass arguments to fn

/**
 * Application
 * 1st
 */

// const button = function(color) {
//     this.color = color;
// }

// button.prototype = {
//     //latest es5 syntax
//     getColor() {
//         console.log(`Button color is: ${this.color}`)
//     }
// };

// const b1 = new button('red');

// // const fnInstance = b1.getColor;

// const fnInstance = b1.getColor.bind(b1);

// fnInstance();

// /**
//  * 2nd
//  */
// let myComponent = {
//     asyncFn(fn) {
//         fn();
//     },
//     consolelog() {
//         console.log('printed')
//     },
//     secondLog() {
//         console.log('second printed');
//     },
//     render() {
//         // let that = this;
//         this.asyncFn(this.consolelog);
//         this.asyncFn(this.secondLog);
//         this.asyncFn(() => {
//             this.consolelog();
//         });
//         this.asyncFn(function() {
//             this.consolelog();
//             this.secondLog();
//         }.bind(this));
//     }
// };

// myComponent.render();