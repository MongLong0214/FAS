function solution(N, coffee_times) {
  var answer = [];

  let coffeeList = [];
  let coffeeList2 = [];

  for (let i = 0; i < N; i++) {
    coffeeList.push(coffee_times[i]);
    coffeeList2.push(coffee_times[i]);
  }

  coffeeList2.sort((a, b) => a - b);
  while (coffeeList2.length > 0) {
    // coffeeList2의 0번째 값을 answer에 넣어준다

    for (let i = 0; i < coffeeList2.length; i++) {
      answer.push(coffee_times.indexOf(coffeeList2[0]) + 1);
      delete coffee_times[coffee_times.indexOf(coffeeList2[0])];
      coffeeList2.shift();
      coffeeList2.push(coffee_times[i]);
    }
  }

  console.log("coffeeList", coffeeList);
  console.log("coffeeList2", coffeeList2);
  console.log("coffee_times", coffee_times);
  return answer;
}

console.log(solution(3, [4, 2, 2, 5, 3]));
