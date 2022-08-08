// function solution(board) {
//   let count = 0;

//   let list = [];

//   console.log("board", board);

//   return count;
// }

// console.log(
//   solution([
//     [3, 2, 3, 2],
//     [2, 1, 1, 2],
//     [1, 1, 2, 1],
//     [4, 1, 1, 1],
//   ])
// );
function solution(board) {
  let dx = [-1, 0, 1, 0]; // 행
  let dy = [0, 1, 0, -1]; // 열
  let cnt = 0; // 경우의 수
  // console.log(board.length) // 7

  function DFS(x, y) {
    if (x === 6 && y === 6) {
      // 도착점(6,6)
      cnt++;
    } else {
      // for(let i=0; i<board.length; i++){
      //     for(let j=0; j<board.length; j++){
      for (let k = 0; k < 4; k++) {
        // 좌표회전
        let nx = x + dx[k]; // x회전
        let ny = y + dy[k]; // y회전
        if (
          nx >= 0 &&
          nx < board.length &&
          ny >= 0 &&
          ny < board.length &&
          board[nx][ny] === 0
        ) {
          // nx와 ny 범위 안에 있어야 함
          // if(board[nx][ny] === 0){
          board[nx][ny] = 1; // 방문
          DFS(nx, ny); // 한칸 증가
          board[nx][ny] = 0;
          // }
        }
      }
    }
    //     }
    // }
  }
  board[0][0] = 1; // 첫 번째부터 시작이니까 방문함을 표시
  DFS(0, 0);
  return cnt;
}

let arr = [
  [3, 2, 3, 2],
  [2, 1, 1, 2],
  [1, 1, 2, 1],
  [4, 1, 1, 1],
];

console.log(solution(arr));
