const add = require('./app_1');
const {test, rest} = require('node-test');
const _ = require('lodash');
const EventLogger = require('./eventEmitters')

const myEvent = new EventLogger();

myEvent.on('log', data => console.log(data));

myEvent.log('Hello World')

myEvent.log('test data')

// console.log(add())
// console.log(test())
// console.log(rest())

// var arr = [1,2,'', false,3];

// var result = _.compact(arr);

// console.log(result);