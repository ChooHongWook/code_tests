function solution(nums) {
  let answer = 0;
  // 1. 중복제거
  const dupArr = nums.slice();
  const set = new Set(dupArr);
  const uniqueArr = [...set];
  // 중복 제거된 길이와 원래 nums의 절반 길이중 작은것이 목표한 값
  answer = Math.min(uniqueArr.length, nums.length / 2);
  return answer;
}
