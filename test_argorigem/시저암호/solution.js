// O(n^2)
function solution(s, n) {
  let answer = '';
  let lowerChar = 'abcdefghijklmnopqrstuvwxyz';
  let upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let i = 0; i < s.length; i++) {
    console.log('s[i]', s[i]);
    if (s[i] === ' ') {
      answer += ' ';
    } else if (s[i] === s[i].toUpperCase()) {
      console.log('대문자');
      for (let j = 0; j < upperChar.length; j++) {
        if (s[i] === upperChar[j]) {
          answer += upperChar[(j + n) % upperChar.length];
        }
      }
    } else if (s[i] === s[i].toLowerCase()) {
      console.log('소문자');
      for (let j = 0; j < lowerChar.length; j++) {
        if (s[i] === lowerChar[j]) {
          answer += lowerChar[(j + n) % lowerChar.length];
        }
      }
    }
  }
  return answer;
}

console.log(solution('AB', 1));

// 정규식쓰면 바로 될거 같은데..
