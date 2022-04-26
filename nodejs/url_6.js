const url = require('url');

const testUrl = new URL('http://test.com:3000/hello.html?id=100&status=true')

// get complete url

console.log(testUrl.href);

console.log(testUrl.toString());

console.log(testUrl.protocol)
console.log(testUrl.host)

console.log(testUrl.hostname)

console.log(testUrl.pathname)

console.log(testUrl.search)

console.log(testUrl.searchParams)

testUrl.searchParams.forEach((value, key) => console.log(key, value))