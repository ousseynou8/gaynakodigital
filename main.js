import './normalize.css';
import './design/style.css'; 
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

burger.addEventListener("click", e => {
    burger.classList.toggle('burgHover')
    menu.classList.toggle('menuHover')
})