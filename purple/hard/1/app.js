const foo = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  const words = str.split("");
  const result = [];
  words.forEach((word) => {
    if (vowels.includes(word)) {
      result.push(word);
    }
  });
  return result.join("").length;
};

console.log(foo("abracadabra"));
