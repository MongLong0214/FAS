const foo = (nums) => {
  const sortArray = nums.sort((a, b) => {
    return a - b;
  });
  return sortArray[1];
};

console.log(foo([0, 1, 2]));
console.log(foo([5, 1, 2]));
