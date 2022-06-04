// 최초풀이
function doRotation(matrix, pointObj) {
  //get round
  // 22 => 24 => 54 => 52 => 22
  //    증가   증가   감소   감소
  // y가 가로
  // x가 세로
  // 만약 y의 값이 4(뒤의값이 되면)
  // x를 더함
  let [xPoint, yPoint] = [pointObj.x[0] - 1, pointObj.y[0] - 1];
  let startValue = matrix[xPoint][yPoint];
  // y갑 증가
  // 22 => 24 => 54 => 52 => 22
  //   y증가  x증가   y감소   x감소

  let valueArr = [0];
  let buffer = [];

  // y증가
  for (; yPoint < pointObj.y[1] - 1; yPoint++) {
    valueArr.push(matrix[xPoint][yPoint]);
    buffer.push(matrix[xPoint][yPoint]);
    matrix[xPoint][yPoint] = valueArr.shift();
  }
  // x증가
  for (; xPoint < pointObj.x[1] - 1; xPoint++) {
    valueArr.push(matrix[xPoint][yPoint]);
    buffer.push(matrix[xPoint][yPoint]);
    matrix[xPoint][yPoint] = valueArr.shift();
  }
  // y감소
  for (; yPoint > pointObj.y[0] - 1; yPoint--) {
    valueArr.push(matrix[xPoint][yPoint]);
    buffer.push(matrix[xPoint][yPoint]);
    matrix[xPoint][yPoint] = valueArr.shift();
  }
  // x감소
  for (; xPoint > pointObj.x[0] - 1; xPoint--) {
    valueArr.push(matrix[xPoint][yPoint]);
    buffer.push(matrix[xPoint][yPoint]);
    matrix[xPoint][yPoint] = valueArr.shift();
  }
  matrix[pointObj.x[0] - 1][pointObj.y[0] - 1] = valueArr.shift();
  return Math.min(...buffer);
}

function getPointObj(arr) {
  let obj = { x: [], y: [] };
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      obj.x.push(arr[i]);
    } else {
      obj.y.push(arr[i]);
    }
  }

  return obj;
}

function makematrix(rows, columns) {
  // make metirx
  let matrix = [];
  let innerNum = 1;
  for (let r = 0; r < rows; r++) {
    let rowArr = [];
    for (let c = 0; c < columns; c++) {
      rowArr.push(innerNum);
      innerNum++;
    }
    matrix.push(rowArr);
  }

  return matrix;
}

function solution(rows, columns, queries) {
  let matrix = makematrix(rows, columns);
  let result = [];

  for (let i = 0; i < queries.length; i++) {
    let pointObj = getPointObj(queries[i]);

    result.push(doRotation(matrix, pointObj));
    // break;
  }

  return result;
}
/*
정확성  테스트
테스트 1 〉	통과 (0.38ms, 30MB)
테스트 2 〉	통과 (0.25ms, 29.9MB)
테스트 3 〉	통과 (33.74ms, 41.3MB)
테스트 4 〉	통과 (22.34ms, 36.7MB)
테스트 5 〉	통과 (27.51ms, 36.6MB)
테스트 6 〉	통과 (27.04ms, 40.8MB)
테스트 7 〉	통과 (29.47ms, 41.3MB)
테스트 8 〉	통과 (21.06ms, 36.6MB)
테스트 9 〉	통과 (26.59ms, 40.9MB)
테스트 10 〉	통과 (23.21ms, 37.2MB)
테스트 11 〉	통과 (21.82ms, 36.6MB)
*/
//--------------------------------------------------------
// 최적화 시도

function solution(rows, columns, queries) {
  let matrix = makematrix(rows, columns);
  let result = [];

  for (let i = 0; i < queries.length; i++) {
    result.push(doRotation(matrix, queries[i]));
    // break;
  }

  return result;
}

