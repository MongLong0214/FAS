const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

var num = parseInt(input[0]);

var i = 2; // 2부터 나누기 시작
var result = [];
// 2부터 나눠서 0이 되는 숫자 찾아서 result에 push하고 계속 나누기 (num은 계속 쪼개지는중)
while (true) {
  if (num % i === 0) {
    num = num / i;
    result.push(i);
    i = 1;
  }
  i++;
  if (i > num) {
    break;
  }
}

//한칸씩 출력
console.log(result.join("\n"));
