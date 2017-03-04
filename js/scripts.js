
function Pizza (pizzaSize, pizzaToppings, pizzaCrust) {
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
  this.pizzaCrust = pizzaCrust;
}
Pizza.prototype.calculator = function() {
  this.pizzaCost = 12;
  if (this.pizzaSize === "personal") {
    this.pizzaCost -= 9;
  }
   if (this.pizzaSize === "small") {
    this.pizzaCost += 1;
  }
   if (this.pizzaSize === "medium") {
    this.pizzaCost += 5;
  }  if (this.pizzaSize === "large") {
    this.pizzaCost += 10;
  }
  if (this.pizzaCrust === 'white') {
    this.pizzaCost += 1;
  }  if (this.pizzaCrust === 'wheat') {
    this.pizzaCost += 3;
  }
   if (this.pizzaCrust === 'sourdough') {
    this.pizzaCost += 1;
  }  if (this.pizzaCrust === 'glutenFree') {
    this.pizzaCost += 2;
  }
  if (this.pizzaToppings === 'Mushrooms') {
    this.pizzaCost += 0;
  }  if (this.pizzaToppings === 'Peppers') {
    this.pizzaCost += 0;
  }  if (this.pizzaToppings === 'Garlic') {
    this.pizzaCost += 0;
  }  if (this.pizzaToppings === 'Peperoni') {
    this.pizzaCost += 0;
  } if (this.pizzaToppings === 'Anchovies') {
    this.pizzaCost += 0;
  }  if (this.pizzaToppings === 'Bacon') {
    this.pizzaCost += 0;
  } if (this.pizzaToppings === 'Tomatoes') {
    this.pizzaCost += 0;
  }  if (this.pizzaToppings === 'Sausage') {
    this.pizzaCost += 0;
  }
};
Pizza.prototype.userDisplay = function() {
  return "Here's your most recent order: " + this.pizzaSize + " " + this.pizzaCrust + " pizza total cost: $" + this.pizzaCost;
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
  });
});
// $(function(){
//   $("#formInput").submit(function(){
//     event.preventDefault();
//
//     var goodPizza = new Pizza(pizzaSize, pizzaToppings, pizzaCrust);
//     var pizzaSize = $("#pizzaSize").val();
//     var pizzaCrust = $("#pizzaCrustType").val();
//     var pizzaToppings = $('input[name=toppings1]checkbox:checked').map(function() {return this.value;}).get().join(',');
//     goodPizza.calculator();
//     $('#toppings').append('<li><span class="pizzaTime">' + goodPizza.userDisplay() + '</span></li>');''
//   });
// });
//
// var pizzaPremade = $("#premade").val();
