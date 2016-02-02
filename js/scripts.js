function Pizza(elSize, elToppings, elTabulator) {
  this.elSize = elSize;
  this.elToppings = elToppings;
  this.elTabulator = elTabulator;
}

Pizza.prototype.elToppings = function() {
  var toppingSum = 0;
  if($(document.getElementById("Pepperoni").checked)) {
    toppingSum += 1;
  }
  if($(document.getElementById("Pickles").checked)) {
    toppingSum += 4;
  }
  if($(document.getElementById("Porridge").checked)) {
    toppingSum += 9;
  }
  if($(document.getElementById("Peppercini").checked)) {
    toppingSum += 5;
  }
  if($(document.getElementById("Potato").checked)) {
    toppingSum += 2;
  }
  return toppingSum;
}

Pizza.prototype.elSize = function() {
  var sizeSum = 0;
  if($(document.getElementById("Small").checked)) {
    sizeSum += 10;
  }
  if($(document.getElementById("Medium").checked)) {
    sizeSum += 15;
  }
  if($(document.getElementById("Large").checked)) {
    sizeSum += 20;
  }
  return sizeSum;
}

Pizza.prototype.elTabulator = function() {
  return this.elSize() + this.elToppings();
}

$(document).ready(function() {
  $("form#pizzaForm").submit(function(event) {
    event.preventDefault();
    var elPizza = new Pizza(elSize, elToppings, elTabulator);
    var elSize = this.elSize
    var elToppings = this.elToppings
    var elTabulator = this.elTabulator

    $("span#elPrice").text(elTabulator);

  });
});
