function solution(n, lost, reserve) {
  let answer = 0;
  // n은 1부터 n 까지의 배열
  let arrN = [];
  for (let i = 1; i <= n; i++) {
    arrN.push(i);
  }

  // reserve있는 사람이 줄수 있는 사람이 있는경우
  // for (let i = 0; i < lost.length; i++) {
  //   for (let j = 0; j < reserve.length; j++) {
  //     if (lost[i] === reserve[j] - 1 || lost[i] === reserve[j] + 1) {
  //       lost.splice(i, 1);
  //       reserve.splice(j, 1)
  //     }
  //   }
  // }

  let lostIdx = 0;
  let reserveIdx = 0;

  while (lostIdx >= lost.length || reserveIdx >= reserve.length) {
    if (
      lost[lostIdx] === reserve[reserveIdx] - 1 ||
      lost[lostIdx] === reserve[reserveIdx] + 1
    ) {
      lostIdx++;
      reserveIdx++;
    } else {
    }
  }

  for (let i = 0; i < lost.length; i++) {
    arrN.splice(lost[i] - i - 1, 1);
  }

  arrN;

  return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5]));

// 1, , 3, , 5
