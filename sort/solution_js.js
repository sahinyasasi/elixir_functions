function sortDrinkByPrice(drinks) {
  return drinks.sort((a, b) => a.price - b.price);
  //drinks.sort((a, b) => a.nme > b.name?1:-1);
}

const drinks1 = [
  { name: "lemonade", price: 50 },
  { name: "lime", price: 10 },
  { name: "lime1", price: 90 },
  { name: "lime2", price: 100 },
];
console.log(sortDrinkByPrice(drinks1));
