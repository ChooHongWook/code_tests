function solution(progresses, speeds) {
  // for wile 반복
  // 특정한 조건까지 반복해야하니까

  //모든 인자가 100을 넘어야함
  let isAllDone = progresses.filter((e) => e < 100);
  while (isAllDone.length > 0) {
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }
  }
  var answer = [];
  return answer;
}
/*
94, 60, 60
95, 90, 65
96, done(120), 70
97, done,75
98, done, 80
99, done, 85
done(100), done, 90
done,done, 95
done,done, 100(done)1
*/
