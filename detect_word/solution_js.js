function detectWord(str) {
  list = str.split("");
  return list.filter((char) => char == char.toLowerCase()).join("");
}
console.log(detectWord("UcUNFYGaFYFYGtNUH"));
