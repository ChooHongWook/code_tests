function solution(x) {
  let strX = String(x);
  // console.log("strX:",strX)
  let sum = 0;
  for (let i = 0; i < strX.length; i++) {
    // console.log("strX[i]:",strX[i])
    sum += Number(strX[i]);
  }
  // console.log("sum:",sum)
  if (x % sum === 0) {
    return true;
  }

  return false;
}
/*
정확성  테스트
테스트 1 〉	통과 (0.08ms, 29.8MB)
테스트 2 〉	통과 (0.05ms, 29.8MB)
테스트 3 〉	통과 (0.06ms, 30MB)
테스트 4 〉	통과 (0.05ms, 30MB)
테스트 5 〉	통과 (0.05ms, 30.1MB)
테스트 6 〉	통과 (0.06ms, 29.9MB)
테스트 7 〉	통과 (0.05ms, 30.1MB)
테스트 8 〉	통과 (0.05ms, 29.7MB)
테스트 9 〉	통과 (0.13ms, 29.8MB)
테스트 10 〉	통과 (0.12ms, 29.9MB)
테스트 11 〉	통과 (0.05ms, 29.9MB)
테스트 12 〉	통과 (0.05ms, 29.9MB)
테스트 13 〉	통과 (0.05ms, 30MB)
테스트 14 〉	통과 (0.04ms, 30MB)
테스트 15 〉	통과 (0.04ms, 30.1MB)
테스트 16 〉	통과 (0.05ms, 30MB)
테스트 17 〉	통과 (0.08ms, 30MB)
*/

//--------------------------------------------------------------

function Harshad(n) {
  return !(n % (n + '').split('').reduce((a, b) => +b + +a));
}
