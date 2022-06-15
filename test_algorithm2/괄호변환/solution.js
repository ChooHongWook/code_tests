// 수정중

function solution(p) {
  if (p === '') return '';
  if (isCorrected(p)) return p;

  console.log('isBalanced:', isBalanced(p));
  console.log('isCorrected:', isCorrected(p));
  let result = '';
  let u = '',
    v = '';
  for (let i = 0; i < p.length; i++) {
    let sliced = p.slice(0, i);
    console.log('sliced:', sliced);

    if (isBalanced(sliced)) {
      u = sliced;
      v = p.slice(i);
      console.log('u:', u);
      console.log('v:', v);

      if (isCorrected(u)) {
        result += u;
        result += solution(v);
      } else {
        let aa = '(';
        let buff = u.slice(1, -1);
      }
    }
    console.log();
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

//----------------------------------------------------------------
// 풀이
function solution(p) {
  if (p.length === 0) return p;
  let bracketCount = 0;
  let isURight = true;
  for (let i = 0; i < p.length; i++) {
    bracketCount = p[i] === '(' ? bracketCount + 1 : bracketCount - 1;
    if (bracketCount < 0) isURight = false;
    if (bracketCount === 0) {
      const [u, v] = [p.slice(0, i + 1), p.slice(i + 1)];
      if (isURight) {
        return u + solution(v);
      } else {
        let emptyString = '(' + solution(v) + ')';
        const slicedReversedString = u
          .slice(1, u.length - 1)
          .split('')
          .map((bracket) => (bracket === '(' ? ')' : '('))
          .join('');
        return emptyString + slicedReversedString;
      }
    }
  }
}
