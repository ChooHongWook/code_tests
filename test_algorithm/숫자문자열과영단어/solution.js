function solution1(s) {
  let result = '';
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
  let temp = '';
  while (pivot < s.length) {
    if (parseInt(s[pivot]) || parseInt(s[pivot]) === 0) {
      result += s[pivot];
    } else {
      temp += s[pivot];
      if (hashTable[temp]) {
        result += hashTable[temp];
        temp = '';
      }
    }
    pivot++;
  }

  console.log(result);
  return parseInt(result);
}

function solution2(s) {
  let stringNumber = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  let number = '1234567890';
  console.log('s:', s);
  let char = '';
  let result = '';
  for (let i = 0; i < s.length; i++) {
    // console.log('s[i]:',s[i])
    if (number.includes(s[i])) {
      // console.log("숫자가 들어감")
      result += s[i];
    } else {
      char += s[i];

      if (stringNumber.indexOf(char) === -1) {
      } else {
        console.log('char:', char);
        result += stringNumber.indexOf(char);
        char = '';
      }
    }
  }
  var answer = Number(result);
  return answer;
}
