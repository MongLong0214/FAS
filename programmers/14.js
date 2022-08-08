function solution(v) {
  let answer = [];

  const firstIdx = v[0][0]; // 1
  const secondIdx = v[0][1]; // 1

  if (v[1][0] === firstIdx) {
    answer.push(v[2][0]);
  } else if (v[2][0] === v[1][0]) {
    answer.push(v[0][0]);
  } else {
    answer.push(v[1][0]);
  }
  if (v[1][1] === secondIdx) {
    answer.push(v[2][1]);
  } else if (v[2][1] === v[1][1]) {
    answer.push(v[0][1]);
  } else {
    answer.push(v[1][1]);
  }

  return answer;
}
console.log(
  solution([
    [1, 1],
    [2, 2],
    [1, 2],
  ])
);
