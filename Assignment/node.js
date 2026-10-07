setTimeout(() => {
  console.log("Timeout");

  Promise.resolve().then(() => {
    console.log("Promise inside timer");
  });
}, 0);

Promise.resolve().then(() => {
  console.log("Promise before timer");
});