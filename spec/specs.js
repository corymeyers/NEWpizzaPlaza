describe("Pizza", function() {
  it ("collects user input, and makes it into an object", function() {
    var testPizza = new Pizza("large", ["pepperoni", "pickles"]);
    expect(testPizza.elSize).to.equal("large");
    expect(testPizza.elToppings).to.eql["pepperoni", "pickles"];
  });
it ("it takes that input and assigns pricing", function() {
    var testPizza = new Pizza("large", ["pepperoni", "pickles"]);
    expect
});

});
//
