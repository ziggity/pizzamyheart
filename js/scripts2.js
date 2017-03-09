function Pizza (pizzaSize, pizzaToppings, pizzaCrust) {
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
  this.pizzaCrust = pizzaCrust;
};

function finalPizzaPrice(size, topping){
  var numberOfToppings = topping.length + 1;
  if (size === "personal"){
    var finalPrice = numberOfToppings + 8;
    return finalPrice;
  } else if (size === "small"){
    var finalPrice = numberOfToppings + 10;
    return finalPrice;
  }else if (size === "medium"){
    var finalPrice = numberOfToppings +12;
    return finalPrice;
  } else if (size ==="large"){
    var finalPrice = numberOfToppings + 14;
    return finalPrice;
  };
};

Pizza.prototype.userDisplay = function() {
  return "Here's your most recent order: " + this.pizzaSize + " " + this.pizzaCrust + " pizza total cost: $";
};

$(function(){
  $("#formInput").submit(function(event){
    event.preventDefault();
    var pizzaSize = $("#pizzaSize").val();
    var pizzaTopping = [];
    $('input:checkbox[name="toppings1"]:checked').each(function(){
      var toppingChoices = $(this).val();
      pizzaTopping.push(toppingChoices);
      console.log(pizzaTopping);
    });
    var pizzaCrust = $("#pizzaCrustType").val();
    console.log(pizzaCrust);
    var goodPizza = new Pizza(pizzaSize, pizzaTopping, pizzaCrust);
    console.log(goodPizza);
    var pizzaPrice = finalPizzaPrice(pizzaSize, pizzaTopping);
    console.log(pizzaPrice);

    $('#pizzaShow').empty().append('<li><span class="pizzaTime">' + goodPizza.userDisplay() + pizzaPrice + '</span></li>');
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
