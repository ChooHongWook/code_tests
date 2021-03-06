// (가로 + 세로 - 1) * 최대공약수
function getGcd(num1, num2) {
  if (num2 > num1) {
    [num1, num2] = [num2, num1];
  }
  if (num1 % num2 === 0) {
    return num2;
  } else {
    [num1, num2] = [num2, num1 % num2];
  }
  return getGcd(num1, num2);
}

function solution(w, h) {
  // 비율대로 사용할 수  있음
  // 최대 공약수를 구해서
  let gcd = getGcd(w, h);
  let deleteBlock = w + h - gcd;
  let answer = w * h - deleteBlock;
  return answer;
}

/*
정확성  테스트
테스트 1 〉	통과 (0.12ms, 29.9MB)
테스트 2 〉	통과 (0.10ms, 30.1MB)
테스트 3 〉	통과 (0.11ms, 30.1MB)
테스트 4 〉	통과 (0.08ms, 29.9MB)
테스트 5 〉	통과 (0.13ms, 30.2MB)
테스트 6 〉	통과 (0.10ms, 30MB)
테스트 7 〉	통과 (0.12ms, 30.1MB)
테스트 8 〉	통과 (0.07ms, 30.1MB)
테스트 9 〉	통과 (0.07ms, 30.1MB)
테스트 10 〉	통과 (0.11ms, 30.1MB)
테스트 11 〉	통과 (0.07ms, 30.1MB)
테스트 12 〉	통과 (0.06ms, 29.9MB)
테스트 13 〉	통과 (0.08ms, 30MB)
테스트 14 〉	통과 (0.07ms, 30.1MB)
테스트 15 〉	통과 (0.13ms, 29.8MB)
테스트 16 〉	통과 (0.14ms, 29.9MB)
테스트 17 〉	통과 (0.18ms, 30MB)
테스트 18 〉	통과 (0.07ms, 30.2MB)
*/

//----------------------------------------------------------------
// 어글리파이 ??
let o = ($, _) => (_ ? o(_, $ % _) : $),
  solution = ($, _) => _ * $ + (1 - ($ + _) / (_ = o(_, $))) * _;

/*

*/
//----------------------------------------------------------------
function solution(w, h) {
  const gcd = (a, b) => {
    return b === 0 ? a : gcd(b, a % b);
  };

  return w * h - (w + h - gcd(w, h));
}
/*

*/
//----------------------------------------------------------------
// 가장 짧게
function solution(w, h) {
  const slope = h / w;
  let result = 0;

  for (let i = 1; i <= w; i++) {
    result += Math.ceil(slope * i);
  }

  return (h * w - result) * 2;
}

/*

*/
//----------------------------------------------------------------

function gcd(a, b) {
  return a == 0 ? b : gcd(b % a, a);
}
function solution(w, h) {
  return w * h - (w + h - gcd(w, h));
}
/*

*/
//----------------------------------------------------------------
