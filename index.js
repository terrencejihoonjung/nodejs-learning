const PizzaShop = require("./pizza-shop");
const DrinkMachine = require("./drink-machine");

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on("order", (size, topping) => {
  console.log(`"${size} pizza with ${topping} ordered"`);
  drinkMachine.serveDrink(size);
});

pizzaShop.order("large", "mushrooms");
pizzaShop.displayOrderNumber();

// const EventEmitter = require("node:events");

// const emitter = new EventEmitter();

// emitter.on("order-pizza", (size, topping) => {
//   console.log(`"${size} pizza with ${topping} ordered"`);
// });

// emitter.on("order-pizza", (size) => {
//   if (size === "large") {
//     console.log("Serving complimentary drink");
//   }
// });

// emitter.emit("order-pizza", "large", "mushroom");
