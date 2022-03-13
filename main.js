import './normalize.css';
import './design/style.css'; 
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const menuList = document.querySelectorAll('#navigation ul li');
const menuAction = e => {
    e.preventDefault;
    burger.classList.toggle('burgHover')
    menu.classList.toggle('menuHover')
}
// Click sur chaque élement du menu
menuList.forEach(li => {
    li.addEventListener("click", menuAction)
})

// Click sur le burger
burger.addEventListener("click", menuAction)