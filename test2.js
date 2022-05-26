function solution(arr, F, M) {
  let sum = arr.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  console.log('sum:', sum);
  let goal = (arr.length + F) * M;
  console.log('goal:', goal);
  let findArr = Array(F).fill(1);
  console.log('findArr:', findArr);
  let findSum = goal - sum;
  console.log('findSum:', findSum);
  let avg = findSum / findArr.length;
  console.log('avg:', avg);
  // 인자들의 숫자를 더해서 findSum이 되야함

  let findSum2 = findSum - findArr.length;
  console.log('findSum2:', findSum2);
  let idx = 0;

  for (let i = 0; i < findArr.length; i++) {
    console.log('findArr in:', findArr);
    console.log('i:', i);
    if (findSum2 < 6) {
      console.log('break');
      findArr[i] = findArr[i] + findSum2;
      findSum2 = 0;
      console.log('findArr ininer:', findArr);
      break;
    }
    findArr[i] = findArr[i] + 5;
    findSum2 -= 5;
  }

  if (findSum2 > 0) {
    return 0;
  }
  return findArr;
}

let result1 = solution([3, 2, 4, 3], 2, 4);
// let result2 = solution([1, 5, 6], 4, 3);
// let result3 = solution([1, 2, 3, 4], 4, 6);

console.log('result1:', result1);
// console.log('result2:', result2);
// console.log('result3:', result3);

// ----------------------------------------------------------------
// function solution(arr, F, M) {
//   let sum = arr.reduce((acc, cur) => {
//     return acc + cur;
//   }, 0);
//   let goal = (arr.length + F) * M;
//   let findArr = Array(F).fill(1);
//   let findSum = goal - sum;
//   let avg = findSum / findArr.length;
//   // 인자들의 숫자를 더해서 findSum이 되야함

//   let findSum2 = findSum - findArr.length;

//   for (let i = 0; i < findArr.length; i++) {
//     if (findSum2 < 6) {
//       findArr[i] = findArr[i] + findSum2;
//       findSum2 = 0;

//       break;
//     }
//     findArr[i] = findArr[i] + 5;
//     findSum2 -= 5;
//   }

//   if (findSum2 > 0) {
//     return 0;
//   }
//   return findArr;
// }
