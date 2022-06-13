function solution(p) {
  if (p === '') return '';
  if (isCorrected(p)) return p;

  console.log('isBalanced:', isBalanced(p));
  console.log('isCorrected:', isCorrected(p));
  let result = '';
  let u = '',
    v = '';
  for (let i = 0; i < p.length; i++) {
    console.log('slice', p.slice(0, i));
    let sliced = p.slice(0, i);

    if (isBalanced(sliced)) {
      u = sliced;
      v = p.slice(i);
      if (isCorrected(u)) {
        result += u;
      } else {
        let buff = u.slice(1, -1);
      }
    }
  }
  var answer = '';
  return answer;
}

// '('의 개수와')'의 갯수가 같아야함
function isBalanced(str) {
  let countL = 0; // (
  let countR = 0; // )

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') countL++;
    if (str[i] === ')') countR++;
  }

  if (countL === countR) {
    return true;
  }
  return false;
}

function isCorrected(str) {
  let countL = 0; // (
  let countR = 0; // )

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') countL++;
    if (str[i] === ')') countR++;

    if (countL < countR) return false;
  }
  return true;
}

// let result = solution('(()())()');
// let result = solution(')(');
let result = solution('()))((()');

console.log('result: ', result);
