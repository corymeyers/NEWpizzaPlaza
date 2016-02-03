function Pizza(elSize, elToppings) {
  this.elSize = elSize;
  this.elToppings = elToppings;
}

Pizza.prototype.elToppings = function() {
  var toppingSum = 0;
  if (this.pepperoni == true) {
    toppingSum += 4;
    console.log(this.pepperoni);
  }
  else if (this.pickles === true) {
    toppingSum += 5;
  }
  else if (this.porridge == true) {
    toppingSum += 6;
  }
  else if (this.peppercini == true) {
    toppingSum += 9;
  }
  else if (this.potato == true) {
    toppingSum += 7;
  }
  return toppingSum;
}

Pizza.prototype.elSize = function() {
  var sizeSum = 0;
  if(this.small == true) {
    toppingSum += 6;
  }
  else if(this.medium == true) {
    toppingSum += 9;
  }
  else if(this.large == true) {
    toppingSum += 7;
  }
  return toppingSum;
}

Pizza.prototype.elTabulator = function() {
  return this.elSize + this.elToppings;

}

$(document).ready(function() {
  $("form#pizzaForm").submit(function(event) {
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
    var elSize = ""
    var elToppings = ""
        // document.getElementById("elPrice").innerHTML = elTabulator();
    $('#elPrice').text(newPizza.elTabulator);
  });
});
