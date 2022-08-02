// Longest Subarray

const maxLength = (a, k) => {
  //   for (let i = 1; i < a.length; i++) {
  //     let isDone = false;
  //     for (let j = 0; j < a.length - 1; j++) {
  //       let sum = 0;
  //       for (let l = j; l < j + i; l++) {
  //         sum += a[l];
  //         if (sum > k) {
  //           break;
  //         }
  //       }
  //       if (sum < k) {
  //         isDone = true;
  //         break;
  //       }
  //     }
  //     if (!isDone) {
  //       return i - 1;
  //     }
  //   }
  //   return a.length;
  // };
  for (let i = a.length; i > 0; i--) {
    // let isDone = false;
    for (let j = 0; j < a.length - 1; j++) {
      let sum = 0;
      for (let k = j; k < j + i; k++) {
        sum += a[k];
      }
      if (sum <= k) {
        return i;
      }
    }
  }
};

console.log(
  maxLength(
    [
      74, 659, 931, 273, 545, 879, 924, 710, 441, 166, 493, 43, 988, 504, 328,
      730, 841, 613, 304, 170, 710, 158, 561, 934, 100, 279, 817, 336, 98, 827,
      513, 268, 811, 634, 980, 150, 580, 822, 968, 673, 394, 337, 486, 746, 229,
      92, 195, 358, 2, 154, 709, 945, 669, 491, 125, 197, 531, 904, 723, 667,
      550,
    ],
    22337
  )
);
