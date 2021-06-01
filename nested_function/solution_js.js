function a() {
  function b(str) {
    return str;
  }

  return b; //return pointer to function b here
}

var s = a(); //s get the value of pointer to b

console.log(s("apple"));
