const header =document.querySelector("header");
window.addEventListener('scroll' , function(){
    header.classList.toggle("sticky" , this.window.scrollY > 0);
})

let menu = document.querySelector('#menu-icon');
let navmenu=document.querySelector('.navmenu');
menu.onclick =() => {
    menu.classList.toggle('bx-x')
    navmenu.classList.toggle('open')
}



const link =document.querySelector("link");
window.addEventListener('scroll' , function(){
    link.classList.toggle("sticky" , this.window.scrollY > 0);
})

let menus = document.querySelector('#menu-icons');
let linkmenu=document.querySelector('.linkmenu');
menus.onclick =() => {
    menus.classList.toggle('bx-x')
    linkmenu.classList.toggle('opens')
}
