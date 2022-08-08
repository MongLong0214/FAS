function solution(a, b) {
  let answer = 0;

  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result = result + a[i] * b[i];
  }

  return result;
}
console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2]));
