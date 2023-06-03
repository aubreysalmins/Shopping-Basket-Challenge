const Candy = require('./candy');

describe("Candy", () => {
  it("should return the name of a candy", () => {
    const firstCandy = new Candy('snickers', 1) 
    const expected = 'snickers'
    const actual = firstCandy.getName()
    expect(expected).toEqual(actual)
  })

  it("should return the price of a candy", () => {
    const snickers = new Candy('snickers', 1)
    const expected = 1
    const actual = snickers.getPrice()
    expect(expected).toEqual(actual)
  })
})