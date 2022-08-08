function solution(record) {
  let answer = [];
  let result = [];
  let recordArray = []; // record 각 배열로 분리
  let list = new Map();

  record.map((item) => recordArray.push(item.split(" ")));

  //leave일 때 값을 지워버리면 마지막에 나간사람은 undefined가 됨
  recordArray.map((item) => {
    if (item[0] === "Enter") {
      list.set(item[1], item[2]);
    } else if (item[0] === "Change") {
      list.set(item[1], item[2]);
    }
  });

  recordArray.map((item) => {
    if (item[0] === "Enter") {
      //list의 value값 불러오기
      result.push(`${list.get(item[1])}님이 들어왔습니다.`);
    } else if (item[0] === "Leave") {
      result.push(`${list.get(item[1])}님이 나갔습니다.`);
    }
  });

  return result;
}

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
);
