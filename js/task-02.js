const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');
const items = [];
const makeItem = (ingredient) => {
  for (let i = 0; i < ingredients.length; i += 1) {
    const element = document.createElement('li');
    element.classList.add('item');
    element.textContent = ingredient[i];
    items.push(element);
  }
  return items;
}
listEl.append(...makeItem(ingredients));
console.log(listEl);

