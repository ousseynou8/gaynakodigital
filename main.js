import './normalize.css';
import './design/style.css'; 
const burger = document.getElementById('burger');

burger.addEventListener("click", e => {
    burger.classList.toggle('burgHover')
    
})