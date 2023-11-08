function renderContact() {
	content.innerHTML ='';
	const headline = document.createElement("h1");
	const p = document.createElement("p");
	content.appendChild(headline);
	content.appendChild(p);
	headline.textContent="These are our contacts";
	p.textContent = "Never call us";
}

export default renderContact;