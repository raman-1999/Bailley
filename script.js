const body = document.querySelector('.content');
const loader = document.getElementById('loader')
const header = document.querySelector('.header');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');


var isActive = false

window.addEventListener('scroll', () => {
    header.classList.toggle('active', window.scrollY > 0);
    // navbar.classList.toggle('active', window.scrollY > 0);
    

})


window.addEventListener("load",()=>{
    setTimeout(()=>{
        loader.style.display='none'
        body.style.display = 'block'
    },3000)
})

hamburger.addEventListener('click', ()=>{
    isActive = !isActive
    hamburger.classList.toggle('active')  
    header.classList.toggle('expand');

  })

//   hamburger.addEventListener("click",()=>{
//     if(isActive){
//         setTimeout(()=>{
//             navLinks.style.display='block'
//         },3000)
//     }
    
// })




