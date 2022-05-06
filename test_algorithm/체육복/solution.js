function solution(n, lost, reserve) {
  let answer = 0;
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  // 여분을 가져온사람이 도난당하는 경우
  let count = 0;
  let start;
  for (let i = 0; i < lost.length; i++) {
    for (let j = start || 0; j < reserve.length; j++) {
      if (lost[i] === reserve[j]) {
        lost.splice(i - count, 1);
        reserve.splice(j - count, 1);
        count++;
        start = j;
        break;
      }
    }
  }

  // n은 1부터 n 까지의 배열
  let arrN = [];
  for (let i = 1; i <= n; i++) {
    arrN.push(i);
  }

  let lostIdx = 0;
  let reserveIdx = 0;
  let notGet = [];
  while (lostIdx < lost.length && reserveIdx < reserve.length) {
    if (
      lost[lostIdx] === reserve[reserveIdx] - 1 ||
      lost[lostIdx] === reserve[reserveIdx] + 1
    ) {
      // console.log(lost[lostIdx] + "받음");
      lostIdx++;
      reserveIdx++;
    } else if (lost[lostIdx] > reserve[reserveIdx] + 1) {
      // console.log("줄사람 없음");
      reserveIdx++;
    } else if (lost[lostIdx] < reserve[reserveIdx] - 1) {
      // console.log(lost[lostIdx] + "못받음");
      notGet.push(lost[lostIdx]);
      lostIdx++;
    }
    // console.log("notGet:", notGet);
  }

  if (lostIdx < lost.length) {
    // console.log("못받은 사람 :", lost.slice(lostIdx));

    notGet = notGet.concat(lost.slice(lostIdx));
  }

  // console.log("총 못받은 사람: ", notGet);
  for (let i = 0; i < notGet.length; i++) {
    arrN.splice(notGet[i] - i - 1, 1);
  }
  // console.log("총 받은사람:", arrN);
  answer = arrN.length;
  return answer;
}

console.log(solution(7, [2, 3, 4], [1, 2, 3, 6]));

// 1, , 3, , 5

// reserve있는 사람이 줄수 있는 사람이 있는경우
// for (let i = 0; i < lost.length; i++) {
//   for (let j = 0; j < reserve.length; j++) {
//     if (lost[i] === reserve[j] - 1 || lost[i] === reserve[j] + 1) {
//       lost.splice(i, 1);
//       reserve.splice(j, 1)
//     }
//   }
// }
