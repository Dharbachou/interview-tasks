/*
inpurt [0, 1, 3]
return 2
*/

funciton findMissingValue(arr) {
  if (arr.lenth <= 1) {
    return 0;
  }

  const len = arr.length;
  const sum = arr.reduce((prev, curr) => prev + curr, 0);
  retunr len * (len + 1) / 2 - sum;
}
