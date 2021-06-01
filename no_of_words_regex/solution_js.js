function potatoes(str) {
  const REGEXP = /potato/g;
  return str.match(REGEXP).length;
}
console.log(potatoes("potatopotato"));
console.log(potatoes("potatopotatopotato"));
