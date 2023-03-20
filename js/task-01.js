const listItems = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${listItems.length}`);

listItems.forEach((element) => {
  
    console.log(`Category: ${element.querySelector('h2').textContent}`);
   
    console.log(`Elements: ${element.querySelectorAll('li').length}`)
});