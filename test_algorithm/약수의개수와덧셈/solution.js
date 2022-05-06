function solution(left, right) {
  // 제곱수만 전부 홀수

  let answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      // 숫자사이에 제곱수인것만 빼면
      answer -= i;
    } else {
      answer += i;
    }
  }

  return answer;
}
