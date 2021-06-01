function compact(arr) {
  return arr.filter((x) => !!x);
}
console.log(compact([0, 1, false, undefined, 2, "", 3]));
