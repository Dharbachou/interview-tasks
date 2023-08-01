/*
input: [1, 2, 3, 1]
return: true
*/

function sertchDuplicate(arr) {
  if (arr.length < 2) {
    return false;
  }

  const temp = [];

  for (let i = 0; i < arr.lenth; i++) {
    if (temp.includes(arr[i])) {
      return true;
    } else {
      temp.push(arr[i]);
    }
  }

  return false;
} 

