let pattern1 = [1, 2, 3, 4, 5];
let pattern2 = [2, 1, 2, 3, 2, 4, 2, 5];
let pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

function solution(answers) {
  let answer = [];
  let result1 = 0;
  let result2 = 0;
  let result3 = 0;
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === pattern1[i % pattern1.length]) {
      result1++;
    }
    if (answers[i] === pattern2[i % pattern2.length]) {
      result2++;
    }
    if (answers[i] === pattern3[i % pattern3.length]) {
      result3++;
    }
  }
  console.log(result1, result2, result3);
  let maxNum = Math.max(result1, result2, result3);

  if (maxNum === result1) {
    answer.push(1);
  }
  if (maxNum === result2) {
    answer.push(2);
  }
  if (maxNum === result3) {
    answer.push(3);
  }
  return answer;
}

console.log(solution([1, 3, 2, 4, 2]));
