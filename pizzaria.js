var crustType = ["Deep dish", "Thin crust", "Flat bread","hand tossed"]
var sauceType = ["Traditonal", "Alfredo", "No sauce"]
var cheeses = ["Mozzarella", "Provolone", "Goat Cheese", "feta"]
var toppings = ["pepperoni", "sausage", "mushrooms", "olives", "onions"]

function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
function randomPicker(arr) {
    var random = Math.random();
    random = Math.ceil(Math.random() * arr.length - 1);
    return arr[random]
}
var p1 = pizzaOven("deep dish", "tradiional", "mozzarella", ["pepperoni", "sausage"]);
var p2 = pizzaOven( crustType[3], sauceType[0], [cheeses[0],cheeses[3]], [toppings[2],toppings[3],toppings[4]])
var p3 = pizzaOven( randomPicker(crustType), randomPicker(sauceType), randomPicker(cheeses), [randomPicker(toppings), randomPicker(toppings)]);
var p4 = pizzaOven( randomPicker(crustType), randomPicker(sauceType), randomPicker(cheeses), [randomPicker(toppings), randomPicker(toppings)]);
console.log("Pizza number one is: ")
console.log(p1);
console.log("Pizza number two is:  ")
console.log(p2);
console.log("Pizza number three is:  ")
console.log(p3);
console.log("Pizza number four is:  ")
console.log(p4);
