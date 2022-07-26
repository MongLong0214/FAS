// 2292
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

let N = Number(input);

let room = 1;
let sum = 1;

while (sum < N) {
  sum += 6 * room;
  room += 1;
}

console.log(room);
