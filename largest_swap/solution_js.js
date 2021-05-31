function largestSwap(num) {
  map = num.toString().split("");
  newNum = map[1] + map[0];
  if (newNum > num) {
    return false;
  } else {
    return true;
  }
}
console.log(largestSwap(34));
console.log(largestSwap(32));
