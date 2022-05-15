function solution(arr) {
  // 2개의 숫자씩 비교해서 최소 공배수를 구함
  let result = arr.reduce((acc, cur) => {
    return lcm(acc, cur);
  });
  // var answer = 0;
  return result;
}
// 최대공약수
function gcd(num1, num2) {
  // if (num1 > num2) {
  //     [num1,num2] = [num2,num1]
  // }
  while (num2 % num1 !== 0) {
    [num1, num2] = [num2 % num1, num1];
  }
  return num1;
}
// 최소공배수
function lcm(num1, num2) {
  if (num1 > num2) {
    [num1, num2] = [num2, num1];
  }
  return (num1 * num2) / gcd(num1, num2);
}
