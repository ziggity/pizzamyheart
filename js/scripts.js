function Pizza (pizzaSize, pizzaToppings, pizzaCrust) {
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
  this.pizzaCrust = pizzaCrust;
}

  var size = new Pizza (0,0,0);

Pizza.prototype.toppings = function() {
var toppingsOrder = "";

for (var i = 0; i < this.pizzaToppings.length; i++) {
 if (i === 0) {
   toppingsOrder += this.pizzaToppings[i]
 } else {
   toppingsOrder += ("," + this.pizzaToppings[i])
 };
}
 return toppingsOrder;
 console.log(toppingsOrder);
}
Pizza.prototype.calculator = function (){
  var totalCost = 0;
}

$(function(){
  $("#formInput").submit(function(){
    event.preventDefault();
    var pizzaSizes = parseInt($("#pizzaSize").val());
    var pizzaTopping = parseInt($(".topping input:checkbox:checked").val());
    var pizzaCrusts = parseInt($("#pizzaCrustType").val());
    console.log(pizzaSizes);
    console.log(pizzaTopping);
    console.log(pizzaCrusts);




  });
});
