
function renderMenu() {
	
	content.innerHTML ='';
	const headline = document.createElement("h1");
	const p = document.createElement("p");
	content.appendChild(headline);
	content.appendChild(p);
	headline.textContent="This is our menu";
	p.textContent = "We have only very expensive stuff";
	

}

export default renderMenu;