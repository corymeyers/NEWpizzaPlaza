function Pizza(elSize, elToppings) {
  this.elSize = elSize;
  this.elToppings = elToppings;
}

Pizza.prototype.elToppings = function() {
  var toppingSum = 0;

if(Pepperoni === true) {
  toppingSum =+ 4;
}
  // if($(document.getElementById("Pickles").checked)) {
  //   toppingSum += 4;
  // }
  // if($(document.getElementById("Porridge").checked)) {
  //   toppingSum += 9;
  // }
  // if($(document.getElementById("Peppercini").checked)) {
  //   toppingSum += 5;
  // }
  // if($(document.getElementById("Potato").checked)) {
  //   toppingSum += 2;
  // }

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
    Pepperoni = $("#Pepperoni").is(":checked");
    document.getElementById("elPrice").innerHTML = Pepperoni;
    // if(document.getElementById("Pepperoni").checked) {
    //   var a = document.getElementById("Pepperoni").value;
    //   document.getElementById("elPrice").innerHTML = a;
    // }
    var el = document.getElementById('pizzaForm');
    document.getElementById("elPrice").innerHTML = el;






    var elPizza = new Pizza(elSize, elToppings);
    var elSize = this.elSize
    var elToppings = this.elToppings
    var elTabulator = this.elTabulator

    $("span#elPrice").text(elTabulator);

  });
});
