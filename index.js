const Candy = require('./candy');
const ShoppingBasket = require('./shoppingBasket');

const candy = new Candy('Mars', 4.99);

console.log(candy.getName());
console.log(candy.getPrice());

const basket = new ShoppingBasket;

console.log(basket.getTotalPrice());
basket.addItem(candy);
console.log(basket.getTotalPrice());

basket.addItem(new Candy('Starburst', 1.50));
basket.addItem(new Candy('Starburst', 1.50));

console.log(basket.getTotalPrice());