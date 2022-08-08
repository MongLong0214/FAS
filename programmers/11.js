function solution(num) {
  let answer = [];
  let test = [];
  let sosu = true;

  for (let x = 0; x < num.length - 2; x++) {
    for (let y = x + 1; y < num.length - 1; y++) {
      for (let z = y + 1; z < num.length; z++) {
        answer.push(num[x] + num[y] + num[z]);
        // 소수 구하기
        for (let i = 2; i < answer[answer.length - 1]; i++) {
          if (answer[answer.length - 1] % i === 0) {
            sosu = false;
          }
        }
        if (sosu === true) {
          test.push(answer[answer.length - 1]);
        }
        sosu = true;
      }
    }
  }

  return test.length;
}

console.log(solution([1, 2, 7, 6, 4]));
