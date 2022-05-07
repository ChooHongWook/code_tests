function solution(numbers) {
  var answer = 45 - numbers.reduce((acc, cur) => acc + cur);

  return answer;
}
