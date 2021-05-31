const REGEXP = /red\sflag|blue\sflag/g;
console.log(
  "pink flag red flag black flag blue flag green flag red flag".match(REGEXP)
);
console.log("blue flag".match(REGEXP));
