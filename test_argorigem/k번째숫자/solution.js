let array = [1, 5, 2, 6, 3, 7, 4];
let commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];
// sort()는 그냥 가장 첫지리의 순서로 배열을 하므로 오류가 있었음
// function solution(array, commands) {
//   let answer = [];

//   for (let i = 0; i < commands.length; i++) {
//     let startNum = commands[i][0] - 1;
//     let lastNum = commands[i][1];
//     let arrayNum = commands[i][2];
//     let arrSlice = array.slice(startNum, lastNum);
//     answer.push(arrSlice.sort()[arrayNum - 1]);
//   }
//   return answer;
// }

// 1개가 틀렸다고 나옴 왜지? (sort를 잘썻어야지 ㅠㅠ)
function solution(array, commands) {
  let answer = [];
  for (let i = 0; i < commands.length; i++) {
    let startNum = commands[i][0] - 1;
    let lastNum = commands[i][1];
    let arrayNum = commands[i][2];
    let arrSlice = array.slice(startNum, lastNum);
    answer.push(arrSlice.sort((a, b) => a - b)[arrayNum - 1]);
  }
  return answer;
}

console.log(solution(array, commands));
