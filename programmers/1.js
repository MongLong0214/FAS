///신고 결과 받기

function solution(id_list, report, k) {
  let answer = [];
  let id = [];

  report.map((item) => id.push(item.split(" ")));
  id_list.map((item) => {
    let count = 0;
    id.map((item2) => {
      if (item2[0] === item) {
        count++;
      }
    });

    this.value = count;
    console.log(count);
  });
  return id;
}

console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
);
