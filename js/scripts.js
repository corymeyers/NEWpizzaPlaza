function Pizza(elSize, elToppings) {
  this.elSize = elSize;
  this.elToppings = elToppings;
  this.elPrice = 0;
}

Pizza.prototype.elToppingsCaculator = function() {
  this.elPrice = 0;
  for (var i = 0; i < this.toppings.length; i++) {
    this.elPrice += 1;
  }
}

Pizza.prototype.elSizeCaculator = function() {
  this.elPrice = 0;
  if(this.size === "small") {
    this.elPrice =+ 14;
  } else if (this.size === "medium") {
    this.elPrice =+ 16;
  } else if (this.size === "large") {
    this.elPrice =+ 18;
  } return this.elPrice
}


Pizza.prototype.elTabulator = function() {
  return this.elPrice;
}

$(document).ready(function() {
  $("form#pizzaForm").submit(function(event) {
    event.preventDefault();
    var elToppings = $('input:checkbox[name=toppings]:checked')
    var elSize = $('input[name=size]:checked').val();
    var newPizza = new Pizza(elSize, elToppings);
        // document.getElementById("elPrice").innerHTML = elTabulator();
    $('.recipt').text(newPizza.elTabulator());
  });
});
