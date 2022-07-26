const foo = (numbers) => {
  const odds = [];
  const evens = [];
  const list = numbers.split(" ");

  list.forEach((num) => {
    if (num % 2 === 0) {
      evens.push(num);
    } else {
      odds.push(num);
    }
  });

  if (odds.length === 1) {
    return list.indexOf(odds.at(0)) + 1;
  }
  if (evens.length === 1) {
    return list.indexOf(evens.at(0)) + 1;
  }
};

console.log(foo("2 4 7 8 10"));
console.log(foo("1 2 1 1"));
