function solution(N, coffee_times) {
  let answer = [];
  for (i = 0; i < Math.ceil(coffee_times.length / N); i++) {
    let map = new Map();
    for (j = 0; j < N; j++) {
      if (coffee_times[i * N + j] != null) {
        map.set(i * N + j + 1, coffee_times[i * N + j]);
      }
    }
    const mapToArray = Array.from(map);

    mapToArray.sort((a, b) => a[1] - b[1]);
    mapToArray.map((item) => {
      answer.push(item[0]);
    });
  }

  return answer;
}

console.log(solution(5, [4, 2, 2, 5, 3]));
