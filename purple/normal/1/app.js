const foo = (month) => {
  if (month < 4) {
    return "1";
  } else if (month < 7) {
    return "2";
  } else if (month < 10) {
    return "3";
  } else {
    return "4";
  }
};

console.log(foo(3));
console.log(foo(8));
console.log(foo(11));
