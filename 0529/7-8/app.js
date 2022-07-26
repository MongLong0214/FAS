const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

const first = input[0];
const second = input[1];

const answer = (first + second).toString();

console.log(answer);
