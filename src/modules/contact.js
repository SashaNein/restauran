function createContact() { 
const contact = document.createElement('div');
contact.classList.add("contact");

const phoneNumber = document.createElement('p');
phoneNumber.textContent = "+46 79 484 39 30"

const address = document.createElement('p');
address.textContent = 'Drottninggatan 47, Stockholm'

const restaurantLocation = document.createElement('img');
restaurantLocation.src = 'images/map.png';

const headline = document.createElement("h2");
headline.textContent = "How to reach us"


  contact.appendChild(phoneNumber);
  contact.appendChild(address);
  contact.appendChild(restaurantLocation);

  return contact

}


function renderContact() {
	const main = document.getElementById("content");
	main.textContent = '';
	main.appendChild(createContact())
}

export default renderContact;