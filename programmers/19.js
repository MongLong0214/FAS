function solution(answers) {
  var answer = [];
  const first = [1, 2, 3, 4, 5];
  const second = [2, 1, 2, 3, 2, 4, 2, 5];
  const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const firstCount = answers.filter(
    (v, i) => v === first[i % first.length]
  ).length;
  const secondCount = answers.filter(
    (v, i) => v === second[i % second.length]
  ).length;
  const thirdCount = answers.filter(
    (v, i) => v === third[i % third.length]
  ).length;
  const max = Math.max(firstCount, secondCount, thirdCount);
  if (max === firstCount) answer.push(1);
  if (max === secondCount) answer.push(2);
  if (max === thirdCount) answer.push(3);

  return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
