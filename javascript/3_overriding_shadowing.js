var global = 'global';

var k = function() {
    // global = 'overidden' // overriding
    var global = 'overidden' // shadowing 
    console.log(global);
};

k();
console.log(global);