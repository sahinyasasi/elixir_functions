function possibleBonus(a, b) {
  if (a >= b) {
    return false;
  } else if (a < b) {
    for (let i = 1; i < 6; i++) {
      a = a + i;
      if (a < b) {
        a = a - i;
      } else {
        return true;
      }
    }
    return false;
  }
}

console.log(possibleBonus(3, 7));
console.log(possibleBonus(1, 9));
console.log(possibleBonus(5, 3));
