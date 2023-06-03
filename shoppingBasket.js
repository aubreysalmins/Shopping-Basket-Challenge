const Candy = require('./candy')

class ShoppingBasket {
  constructor(basket = []) { // basket is an array of Candy prices
    this.basket = basket;
  }

  addItem(candy) {
    this.basket.push(candy.getPrice());
  }

  getTotalPrice() {
    let sum = 0
    this.basket.forEach( num => {
      sum += num
    });
    return sum
  }
}

module.exports = ShoppingBasket;