const itemsEl = document.querySelectorAll('.item');
const numbOfCategories = itemsEl.length;
console.log(`Number of categories: ${numbOfCategories}`);

for (let item of itemsEl) {
    const categorieEl = item.firstElementChild;
    const elementsListEl = item.lastElementChild;
    const elementsEl = elementsListEl.children;
    console.log(`Category: ${categorieEl.textContent}`);
    console.log(`Elements: ${elementsEl.length}`);
}