function squares(n) {
  if (Number.isInteger(n) && n > 0) {
    console.log((n * (n + 1) * (2 * n + 1)) / 6);
    return (n * (n + 1) * (2 * n + 1)) / 6;
  } else {
    console.log("enter an integer");
  }
}
squares(4);
squares(4.1);
