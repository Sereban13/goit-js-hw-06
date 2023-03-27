const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIng = document.querySelector('#ingredients')

const newIngredients = ingredients.map(ingredient => {
  const listIngridients = document.createElement('li');
  listIngridients.classList.add('.item');
  listIngridients.textContent = ingredient;
  return listIngridients;

})

console.log(newIngredients);

listIng.append(...newIngredients);