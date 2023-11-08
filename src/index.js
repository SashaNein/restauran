import _ from 'lodash';
import Icon from './food.jpg';
import './style.css';
import renderMenu from './modules/menu'
import renderHome from './modules/home'
import renderContact from './modules/contact'


const content = document.getElementById("content");
const img = new Image(700, 400);
img.src = Icon;



const homeBtn = document.getElementById('home')
const menuBtn = document.getElementById('menu')
const contactBtn = document.getElementById('contact')
homeBtn.addEventListener("click", renderHome)
menuBtn.addEventListener("click", renderMenu)
contactBtn.addEventListener("click", renderContact)
 
renderHome()






