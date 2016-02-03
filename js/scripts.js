function Pizza(elSize, elToppings) {
  this.elSize = elSize;
  this.elToppings = elToppings;
}

Pizza.prototype.elToppings = function() {
  var toppingSum = 0;
  if(this.pepperoni === true) {
    toppingSum =+ 4;
  }
  if(this.pickles === true) {
    toppingSum =+ 5;
  }
  if(this.porridge === true) {
    toppingSum =+ 6;
  }
  if(this.peppercini === true) {
    toppingSum =+ 9;
  }
  if(this.potato === true) {
    toppingSum =+ 7;
  }
  return toppingSum;
}

Pizza.prototype.elSize = function() {
  var sizeSum = 0;
  if(this.small === true) {
    toppingSum =+ 6;
  }
  if(this.medium === true) {
    toppingSum =+ 9;
  }
  if(this.large === true) {
    toppingSum =+ 7;
  }
  return toppingSum;
}

Pizza.prototype.elTabulator = function() {
  return this.elSize() + this.elToppings();
}

$(document).ready(function() {
  $("form#pizzaFormp").submit(function(event) {
    event.preventDefault();
    var pepperoni = $("#pepperoni").is(":checked");
    var pickles = $("#pickles").is(":checked");
    var porridge = $("#porridge").is(":checked");
    var peppercini = $("#peppercini").is(":checked");
    var potato = $("#potato").is(":checked");
    var small = $("#small").is(":checked");
    var medium = $("#medium").is(":checked");
    var large = $("#large").is(":checked");
    var newPizza = new Pizza(elSize, elToppings);
    document.getElementById("elPrice").innerHTML = newPizza.elTabulator();
  });
});
