// 1안
function solution(arr1, arr2) {
  // arr1을 깊은 복사
  let deepDup = JSON.parse(JSON.stringify(arr1));
  //console.log("dup:",dup)
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      //console.log("arr1[i][j]:",arr1[i][j])
      deepDup[i][j] += arr2[i][j];
    }
  }
  return deepDup;
}
// 깊은 삭제로 인해 시간이 많이 걸리는 것 같음

// 2안 깊은복사 삭제
function solution(arr1, arr2) {
  //console.log("dup:",dup)
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      //console.log("arr1[i][j]:",arr1[i][j])
      arr1[i][j] += arr2[i][j];
    }
  }
  return arr1;
}
//

// 3안 가장짧은 코드
function solution(arr1, arr2) {
  return arr1.map((a, i) => a.map((b, j) => b + arr2[i][j]));
}
