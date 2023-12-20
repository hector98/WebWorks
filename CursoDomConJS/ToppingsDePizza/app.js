//const container = document.getElementById('container');
//console.log(container);
//const toppings = document.getElementsByClassName('topping');
//console.log(toppings);
//const primerTopping = document.querySelector('.topping');
//primerTopping.style.backgroundColor = 'blue';

const toppings = document.getElementsByClassName('topping');
function mostrarClick(e) {
		console.log(e.target.innerText);
}

for (const topping of toppings)
{
		topping.addEventListener('click', mostrarClick);
}
