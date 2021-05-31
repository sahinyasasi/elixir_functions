let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("edabit");
  }, 1000);
}).then(function () {
  console.log("Wrapped setTimeout after 2000ms");
});
