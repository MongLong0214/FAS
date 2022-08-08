function solution(num) {
  let answer = 0;
  let pockets = num.length / 2;
  let result = new Set(num);
  if (pockets === result.size) {
    answer = pockets;
  } else if (pockets > result.size) {
    answer = result.size;
  } else if (pockets < result.size) {
    answer = pockets;
  }

  console.log("result", result);
  console.log("pockets", pockets);

  return answer;
}

console.log(solution([3, 1, 2, 3]));
