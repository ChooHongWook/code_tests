function solution(numbers) {
  var answer = 45 - numbers.reduce((cum, crt) => cum + crt);

  return answer;
}
