function solution(absolutes, signs) {
  let answer = 0;
  let box = absolutes;

  for (let i = 0; i < signs.length; i++) {
    if (signs[i] === false) {
      box[i] = box[i] * -1;
    }
  }
  // 총합
  box.forEach((item) => {
    answer += item;
  });

  return answer;
}

console.log(solution([1, 2, 3], [false, false, true]));
