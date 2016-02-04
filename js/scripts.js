function Pizza(elSize, elToppings) {
  this.elSize = elSize;
  this.elToppings = elToppings;
  // this.elPrice;
}

Pizza.prototype.elToppingsCaculator = function() {
  this.toppingPrice = 0;
  for (var i = 0; i < this.elToppings.length; i++) {
    this.toppingPrice += 1;
  } return this.toppingPrice;
}

Pizza.prototype.elSizeCaculator = function() {
  this.sizePrice = 0;
  if(this.size = "small") {
    this.sizePrice += 14;
  } else if (this.size = "medium") {
    this.sizePrice += 16;
  } else if (this.size = "large") {
    this.sizePrice += 18;
  } return this.sizePrice;
}

Pizza.prototype.elTabulator = function() {
  return this.elToppingsCaculator() + this.elSizeCaculator();
}


//
// Pizza.prototype.elTabulator = function() {
//   return this.toppingPrice + this.sizePrice;
// }

$(document).ready(function() {
  $("form#pizzaForm").submit(function(event) {
    event.preventDefault();
    var elToppings = $('input[name=toppings]:checked')
    var elSize = $('input[name=size]:checked').val();
    var newPizza = new Pizza(elSize, elToppings);
        // document.getElementById("elPrice").innerHTML = elTabulator();
    // $('.recipt').text(newPizza.elTabulator());
    $('.recipt').text(newPizza.elTabulator());

  });
});
