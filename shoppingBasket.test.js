const Candy = require('./candy');
const ShoppingBasket = require('./shoppingBasket');

describe("Shopping Basket", () => {
  it("should initally return 0", () => {
    const basket = new ShoppingBasket() // is equivalent to const basket = new ShoppingBasket([]), because [] is the default value, and this is used when no arguments are passed when it is initialised
    const expected = 0
    const actual = basket.getTotalPrice()
    expect(expected).toEqual(actual)
  })

  it("should return the correct total price of a basket with multiple candies", () => {
    const basket = new ShoppingBasket()
    const snickers = new Candy('snickers', 1)
    const starburst = new Candy('starburst', 1.50)
    basket.addItem(snickers)
    basket.addItem(starburst)
    const expected = 2.50
    const actual = basket.getTotalPrice()
    expect(expected).toEqual(actual)
  })
})