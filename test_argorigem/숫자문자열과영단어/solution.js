function solution(s) {
  let result = "";
  let hashTable = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  let pivot = 0;
  let temp = "";
  while (pivot < s.length) {
    if (parseInt(s[pivot]) || parseInt(s[pivot]) === 0) {
      result += s[pivot];
    } else {
      temp += s[pivot];
      if (hashTable[temp]) {
        result += hashTable[temp];
        temp = "";
      }
    }
    pivot++;
  }

  console.log(result);
  return parseInt(result);
}
