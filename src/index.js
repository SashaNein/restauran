import _ from 'lodash';
import Icon from './food.jpg';
import './style.css';
import renderMenu from './modules/menu'


const content = document.getElementById("content");
const img = new Image(700, 400);
img.src = Icon;



const homeBtn = document.getElementById('home')
const menuBtn = document.getElementById('menu')
const contactBtn = document.getElementById('contact')
homeBtn.addEventListener("click", renderHome)
menuBtn.addEventListener("click", renderMenu)
contactBtn.addEventListener("click", renderContact)

//Home module 
renderHome()

function renderHome() {
	const headline = document.createElement("h1");
const p = document.createElement("p");
headline.textContent = "Yo this is Jessie";
p.textContent = "Hello there. We have a cool place";
content.appendChild(headline)
content.appendChild(img);
content.appendChild(p);
}


//Menu module 


//Contact module 
function renderContact() {
	content.innerHTML ='';
	headline.textContent="These are our contacts";
	p.textContent = "Never call us";
	content.appendChild(headline);
	content.appendChild(p);
}

