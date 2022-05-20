function solution(n) {
  // 1차 수도코드
  // 10진법을 3진법 으로 바꾸기
  // 3진법을 반전
  // 3 => 10

  // 2차 수도코드
  // 10진법을 3진법 으로 바꾸기
  // 들어온숫자 n을 3으로 나누고 그 나머지를 사용해야함
  let result = '';
  // 10진법을 3진법 으로 바꾸기
  // 3진법을 반전
  while (n >= 3) {
    // console.log('n:',n)
    result += n % 3;
    n = Math.floor(n / 3);
  }
  result += n % 3;
  // console.log("result:",result)
  // 반전된 3진법
  result;

  // 3 => 10진법
  // 앞에있는 0을 빼고
  // 뒤집는다.

  // 0이 끝나는 시점부터 slice
  for (let i = 0; i < result.length; i++) {
    // console.log('i1:',i)
    if (result[i] !== '0') {
      // console.log("i2:",i)
      result = result.slice(i);
      break;
    }
  }
  // console.log("result2:",result)
  const reversed_str = result.split('').reverse().join('');
  // console.log("reversed_str:",reversed_str)
  let answer = 0;
  for (let i = 0; i < reversed_str.length; i++) {
    answer += Math.pow(3, i) * reversed_str[i];
  }

  return answer;
}

/*
테스트 1 〉	통과 (0.09ms, 29.9MB)
테스트 2 〉	통과 (0.09ms, 30.3MB)
테스트 3 〉	통과 (0.15ms, 30.4MB)
테스트 4 〉	통과 (0.10ms, 30MB)
테스트 5 〉	통과 (0.10ms, 29.8MB)
테스트 6 〉	통과 (0.07ms, 30.1MB)
테스트 7 〉	통과 (0.07ms, 30.5MB)
테스트 8 〉	통과 (0.08ms, 29.9MB)
테스트 9 〉	통과 (0.11ms, 30.2MB)
테스트 10 〉	통과 (0.12ms, 30.1MB)
*/

const solution = (n) => {
  return parseInt([...n.toString(3)].reverse().join(''), 3);
};
/*
테스트 1 〉	통과 (0.04ms, 29.8MB)
테스트 2 〉	통과 (0.10ms, 30.1MB)
테스트 3 〉	통과 (0.04ms, 30.1MB)
테스트 4 〉	통과 (0.03ms, 30.1MB)
테스트 5 〉	통과 (0.10ms, 30.1MB)
테스트 6 〉	통과 (0.07ms, 30.1MB)
테스트 7 〉	통과 (0.04ms, 30MB)
테스트 8 〉	통과 (0.04ms, 30.1MB)
테스트 9 〉	통과 (0.04ms, 29.9MB)
테스트 10 〉	통과 (0.04ms, 30MB)
*/

function solution(n) {
  const answer = [];
  while (n !== 0) {
    answer.unshift(n % 3);
    n = Math.floor(n / 3);
  }
  return answer.reduce((acc, v, i) => acc + v * Math.pow(3, i), 0);
}
/*
테스트 1 〉	통과 (0.05ms, 30MB)
테스트 2 〉	통과 (0.06ms, 30.1MB)
테스트 3 〉	통과 (0.05ms, 30MB)
테스트 4 〉	통과 (0.07ms, 30MB)
테스트 5 〉	통과 (0.06ms, 30.1MB)
테스트 6 〉	통과 (0.09ms, 30.1MB)
테스트 7 〉	통과 (0.06ms, 30.2MB)
테스트 8 〉	통과 (0.06ms, 30.2MB)
테스트 9 〉	통과 (0.06ms, 30.1MB)
테스트 10 〉	통과 (0.07ms, 29.6MB)
*/
