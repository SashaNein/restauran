function createBreakfastMenu() {

	const breakfast = document.createElement('div');
	breakfast.classList.add('section')

	breakfast.appendChild(
		addItem(
			'Avocado toast',
			'With fresh tomatoes, avocados, and the best olive oil'
		));
	breakfast.appendChild(
		addItem(
			'Eggs and bacon',
			'Classics. Speaks for itself'
			));
	breakfast.appendChild(
		addItem(
			'Waffles and berries',
			'Sweet, sour, gorgeous'
			))
	breakfast.appendChild(
		addItem(
			'Pancakes',
			'With ice cream, bacon or whipped cream - at your wish'
			));
	return breakfast;

}


function createCoffeeMenu() {

	const coffee = document.createElement('div');
	coffee.classList.add('section');

	coffee.appendChild(
		addItem(
			'Espresso',
			'Nothing more to say'
		));
	coffee.appendChild(
		addItem(
			'Capuccino',
			'For milk lovers'
			));
	coffee.appendChild(
		addItem(
			'Flat white',
			'A bit stronger, perhaps?'
			));
	coffee.appendChild(
		addItem(
			'Latte',
			'Luscious foam, best coffee for syrups'
			));
	return coffee;


}

function createDrinksMenu() {

	const drinks = document.createElement('div');
	drinks.classList.add('section')
	drinks.appendChild(
		addItem(
			'Aperol Spritz',
			'Brunch, anyone?'
		));
	drinks.appendChild(
		addItem(
			'Spring flower',
			'Gin, berries and sakura petals... consider it.'
			));
	drinks.appendChild(
		addItem(
			'Local beer',
			'Best choice of local breweries. Will not disappoint you.'
			));
	drinks.appendChild(
		addItem(
			'Spirits',
			'Hard week? Just ask us.'
			));
	return drinks;

}

function addItem(name, description) {
 	const item = document.createElement('div');
 	item.classList.add('menu-item')

 	const itemName = document.createElement('h3');
 	itemName.textContent = name;

 	const itemDesc = document.createElement('p');
 	itemDesc.textContent = name;

 	const itemPic = document.createElement('img');
 	itemPic.src = `images/${name.toLowerCase()}.png`;
  	itemPic.alt = `${name}`;

  	item.appendChild(itemPic);
  	item.appendChild(itemName);
  	item.appendChild(itemDesc);

  	return item; 
}





function renderMenu() {
	const main = document.getElementById("content");
	main.textContent = '';


	const menu = document.createElement('div');



	const breakfastButton = document.createElement('button');
	breakfastButton.innerHTML = 'breakfast'
	const coffeeButton = document.createElement('button');
	coffeeButton.innerHTML = 'coffee'
	const drinksButton = document.createElement('button');
	drinksButton.innerHTML = 'drinks'

	main.appendChild(breakfastButton)
	main.appendChild(coffeeButton)
	main.appendChild(drinksButton)
	main.appendChild(menu);
	menu.appendChild(createBreakfastMenu())

	breakfastButton.addEventListener('click', function(e) {
		menu.textContent = '';
		menu.appendChild(createBreakfastMenu())
	})

	coffeeButton.addEventListener('click', function(e) {
		menu.textContent = '';
		menu.appendChild(createCoffeeMenu())
	})
	drinksButton.addEventListener('click', function(e) {
		menu.textContent = '';
		menu.appendChild(createDrinksMenu())
	})
	

}

export default renderMenu;