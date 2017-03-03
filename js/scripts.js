
function Pizza (pizzaSize, pizzaToppings, pizzaCrust) {
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
  this.pizzaCrust = pizzaCrust;
  this.cost;
}
Pizza.prototype.calculator = function() {
  this.cost = 15;
  if (this.pizzaSize === 'personal') {
    this.cost -= 9;
  } else if (this.pizzaSize === 'small') {
    this.cost += 1;
  }
  else if (this.pizzaSize === 'medium') {
    this.cost += 5;
  } else if (this.pizzaSize === 'large') {
    this.cost += 10;
  }
  if (this.pizzaCrust === 'white') {
    this.cost += 1;
  } else if (this.pizzaCrust === 'wheat') {
    this.cost += 3;
  }
  else if (this.pizzaCrust === 'sourdough') {
    this.cost += 1;
  } else if (this.pizzaCrust === 'glutenFree') {
    this.cost += 2;
  }
  if (this.pizzaToppings === 'Mushrooms') {
    this.cost += 0;
  } else if (this.pizzaToppings === 'Peppers') {
    this.cost += 0;
  } else if (this.pizzaToppings === 'Garlic') {
    this.cost += 0;
  } else if (this.pizzaToppings === 'Peperoni') {
    this.cost += 0;
  }else if (this.pizzaToppings === 'Anchovies') {
    this.cost += 0;
  } else if (this.pizzaToppings === 'Bacon') {
    this.cost += 0;
  }else if (this.pizzaToppings === 'Tomatoes') {
    this.cost += 0;
  } else if (this.pizzaToppings === 'Sausage') {
    this.cost += 0;
  }
};
Pizza.prototype.userDisplay = function() {
  return "Fantastic choices! Here's your order: " + this.pizzaSize + " " + this.pizzaCrust + " pizza total cost: $" + this.cost;
}
var displayIt = function() {
  $('#pizzaShow h5').text(goodPizza.userDisplay());
  $('#toppings').text(Pizza.pizzaToppings.join(", "));
  console.log(displayIt);
}
$(function(){
  $("#formInput").submit(function(){
    event.preventDefault();
    var pizzaSize = $("#pizzaSize").val();
    var pizzaToppings = $('input[name=toppings1]:checkbox:checked');
    var pizzaCrust = $("#pizzaCrustType").val();
    var goodPizza = new Pizza(pizzaSize, pizzaToppings, pizzaCrust);
    goodPizza.calculator();
    console.log(pizzaSize);
    console.log(pizzaToppings);
    console.log(pizzaCrust);
    console.log(goodPizza);
    $('#pizzaShow').append('<li><span class="pizzaTime">' + goodPizza.userDisplay() + '</span></li>');

    $('#orderFinish').click(function(){
          $('#formInput')[0].reset();
    });
  });
});
