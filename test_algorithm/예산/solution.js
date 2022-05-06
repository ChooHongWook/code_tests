// O(n)
function solution(d, budget) {
  d.sort((a, b) => a - b);
  console.log('d:', d);
  let answer = 0;
  let count = 0;
  while (answer < budget && count < d.length) {
    answer += d[count];
    count++;
    console.log('answer:', answer);
    console.log('count:', count);
  }
  if (answer > budget) {
    count--;
  }

  return count;
}
