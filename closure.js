function sum() {
  let count = 5;
  return function () {
    count++;
    return count;
  };
}
const stopwatch = sum();
const clock = sum();
console.log(stopwatch());
console.log(stopwatch());
console.log(clock());
console.log(stopwatch());
console.log(clock());
