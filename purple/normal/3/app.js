const foo = (games) => {
  let count = 0;

  games.map((item, idx) => {
    // 이길 경우 3점 추가
    if (item[0] > item[2]) {
      return (count += 3);
    }
    // 비길 경우 1점 추가
    if (item[0] === item[2]) {
      return (count += 1);
    }
  });
  return count;
};

console.log(
  foo(["3:1", "2:2", "1:3", "3:1", "2:2", "1:3", "3:1", "2:2", "1:3", "0:4"])
);
