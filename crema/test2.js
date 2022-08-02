const findRange = (num) => {
  //change to string
  let str = num.toString();
  const firstIdx = str[0];
  let maxValue = "0";

  //   console.log(firstIdx);
  for (let i = 0; i < str.length; i++) {
    if (str[i] != "9") {
      maxValue = str[i];
      //   console.log("value", value);
      break;
    }
  }
  //   let max = str.replaceAll(maxValue, "9");
  let max = str.split(maxValue).join("9");
  //   console.log("max", max);

  let minValue = "0";
  let min = "0";
  if (str[0] != "1") {
    minValue = str[0];
    min = str.split(minValue).join("1");
  } else {
    for (let j = 1; j < str.length; j++) {
      if (str[j] != "0" && str[j] != "1") {
        minValue = str[j];
        break;
      }
    }
    min = str.split(minValue).join("0");
  }

  return max - min;
};

console.log(findRange(111));
