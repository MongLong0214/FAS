// 1712
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

let A = Number(input[0]); // 월세
let B = Number(input[1]); // 한대 당 인건비
let C = Number(input[2]); //노트북 가격

let X = C - B; // 순수 노트북 팔아서 남는 돈

if (X <= 0) {
  console.log(-1);
} else {
  console.log(Math.floor(A / X) + 1);
}
