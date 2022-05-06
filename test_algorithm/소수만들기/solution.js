function isPrime(n) {
  if (n <= 2) {
    return false;
  }
  let sqrt = Math.floor(Math.sqrt(n));
  // console.log("sqrt:",sqrt)
  if (n % 2 === 0) {
    return false;
  }
  for (let i = 3; i <= sqrt; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(nums) {
  nums.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        // console.log(nums[i] + nums[j] + nums[k])
        if (isPrime(nums[i] + nums[j] + nums[k])) {
          count++;
        }
      }
    }
  }

  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  return count;
}
