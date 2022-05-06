function solution(numbers, target) {
  let answer = 0;

  function recursion(sum, leftArr) {
    if (leftArr.length <= 0) {
      if (sum === target) {
        answer++;
      }
      return;
    }
    for (let i = 0; i < 2; i++) {
      if (i === 0) {
        // 다음 값이 더하거나
        recursion(sum + leftArr[0], leftArr.slice(1));
      } else {
        // 다음값을 빼거나
        recursion(sum - leftArr[0], leftArr.slice(1));
      }
    }
  }

  recursion(0, numbers);
  return answer;
}

console.log("결과:", solution([1, 1, 1, 1, 1], 3));
