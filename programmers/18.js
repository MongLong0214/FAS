function solution(n) {
  let answer = "1";

  const AntExp = /(.)\1*/g; // 정규표현식

  let startValue = "1"; // 시작 수열 값

  for (let i = 1; i < n; i++) {
    let sequence = ""; // 수열을 만들기 위한 중첩 변수
    const result = startValue.match(AntExp); // 문자열 별 run-length encoding
    for (item of result) {
      // 압축 된 문자열 ['1', '2', '11'] 요소로 반복문
      sequence += item[0] + String(item.length); // += (요소 별 문자열 길이 + 문자)
    }
    if (i === n - 1) {
      answer = sequence;
    }
    startValue = sequence; // '완성 된 결과 수열'을 다시 기준으로 잡아서 입력받은 만큼 수열 진행
  }
  return answer;
}
console.log(solution(7));
