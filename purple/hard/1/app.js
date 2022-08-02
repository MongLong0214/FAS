const foo = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  const words = str.split("");
  let result = 0;
  words.map((word) => {
    if (vowels.includes(word)) {
      result += 1;
    }
  });
  return result;
};

console.log(foo("abracadabra"));
