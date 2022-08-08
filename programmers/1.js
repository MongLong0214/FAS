///신고 결과 받기

function solution(id_list, report, k) {
  let answer = [];
  let reportArray = []; // report를 각 배열로 분리
  let reportCount = new Map();
  let eachReportList = new Map();
  let ban = [];

  report.map((item) => reportArray.push(item.split(" ")));
  // Id 들을 맵으로 돌면서 각 Id별 신고한 Id (eachReportList)와 각 id별 신고 당한 횟수 (reportCount)를 set으로 저장 (set으로 한 이유는 한명이 여러번 신고한 경우 중복 제거 )
  id_list.map((item) => {
    eachReportList.set(item, new Set());
    reportCount.set(item, Number(0));
  });

  //신고 내용을 맵으로 돌면서 각 Id별로 신고 당한 횟수
  reportArray.map((item2) => {
    if (!eachReportList.get(item2[0]).has(item2[1])) {
      eachReportList.get(item2[0]).add(item2[1]);
      reportCount.set(item2[1], reportCount.get(item2[1]) + 1);
    }
    //이미 ban리스트 안에 id가 있으면 새로 넣지말기
    if (reportCount.get(item2[1]) >= k && !ban.includes(item2[1])) {
      ban.push(item2[1]);
    }
  });

  eachReportList.forEach((value, key) => {
    let reportCount = 0;
    ban.map((item) => {
      if (value.has(item)) {
        reportCount++;
      }
    });
    answer.push(reportCount);
  });
  return answer;
}

console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
);
