const body = document.querySelector('body')
const grandParent = document.querySelector('.grand-parent')
const parent = document.querySelector('.parent')
const child = document.querySelector('.child')
const divs = document.querySelectorAll('div')

// divs.forEach((div)=>{
//     div.addEventListener('click', (e)=>{
//         console.log('click');
//     })
// }) try didint work

// document.addEventListener('click', (e)=>{
//     if(e.target.matches('div')){
//         console.log('yh');
//     }
// }) worked

globalAccess('click', 'div', (e)=>{
    console.log('worked');
}) //top

// document.addEventListener('click', (e)=>{
//     let inClass = e.target.classList
//     if(inClass.contains('div')){
//         console.log('hello'); 
//     }
// })  try out didint work in this case

function globalAccess(type, selector, callback){
    document.addEventListener(type, (e)=>{
        if(e.target.matches(selector)){callback(e)}
    })
} //advace workout for top

const newDiv  = document.createElement('div')
newDiv.classList.add('grand-parent')
body.appendChild(newDiv)


