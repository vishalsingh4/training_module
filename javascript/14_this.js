'use strict';

this.name = 'Vishal';

// console.log(this.name);

const getName = function() {
    //let that = this;
    let innerFn = function() {
        console.log(this.name)
    }

    // innerFn.call(this);
    //innerFn.bind(this)();

    // fat arrow fn
}

this.desc = {
    name: "Vishal1",
    // getName() {
    //     console.log(this.name)
    // }
}

// this.desc.getName();

let desc = {
    name: 'Vishal2',
    // getName() {
    //     console.log(this.name)
    // }
}

// desc.getName();

getName.call(this);
getName.call(desc);

// Function constructors

let makeObject = function(name) {
    this.name = name;
}

makeObject.prototype =  {
    getName() {
        console.log(this.name);
    }
}

let obj1 = new makeObject('test');
obj1.getName();

/**
 * Above example can be converted to classes
 */

 class makeObjectClass {
     constructor(name){
         this.name = name;
     }
     getName() {
        console.log(this.name);
    }
}

let obj2 = new makeObjectClass('test');
obj2.getName();