function makematrix(rows, columns) {
  // make metirx
  let matrix = [];
  let innerNum = 1;
  for (let r = 0; r < rows; r++) {
    let rowArr = [];
    for (let c = 0; c < columns; c++) {
      rowArr.push(innerNum);
      innerNum++;
    }
    matrix.push(rowArr);
  }

  return matrix;
}

function doRotation(matrix, querie) {
  //get round
  // 22 => 24 => 54 => 52 => 22
  //    증가   증가   감소   감소
  // y가 가로
  // x가 세로
  // 만약 y의 값이 4(뒤의값이 되면)
  // x를 더함
  let [xPoint, yPoint] = [querie[0] - 1, querie[1] - 1];
  // y갑 증가
  // 22 => 24 => 54 => 52 => 22
  //   y증가  x증가   y감소   x감소

  let valueArr = [0];
  let smallNum = matrix[xPoint][yPoint];

  // y증가
  for (; yPoint < querie[3] - 1; yPoint++) {
    valueArr.push(matrix[xPoint][yPoint]);
    if (smallNum > matrix[xPoint][yPoint]) {
      smallNum = matrix[xPoint][yPoint];
    }
    matrix[xPoint][yPoint] = valueArr.shift();
  }
  // x증가
  for (; xPoint < querie[2] - 1; xPoint++) {
    valueArr.push(matrix[xPoint][yPoint]);
    if (smallNum > matrix[xPoint][yPoint]) {
      smallNum = matrix[xPoint][yPoint];
    }
    matrix[xPoint][yPoint] = valueArr.shift();
  }
  // y감소
  for (; yPoint > querie[1] - 1; yPoint--) {
    valueArr.push(matrix[xPoint][yPoint]);
    if (smallNum > matrix[xPoint][yPoint]) {
      smallNum = matrix[xPoint][yPoint];
    }
    matrix[xPoint][yPoint] = valueArr.shift();
  }
  // x감소
  for (; xPoint > querie[0] - 1; xPoint--) {
    valueArr.push(matrix[xPoint][yPoint]);
    if (smallNum > matrix[xPoint][yPoint]) {
      smallNum = matrix[xPoint][yPoint];
    }
    matrix[xPoint][yPoint] = valueArr.shift();
  }
  matrix[querie[0] - 1][querie[1] - 1] = valueArr.shift();

  return smallNum;
}

/*
정확성  테스트
테스트 1 〉	통과 (0.17ms, 29.7MB)
테스트 2 〉	통과 (0.25ms, 30.1MB)
테스트 3 〉	통과 (28.93ms, 36MB)
테스트 4 〉	통과 (19.64ms, 35.7MB)
테스트 5 〉	통과 (26.62ms, 35.7MB)
테스트 6 〉	통과 (23.81ms, 36.5MB)
테스트 7 〉	통과 (25.83ms, 37.4MB)
테스트 8 〉	통과 (18.99ms, 35.6MB)
테스트 9 〉	통과 (23.90ms, 36.2MB)
테스트 10 〉	통과 (21.53ms, 35.7MB)
테스트 11 〉	통과 (23.06ms, 35.8MB)

*/

//--------------------------------------------------------
// 다른 사람 풀이

