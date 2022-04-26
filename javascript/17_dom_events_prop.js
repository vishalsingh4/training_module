/**
 * DOM methods can be accessible through document property exposed on client window
 */

// console.log(document)
// console.log(document.body)

//1. Create element

// let divEle = document.createElement('div');

//2. Add element

// append [text, overloaded text (arg1, arg2) and node]
// appendChild (node only)

// document.body.append('Hello','World')
// document.body.append(divEle);

// document.body.appendChild(divEle);

// 3. Add content

// textContent - shows all the elements  - even if display - none; shows them the same way as html
// innerText - shows text content that are visible.

// <div>
//     <span>Hi</span>
//     <span style={{display: 'none'}}>Bye</span>
// </div>

// divEle.textContent = 'Hellp';

// 4. Add HTML

// innerHtml
// divEle.innerHtml = '<strong>Hellp</strong>';

// 5. Remove element
// <div>
//     <span id='hi'>Hi</span>
//     <span id='bye'>Bye</span>
// </div>

// const div = document.querySelector('div');
// const spanHi = document.querySelector('#hi');
// const spanBye = document.querySelector('#bye');

// spanBye.remove();
// //Or
// div.removeChild(spanBye);



// 6. Attributes
// <div>
//     <span title='hi' id='hi' data-test='abcd' data-longer-name='vishal'>Hi</span>
//     <span id='bye'>Bye</span>
// </div>

// const div = document.querySelector('div');
// const spanHi = document.querySelector('#hi');
// const spanBye = document.querySelector('#bye');

// spanHi.getAttribute('title');

// Or

// spanHi.title
// spanHi.id

// spanHi.setAttribute('title', 'test')

// spanHi.removeAttribute('title')

/////////Data Set

// console.log(spanHi.dataset.test)
// console.log(spanHi.dataset.longerName)

// spanHi.dataset.newTest = 'new Test'

////////// Classes
{/* <span id='bye' class='hi1 hi2'>Bye</span> */}
// const spanBye = document.querySelector('#bye');
// console.log(spanBye.classList)
// spanBye.classList.add('test')
// spanBye.classList.remove('hi1')
// spanBye.classList.toggle('hi2') - add/remove based on presence
// spanBye.classList.toggle('test', true) - adds it
// spanBye.classList.toggle('test', false) - removes it

//// CSS properties

// spanBye.style.color = 'red';
// spanBye.style.backgroundColor = 'green'; // background-color


// Event listeners - bubble, capture

{/* <div class='gp'>
  <div class='p'>
    <div class='c'>
    </div>
  </div>
</div>

.gp {
    width: 300px;
    height: 300px;
    border: 1px solid black;
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .p {
    width: 200px;
    height: 200px;
    border: 1px solid green;
    background: green;
     display: flex;
    justify-content: center;
    align-items: center;
  }
  .c {
    width: 100px;
    height: 100px;
    border: 1px solid blue;
    background: blue;
  } */}

//   const gp = document.querySelector('.gp')

//   const p = document.querySelector('.p')

//   const c = document.querySelector('.c')

//   // multiple event listeners can be attached and they run in the same order as they're defined

//   // Capture... element.... bubble
//   gp.addEventListener('click', e => {
//       console.log('gp')
//   }, {capture: true});

// //   gp.addEventListener('click', e => {
// //     //   console.log(e.target)
// //   })

// p.addEventListener('click', e => {
//     console.log('p')
//   })

//   c.addEventListener('click', e => {
//     console.log('c')
//   })

//   document.addEventListener('click', e => {
//     console.log('c')
//   });

//   // run event only once

//   gp.addEventListener('click', e => {
//     console.log('gp')
// }, {once: true});


// // event delegation

// gp.addEventListener('click', e => {
//     // delegating event based on origin
//     if(e.target.matches('div')) { // querySelector
//         console.log('gp')
//     }
// });


