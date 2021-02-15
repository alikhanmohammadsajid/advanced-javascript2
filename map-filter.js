const numbers = [2, 3, 4];
const output = [];
for (let i = 0; i < numbers.length; i++) {
  const sum = numbers[i];
  const num = sum * sum;
  output.push(num);
}
const result = numbers.find((x) => x < 4);
console.log(result);
