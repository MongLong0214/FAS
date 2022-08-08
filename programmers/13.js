function solution(progresses, speeds) {
  var answer = [];

  //앞 작업 소요시간
  let firstJobCompleteDay = Math.ceil((100 - progresses[0]) / speeds[0]);

  let dayCount = 1;

  for (let i = 1; i < progresses.length; i++) {
    let leftDays = Math.ceil((100 - progresses[i]) / speeds[i]);
    // 지금 남은 작업 시간이 앞 작업 남은 시간보다 크면 answer에 1 추가시키고 기준을 지금 남은 작업시간으로 변경
    if (leftDays > firstJobCompleteDay) {
      firstJobCompleteDay = leftDays;
      answer.push(dayCount);
      dayCount = 1;
      // 지금 남은 작업 시간이 앞 작업 보다 작거나 같으면 dayCount를 1 증가
    } else {
      dayCount++;
    }
    if (i === progresses.length - 1) {
      answer.push(dayCount);
    }
  }

  return answer;
}

console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
