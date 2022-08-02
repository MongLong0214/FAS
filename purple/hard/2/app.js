const foo = (num) => {
  const sortArray = num.sort((a, b) => {
    return a - b;
  });
  return sortArray[1];
};

console.log(foo([0, 1, 2]));
console.log(foo([5, 1, 2]));
