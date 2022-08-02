const foo = (n) => {
  //처음부터 n이 100이하 일 경우
  if (n < 101) {
    //각 자리수의 합을 구합니다.
    const a = n
      .toString()
      .split("")
      .reduce((acc, cur) => acc + parseInt(cur), 0);
    //각 자리수의 합을 한번만 빼줍니다.
    const answer = n - a;
    // 9의 배수는 모두 "apple"이므로 answer가 9의 배수일 때 "apple"를 반환합니다.
    if (answer % 9 === 0) {
      return "apple";
    } else {
      return false;
    }
    //n이 100보다 클 경우
  } else if (n > 100) {
    //n이 100이하가 될 때 까지 계속 각 자리수의 합을 빼줍니다.
    while (n > 100) {
      const b = n
        .toString()
        .split("")
        .reduce((acc, cur) => acc + parseInt(cur), 0);
      n = n - b;
    }
    // 100이하의 9의 배수는 모두 "apple"이므로 n이 9의 배수일 때 "apple"를 반환합니다.
    if (n % 9 === 0) {
      return "apple";
    } else {
      return false;
    }
  }
};

console.log(foo(10));
console.log(foo(325));
console.log(foo(100));
console.log(foo(101));
console.log(foo(99));
console.log(foo(42838));
