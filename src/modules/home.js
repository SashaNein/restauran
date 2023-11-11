function createHome() {
	const home = document.createElement('div');
	home.classList.add('section');
	const headline = document.createElement("h3");
	headline.textContent = 'Kit Kat Coffee Shop'


	const welcome = document.createElement("p");
	welcome.textContent = 'welcome to our place where everyone understands.'

	const description = document.createElement('p')
	description.textContent = 'We know what you\'ve been through. Come here to unwind and have a little drink after raving all night.'


	home.appendChild(headline)
	home.appendChild(welcome)
	home.appendChild(description)

	return home;
}


function renderHome() {
	const main = document.getElementById("content");
	main.textContent = '';
	main.appendChild(createHome())}

export default renderHome;