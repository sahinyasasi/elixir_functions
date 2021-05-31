function Array(arr1, arr2) {
  max = Math.max(...arr1) < Math.max(...arr2);
  min = Math.min(...arr2) < Math.min(...arr1);
  if (max && min) {
    console.log("true");
  } else {
    console.log("false");
  }
}
Array([1, 2, 3, 4], [0, 6]);

Array([9, 9, 8], [8, 9]);

Array([3, 1], [4, 0]);

Array([1, 2, 3, 4], [2, 3]);
