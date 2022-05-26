/*
Logic
result의 행의 길이 ===  arr1의 행의 길이 
result의 열의 길이 === arr2의 열의 길이
arr1의 행(row, y)과 arr2의 열(col,x)의 대응되는 곱셉의 합

(y,x)
(row, col)
*/

function solution(arr1, arr2) {
  // result의 크기
  const [row, col] = [arr1.length, arr2[0].length];
  console.log('row:', row);
  console.log('col:', col);

  // result배열 만들기
  let result = new Array(row);
  console.log('result:', result);
  for (let i = 0; i < row; i++) {
    result[i] = new Array(col);
    console.log('result in for:', result);
  }

  // arr1의 열의 개수 === arr2의 행의 개수,
  // arr1의 i번째 행과 arr2의 j번째 열의 원소들을 곱한 것들의 합이
  // result[i][j] 값
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      result[i][j] = arr1[i].reduce((sum, arr1Value, rowIndex) => {
        console.log(`arr1[${i}]`);
        console.log('sum:', sum);
        console.log('arr1Value:', arr1Value);
        console.log('rowIndex:', rowIndex);
        return sum + arr1Value * arr2[rowIndex][j];
      }, 0);
    }
  }
  return result;
}

/*
정확성  테스트
테스트 1 〉	통과 (3.70ms, 32.2MB)
테스트 2 〉	통과 (26.20ms, 33.8MB)
테스트 3 〉	통과 (26.17ms, 34.1MB)
테스트 4 〉	통과 (0.78ms, 30.4MB)
테스트 5 〉	통과 (14.71ms, 34.2MB)
테스트 6 〉	통과 (12.85ms, 34MB)
테스트 7 〉	통과 (1.17ms, 30.5MB)
테스트 8 〉	통과 (0.70ms, 30.1MB)
테스트 9 〉	통과 (0.37ms, 30.1MB)
테스트 10 〉	통과 (14.92ms, 33.8MB)
테스트 11 〉	통과 (4.26ms, 32.2MB)
테스트 12 〉	통과 (1.01ms, 30.2MB)
테스트 13 〉	통과 (9.43ms, 33.8MB)
테스트 14 〉	통과 (16.38ms, 33.8MB)
테스트 15 〉	통과 (5.32ms, 32MB)
테스트 16 〉	통과 (3.70ms, 32.7MB)
*/

//------------------------------------------------------------------------------

function solution(arr1, arr2) {
  return arr1.map((row) =>
    arr2[0].map((x, y) => row.reduce((a, b, c) => a + b * arr2[c][y], 0))
  );
}
// 단점 arr1의 열의 길이가 arr2의 열의 길이가 다르면 답이 다르게 나옴
/*
정확성  테스트
테스트 1 〉	통과 (2.42ms, 32.3MB)
테스트 2 〉	통과 (12.35ms, 33.5MB)
테스트 3 〉	통과 (5.42ms, 33.3MB)
테스트 4 〉	통과 (1.33ms, 30.4MB)
테스트 5 〉	통과 (12.29ms, 33.9MB)
테스트 6 〉	통과 (10.75ms, 33.8MB)
테스트 7 〉	통과 (0.69ms, 30.4MB)
테스트 8 〉	통과 (0.39ms, 30.3MB)
테스트 9 〉	통과 (0.45ms, 30MB)
테스트 10 〉	통과 (14.59ms, 33.2MB)
테스트 11 〉	통과 (2.93ms, 32.5MB)
테스트 12 〉	통과 (0.74ms, 29.7MB)
테스트 13 〉	통과 (9.70ms, 33.5MB)
테스트 14 〉	통과 (31.03ms, 34.2MB)
테스트 15 〉	통과 (6.47ms, 31.9MB)
테스트 16 〉	통과 (4.12ms, 32.7MB)
*/

//------------------------------------------------------------------------------

function productMatrix(A, B) {
  var answer = Array();
  if (A[0].length !== B.length) {
    return false;
  } else {
    for (var i = 0; i < A.length; i++) {
      answer[i] = [];
      for (var j = 0; j < B[i].length; j++) {
        var sum = 0;
        for (var k = 0; k < A[0].length; k++) {
          sum += A[i][k] * B[k][j];
        }
        answer[i][j] = sum;
      }
    }
  }
  return answer;
}

/*

*/
