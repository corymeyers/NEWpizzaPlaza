function Pizza(elSize, elToppings) {
  this.elSize = elSize;
  this.elToppings = elToppings;
}

Pizza.prototype.elToppingsCaculator = function() {
  this.toppingPrice = 0;
  for (var i = 0; i < this.elToppings.length; i++) {
    this.toppingPrice += 1;
  } return this.toppingPrice;
}

Pizza.prototype.elSizeCaculator = function() {
  this.sizePrice = 0;
  if(this.elSize == "small") {
    this.sizePrice += 14;
  } else if (this.elSize == "medium") {
    this.sizePrice += 16;
  } else if (this.elSize == "large") {
    this.sizePrice += 18;
  } return this.sizePrice;
}

Pizza.prototype.elTabulator = function() {
  return this.elSizeCaculator() + this.elToppingsCaculator();
}

$(document).ready(function() {
  $("form#pizzaForm").submit(function(event) {
    event.preventDefault();
    var elToppings = $('input[name=toppings]:checked');
    var elSize = $('input[name=size]:checked').val();

    var newPizza = new Pizza(elSize, elToppings);
    $('.recipt').text(newPizza.elTabulator());

  });
});
