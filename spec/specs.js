describe("PizzaOrder", function() {
  var testPizzaOrder = new PizzaOrder(1, "large", 14);

  it ("collects user input, and finds the value", function() {
    expect(testPizzaOrder.PizzaToppings("Pepperoni")).to.equal(1);
  });


});
