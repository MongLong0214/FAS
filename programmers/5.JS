function solution(board, moves) {
  let answer = 0;

  let box = [];
  moves.map((item) => {
    let bool = true;
    board.map((item2) => {
      if (item2[item - 1] != 0 && bool === true) {
        box.push(item2[item - 1]);
        // box에 넣은 값 board에서 삭제
        item2[item - 1] = 0;
        bool = false;
        // Box에 연속 된 같은 값이 있으면 삭제하고 삭제 된 수 만큼 answer에 더함
        if (box.length > 1) {
          if (box[box.length - 1] === box[box.length - 2]) {
            answer += 2;
            box.pop();
            box.pop();
          }
        }
      }
    });
  });

  return answer;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
