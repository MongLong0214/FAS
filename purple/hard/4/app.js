const foo = (numbers) => {
  const odds = [];
  const evens = [];
  const list = numbers.split(" ");
  //숫자가 짝수면 evens 배열에 홀수면 odds배열에 넣습니다.
  list.forEach((num) => {
    if (num % 2 === 0) {
      evens.push(num);
    } else {
      odds.push(num);
    }
  });
  // 숫자가 하나만 들어가있는 배열의 원소가 전체 숫자들 중 몇 번째 인덱스였는지 반환합니다. (순번의 시작이 1부터이기 때문에 인덱스 값에 +1)
  if (odds.length === 1) {
    return list.indexOf(odds.at(0)) + 1;
  }
  if (evens.length === 1) {
    return list.indexOf(evens.at(0)) + 1;
  }
};

console.log(foo("2 4 7 8 10"));
console.log(foo("1 2 1 1"));
