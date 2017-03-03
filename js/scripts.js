function Pizza (pizzaSize, pizzaToppings, pizzaCrust) {
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
  this.pizzaCrust = pizzaCrust;
  this.cost;
}

Pizza.prototype.calculator = function() {
  this.cost = 8;
  if (this.size === 'personal') {
    this.cost -= 4;
  } else if (this.size === 'small') {
    this.cost += 1;
  }
  if (this.size === 'medium') {
    this.cost += 3;
  } else if (this.size === 'large') {
    this.cost += 5;
  }
  if (this.pizzaCrust === 'white') {
    this.cost += 1;
  } else if (this.pizzaCrust === 'wheat') {
    this.cost += 2;
  }
  if (this.pizzaCrust === 'sourdough') {
    this.cost += 1;
  } else if (this.pizzaCrust === 'glutenFree') {
    this.cost += 2;
  }
  for (var i = 0; i < this.pizzaToppings.length; i++) {
    this.cost += 1;
  }
  console.log(this.cost);
};

Pizza.prototype.userDisplay = function() {
  return "Fantastic choices! Here's your order:" + this.pizzaSize + " " + this.pizzaCrust + " pizza: $" + this.cost;
  console.log(userDisplay);
}
$(function(){
  $("#formInput").submit(function(){
    event.preventDefault();
    var crust = $("#pizzaCrustType").val();
    var size = $("#pizzaSize").val();
    var topping = $('.topping input:checkbox:checked').val();

    var goodPizza = new Pizza(size, topping, crust);
    console.log(size);
    console.log(topping);
    console.log(crust);
    console.log(goodPizza);

  });
});
