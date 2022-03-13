import './normalize.css';
import './design/style.css'; 
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const listMenu = document.querySelectorAll("#navigation ul li");


listMenu.forEach(li => {
    li.addEventListener('click', () => {
        burger.classList.toggle('burgHover')
        menu.classList.toggle('menuHover')
    })
})



burger.addEventListener("click", e => {
    
    burger.classList.toggle('burgHover')
    menu.classList.toggle('menuHover')
})