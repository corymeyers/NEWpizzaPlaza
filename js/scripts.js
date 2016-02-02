function Pizza(elSize, elToppings) {
  this.elSize = elSize;
  this.elToppings = elToppings;
  var elPrice = 0;
}

Pizza.prototype.elToppings() {
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
}

Pizza.prototype.elSize() {
  var sizeSum = 0;
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
}

  document.getElementById('receipt').innerHTML = "$" + price;




$(document).ready(function() {
  $("form#pizzaForm").submit(function(event) {
    event.preventDefault();
  });
});
