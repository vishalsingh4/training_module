// PATH
const path = require('path');

// console.log(path.basename(__filename));

// console.log(path.dirname(__filename));

// console.log(path.extname(__filename));

// console.log(path.parse(__filename).base);

// console.log(path.join(__dirname, 'test', 'hello.js'));


// FS

const fs = require('fs');

// create directory

// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if(err) {
//         console.error(err);
//     }
//     console.log('directory created....')
// })

// create and write to file

// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Vishal Singh', err => {
//     if(err) {
//         console.error(err);
//     }
    
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'How are you ?', err => {
//         if(err) {
//             console.error(err);
//         }
//         console.log('write success....')
//     })
// })

// read file

// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//     if(err) {
//         console.error(err);
//     }

//     console.log(data);
// })


// re name file

fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'hellotest.txt'), (err) => {
    if(err) {
        console.error(err);
    }

})