function solution(numbers) {
  const result = numbers.reduce((a, b) => {
    return a + b;
  });
  return 45 - result;
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
