const getFinalString = (n) => {
  while (s.includes("AWS")) {
    s = s.replace("AWS", "");
  }
  if (s === "") {
    return "-1";
  }
  return s;
};

console.log(getFinalString("AWSAWSAWS"));
