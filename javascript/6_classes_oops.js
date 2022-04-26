// classes  - blue print -> multiple object instances create
// instance property and instance methods
/**
 * Basic definition
 */

// class Human {

//     // setup - run once during object's lifetime

//     constructor(_firstName, _lastName) {
//         this.firstName = _firstName;
//         this.lastName = _lastName;
//     }

//     description() {
//         return `Hi! My name is ${this.firstName} ${this.lastName}`;
//     }
// }

// const person1 = new Human('Vishal', 'Singh');
// const person2 = new Human('Tulip', 'Lemon');

// console.log(person1.description());
// console.log(person2.description());

/**
 * setters and getters
 * These are methods but are used like object properties
 */

// class Square {
//     constructor(_width) {
//         this.width = _width;
//     }

//     get area() {
//         return `My area is ${Math.pow(this.width, 2)}`;
//     }

//     set area(area) {
//         this.width = Math.sqrt(area);
//     }
// }

// const square = new Square(5);

// console.log(square.area);

// square.area = 16;

// console.log(square);

/**
 * Static methods
 * 
 * No need to create new objects to call these methods - utility methods of classes
 * 
 * Cannot use this inside static method
 */

// class Square {
//     constructor(_width) {
//         this.width = _width;
//     }

//     static comp(a ,b) {
//         console.log(`I am a square with dimension ${this.width}`);
//         return a === b;
//     }
// }

// const sq1 = new Square(6);
// console.log(Square.comp(6,7));

/**
 * Inheritance
 */

// class Parent {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     desc() {
//         console.log(this.name, this.age, 'Parent')
//     }
// }

// class Child extends Parent {
//     constructor(name, age, gender) {
//         super(name, age);
//         this.gender = gender;
//     }

//     childDesc() {
//         console.log(this.name, this.age, this.gender, 'Child')
//     }
// }

// const parent = new Parent('Vishal', 28);
// const child = new Child('Child', 2, 'M');

// parent.desc();
// child.childDesc();
// child.desc();
// parent.childDesc(); // error

// const childArr = [
//     new Child('Tata', 22, 'M'),
//     new Child('Bata', 23, 'F')
// ];

// for(let child of childArr) {
//     child.childDesc();
// }

/**
 * Polymorphism
 * 
 * overriding or changing or extending functionality of a parent method in child class
 */

class Parent {
    constructor(name) {
        this.name = name;
    }

    desc() {
        console.log(this.name, 'Parent');
    }
}

class Child extends Parent {
    constructor(name){
        super(name);
    }

    /**
     * If not present will look down the prototype chain and search for the method
     */
    
    desc() {
        super.desc();
        console.log(this.name, 'Child');
    }
}

const p1 = new Parent('Vishal');
const c1 = new Child('Tata');

p1.desc();
c1.desc();


