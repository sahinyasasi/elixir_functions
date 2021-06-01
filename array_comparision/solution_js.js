function isFirstSuperior(arr1, arr2) {
  if (JSON.stringify(arr1) == JSON.stringify(arr2)) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] > arr2[i]) {
        return true;
      } else if (arr1[i] < arr2[i]) {
        return false;
      }
    }
  }
}
console.log(isFirstSuperior([1, 2, 4], [1, 2, 3]));
console.log(isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4]));
console.log(isFirstSuperior(["a", "d", "c"], ["a", "b", "c"]));
console.log(
  isFirstSuperior(["zebra", "ostrich", "whale"], ["ant", "ostrich", "whale"])
);
