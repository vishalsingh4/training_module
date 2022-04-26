const fs = require('fs');

// READ OPERATION


// SYNC OPERATION

// try {
//     const data = fs.readFileSync('./testfile.txt', 'utf-8');
//     console.log(data);
// } catch(e) {
//     throw new Error(e)
// } finally {
//     console.log('read operation done')
// }

// console.log('outside');



// ASYNC OPERATION


// fs.readFile('./testfile.txt', 'utf-8', (err, data) => {
//     if(err) {
//         console.error(err);
//     }

//     console.log(data);
// });

// console.log('outside');








// WRITE OPERATION

// SYNC OPERATION

// try {
//    // fs.writeFileSync('./testfile.txt', 'World');

//     fs.appendFileSync('./testfile.txt', 'World');
// } catch(e) {
//     throw new Error(e)
// } finally {
//     console.log('write operation done')
// }

// console.log('outside');



// ASYNC OPERATION


// fs.appendFile('./testfile.txt', 'hello', (err) => {
//     if(err) {
//         console.error(err);
//     }

// });

// console.log('outside');





// DELETE OPERATION

// SYNC OPERATION

// try {
//     fs.unlinkSync('./testfile.txt');
// } catch(e) {
//     throw new Error(e)
// } finally {
//     console.log('delete operation done')
// }

// console.log('outside');



// ASYNC OPERATION


// fs.unlink('./testfile.txt', (err) => {
//     if(err) {
//         console.error(err);
//     }

// });
