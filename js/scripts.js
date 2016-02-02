function pizzaOrder(pizzaSize, elToppings) {
  this.pizzaSize = pizzaSize;
  this.elToppings = elToppings;
};

$(document).ready(function() {
  $("form#pizzaForm").submit(function(event) {
    event.preventDefault();

function elToppings() {
  var toppingSum = 0;

  if(document.getElementById("Pepperoni").checked) {
  toppingSum += 1;
  }
  if(document.getElementById("Pickles").checked) {
  toppingSum += 4;
  }
  if(document.getElementById("Porridge").checked) {
  toppingSum += 9;
  }
  if(document.getElementById("Peppercini").checked) {
  toppingSum += 5;
  }
  if(document.getElementById("Potato").checked) {
  toppingSum += 2;
  }
  if(document.getElementById("Small").checked) {
  toppingSum += 10;
  }
  if(document.getElementById("Medium").checked) {
  toppingSum += 15;
  }
  if(document.getElementById("Large").checked) {
  toppingSum += 20;
  }
  var price = toppingSum;
  document.getElementById('receipt').innerHTML = "$" + price;
}
elToppings();

  });
});
