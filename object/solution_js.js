function addName(obj, name, value) {
  pair = { name: value };
  return (obj = { ...obj, ...pair });
  //Object.assign()
}
console.log(addName({}, "Brutus", 300));
console.log(addName({ piano: 500 }, "Brutus", 400));
