function renderHome() {
	content.innerHTML ='';
const headline = document.createElement("h1");
const p = document.createElement("p");
headline.textContent = "Yo this is Jessie";
p.textContent = "Hello there. We have a cool place";
content.appendChild(headline)

content.appendChild(p);
}

export default renderHome;