const foo = (games) => {
  const win = [];
  const lose = [];
  games.map((item, idx) => {
    if (item[0] > item[2]) {
      return win.push(item);
    }
    if (item[0] === item[2]) {
      return lose.push(item);
    }
  });
  return win.length * 3 + lose.length;
};

console.log(
  foo(["3:1", "2:2", "1:3", "1:1", "0:0", "0:1", "0:2", "0:3", "6:4", "5:5"])
);
