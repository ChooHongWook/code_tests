// 간단하게 한것과 최적화가 가능할거 같은 버전을 이후에 좀더 생각해보아야 겠다.

// O(n)
function solution(a, b) {
  if (b < a) {
    [a, b] = [b, a];
  }
  var answer = a;

  for (let i = 1; i <= b - a; i++) {
    answer += a + i;
  }

  return answer;
}

// O(1)
function solution2(a, b) {
  var answer = a;

  return ((a + b) * (Math.abs(b - a) + 1)) / 2;
}

console.log(solution(1, 3));
console.log(solution2(1, 3));
