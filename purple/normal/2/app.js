const foo = (ids) => {
  // ids배열 오름차순 정렬
  const a = ids.sort((a, b) => {
    return a - b;
  });
  // ids배열 중복값 제거
  const b = Array.from(new Set(a));

  // 0부터 하나씩 돌면서 idx값이랑 비교 => idx값이랑 다른 수는 undefined 반환
  const c = b.map((item, idx) => {
    if (item === idx) {
      return item;
    }
  });

  // undefined 있으면 몇 번째 인덱스 인지 반환 undefined없으면 배열 길이 반환
  if (c.includes(undefined)) {
    return c.indexOf(undefined);
  } else {
    return c.length;
  }
};

console.log(foo([0, 1, 2, 4]));
console.log(foo([0, 1, 2, 3, 4, 5, 6]));