function solution(rows, columns, queries) {
  var answer = [];
  // matrix 만틀기
  let matrix = new Array(rows);
  for (let i = 0; i < rows; i++) matrix[i] = new Array(columns);
  for (let i = 0; i < rows; i++)
    for (let j = 0; j < columns; j++) matrix[i][j] = i * columns + j + 1;

  // index 번호에 맞게 조절
  for (const query of queries) {
    let order = [];
    const [row1, col1, row2, col2] = [
      query[0] - 1,
      query[1] - 1,
      query[2] - 1,
      query[3] - 1,
    ];
    //fill order (row1->row2, col1->col2, row2->row2, col2->col1)
    for (let i = row1; i <= row2; i++) order.push(matrix[i][col1]);
    for (let i = col1 + 1; i <= col2; i++) order.push(matrix[row2][i]);
    for (let i = row2 - 1; i >= row1; i--) order.push(matrix[i][col2]);
    for (let i = col2 - 1; i > col1; i--) order.push(matrix[row1][i]);
    //rotate clockwise
    order.push(order.shift());
    answer.push(Math.min(...order));
    //change value in matrix
    for (let i = row1; i <= row2; i++) matrix[i][col1] = order.shift();
    for (let i = col1 + 1; i <= col2; i++) matrix[row2][i] = order.shift();
    for (let i = row2 - 1; i >= row1; i--) matrix[i][col2] = order.shift();
    for (let i = col2 - 1; i > col1; i--) matrix[row1][i] = order.shift();
  }
  return answer;
}
/*
정확성  테스트
테스트 1 〉	통과 (0.19ms, 29.9MB)
테스트 2 〉	통과 (0.16ms, 29.7MB)
테스트 3 〉	통과 (62.50ms, 40.7MB)
테스트 4 〉	통과 (39.00ms, 36.3MB)
테스트 5 〉	통과 (52.46ms, 36.4MB)
테스트 6 〉	통과 (77.81ms, 41MB)
테스트 7 〉	통과 (53.13ms, 41.3MB)
테스트 8 〉	통과 (36.81ms, 36.5MB)
테스트 9 〉	통과 (48.18ms, 41.1MB)
테스트 10 〉	통과 (41.79ms, 36.2MB)
테스트 11 〉	통과 (42.76ms, 36.8MB)
*/
//--------------------------------------------------------

// 가장 좋은 코드 인듯
function solution(rows, columns, queries) {
  // matrix만들기
  const a = [...Array(rows)].map((_, r) =>
    [...Array(columns)].map((_, c) => r * columns + c + 1)
  );
  const mins = [];

  // 이렇게 쓸거면 forEach쓰지
  queries.map((query) => {
    // 인덱스마 맞게 설정
    const [x1, y1, x2, y2] = query.map((_) => _ - 1);
    let min = a[x1][y1],
      tmp = a[x1][y1];

    // x증가
    for (let i = x1; i < x2; i++) {
      a[i][y1] = a[i + 1][y1];
      min = Math.min(min, a[i][y1]);
    }
    // y증가
    for (let i = y1; i < y2; i++) {
      a[x2][i] = a[x2][i + 1];
      min = Math.min(min, a[x2][i]);
    }
    // x감소
    for (let i = x2; i > x1; i--) {
      a[i][y2] = a[i - 1][y2];
      min = Math.min(min, a[i][y2]);
    }
    // y 감소
    for (let i = y2; i > y1; i--) {
      a[x1][i] = a[x1][i - 1];
      min = Math.min(min, a[x1][i]);
    }
    a[x1][y1 + 1] = tmp;

    mins.push(min);
  });

  return mins;
}
/*
정확성  테스트
테스트 1 〉	통과 (0.30ms, 30.1MB)
테스트 2 〉	통과 (0.21ms, 30.1MB)
테스트 3 〉	통과 (18.92ms, 34.9MB)
테스트 4 〉	통과 (19.01ms, 34.6MB)
테스트 5 〉	통과 (20.40ms, 34.5MB)
테스트 6 〉	통과 (16.84ms, 36.2MB)
테스트 7 〉	통과 (17.49ms, 36.3MB)
테스트 8 〉	통과 (19.43ms, 34.9MB)
테스트 9 〉	통과 (20.21ms, 36.2MB)
테스트 10 〉	통과 (19.11ms, 35.4MB)
테스트 11 〉	통과 (18.95ms, 35.8MB)
*/
//--------------------------------------------------------

let result = solution(3, 3, [
  [1, 1, 2, 2],
  [1, 2, 2, 3],
  [2, 1, 3, 2],
  [2, 2, 3, 3],
]);
