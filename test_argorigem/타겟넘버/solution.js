function solution(numbers, target) {
  let answer = 0;
  let result;

  function recursion(sum, leftArr) {
    if (leftArr.length <= 0) {
      return sum;
    }
    let bucket = [];
    let head = leftArr[0];
    let body = leftArr.slice(1);
    console.log("head:", head);
    console.log("body:", body);
    for (let i = 0; i < 2; i++) {
      if (i === 0) {
        // 다음 값이 더하거나
        result = recursion(sum + head, body);
      } else {
        // 다음값을 빼거나
        result = recursion(sum - head, body);
      }
    }

    return result;
  }
  console.log("25:", recursion(0, numbers));
  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));
