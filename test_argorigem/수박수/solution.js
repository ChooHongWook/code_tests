function solution(n) {
  let char1 = "수";
  let char2 = "박";
  let answer = "";

  for (let i = 0; i < n; i++) {
    if (i % 2) {
      answer += char2;
    } else {
      answer += char1;
    }
  }
  return answer;
}
