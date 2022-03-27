import './normalize.css';
import './design/style.css'; 
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const listMenu = document.querySelectorAll("#navigation ul li");
const burgerAction = () => {
    burger.classList.toggle('burgHover')
    menu.classList.toggle('menuHover')
}

listMenu.forEach(li => {
    li.addEventListener('click', burgerAction)
})



burger.addEventListener('click', burgerAction);
