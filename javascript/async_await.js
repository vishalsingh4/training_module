// Asynchronous code execution
// Callbacks **********

// const data = [
//     {
//         id: 1, name:'Rakesh'
//     },
//     {
//         id: 2, name:'Feroz'
//     }
// ];

// const getData = () => {
//     const ulEle = document.createElement('ul');

//     setTimeout(() => {
//         data.forEach(item => {
//             const liEle = document.createElement('li');
//             liEle.innerText = item.name;
//             ulEle.appendChild(liEle);
//         });

//         document.body.appendChild(ulEle);
//     }, 1000);
// };

// const createData = (cb) => {
//     const addData = {
//         id: 3, name: 'Abhishek'
//     };

//     setTimeout(() => {
//         data.push(addData);
//         cb();
//     }, 3000);
// };

// createData(getData);
// //getData();


// Promises - es6 ***********
// new Promise((resolve, reject) => do whatever)
// Promise.resolve('abcd')

// const data = [
//     {
//         id: 1, name:'Rakesh'
//     },
//     {
//         id: 2, name:'Feroz'
//     }
// ];

// const getData = () => {
//     setTimeout(() => {
//         const ulEle = document.createElement('ul');
//         data.forEach(item => {
//             const liEle = document.createElement('li');
//             liEle.innerText = item.name;
//             ulEle.appendChild(liEle);
//         });

//         document.body.appendChild(ulEle);
//     }, 1000);
// };

// const createData = (addData) => {

//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             data.push(addData);

//             const hasError = true;

//             if(!hasError) {
//                 resolve()
//             } else {
//                 reject('Something wrong....')
//             }
//             //cb();
//         }, 3000);
//     });
// };

// const addData = {
//     id: 3, name: 'Abhishek'
// };
// // createData(addData, getData);

// createData(addData)
//     .then(getData)
//     .catch(err => console.log(err))

// Promise.all ********

// const p1= new Promise((resolve, reject) => setTimeout(resolve, 2000, 'p1'));
// const p2 = Promise.resolve('p2');
// const p3 = 10;
// const p4 = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());

// Promise.all([p1,p2,p3,p4]).then(values => console.log(values));


// Async await - es6 - better syntax *********
// async function fnName { await whatever...}

// const getData = () => {
//     setTimeout(() => {
//         const ulEle = document.createElement('ul');
//         data.forEach(item => {
//             const liEle = document.createElement('li');
//             liEle.innerText = item.name;
//             ulEle.appendChild(liEle);
//         });

//         document.body.appendChild(ulEle);
//     }, 1000);
// };

// const createData = (addData) => {

//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             data.push(addData);

//             const hasError = false;

//             if(!hasError) {
//                 resolve()
//             } else {
//                 reject('Something wrong....')
//             }
//             //cb();
//         }, 3000);
//     });
// };

// async function test() {

//     const addData = {
//         id: 3, name: 'Abhishek'
//     };

//     await createData(addData);

//     getData();
// }

// test();

// async await with fetch ********
// async function fetchPosts() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await response.json();

//     console.log(data);
// }

// fetchPosts();
