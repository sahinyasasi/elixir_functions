function calcAge(age) {
  const year = 365;
  if (Number.isInteger(age)) {
    return age * year;
  } else {
    console.log("enter integer");
  }
}
