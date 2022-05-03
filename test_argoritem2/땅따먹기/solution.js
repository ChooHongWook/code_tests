function solution(land) {
  // 같은 행의 숫자를 밟을수 없다.
  // 밟은 숫자들합의 최댓갑을 구하여라
  let answer = 0;
  let point;
  for (let i = 0; i < land[0].length; i++) {
    for (let j = 0; j < land.length; j++) {
      point = i;

      land[j + 1].splice(i, 1);
      console.log('a:', land[j + 1]);
      Math.max();
      answer += land[j][i];
      console.log('answer:', answer);
    }
  }

  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  console.log('Hello Javascript');

  return answer;
}
