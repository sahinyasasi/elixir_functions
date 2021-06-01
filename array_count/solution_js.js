function countTrue(arr) {
  return arr.filter((el) => el == true).length;
}
console.log(countTrue([true, false, true]));
console.log(countTrue([true, false, true, true, false]));
