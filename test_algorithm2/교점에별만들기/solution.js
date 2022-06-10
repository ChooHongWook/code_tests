//! 처음 풀이
// (x,y)
// 교점을 구하는 함수
function GetIntersection([A, B, E], [C, D, F]) {
  if (A * D - B * C === 0) {
    return false;
  }
  const x = (B * F - E * D) / (A * D - B * C);
  if (!Number.isInteger(x)) {
    return false;
  }
  const y = (E * C - A * F) / (A * D - B * C);
  if (!Number.isInteger(y)) {
    return false;
  }
  return [x, y];
}

function solution(line) {
  // 교점 조건
  // 교점들 중 절대값이 가장 큰것이 point임
  // 위치가 정수인 것만 인정

  //교점 구하기
  let intersectionArr = [];
  for (let i = 0; i < line.length - 1; i++) {
    for (let j = i + 1; j < line.length; j++) {
      console.log('i:', i);
      console.log('j:', j);
      console.log('line[i]:', line[i]);
      console.log('line[j]:', line[j]);
      let intersection = GetIntersection(line[i], line[j]);
      if (intersection) {
        console.log('정수교점 있음:', intersection);
        intersectionArr.push(intersection);
      } else {
        console.log('없음');
      }
      console.log();
    }
  }
  console.log('intersectionArr:', intersectionArr);

  // 인자를 사용해서 별 그리기
  // 높이 y값중 가장 큰수 - 가장 작은수
  // 너비 x값중 가장 큰수 - 가장 작은수
  //                큰수                 , 작은수
  let xBigSmall = [intersectionArr[0][0], intersectionArr[0][0]];
  let yBigSmall = [intersectionArr[0][1], intersectionArr[0][1]];
  for (let i = 0; i < intersectionArr.length; i++) {
    console.log('for inner:', intersectionArr[i]);
    if (intersectionArr[i][0] > xBigSmall[0])
      xBigSmall[0] = intersectionArr[i][0];
    if (intersectionArr[i][0] < xBigSmall[1])
      xBigSmall[1] = intersectionArr[i][0];
    if (intersectionArr[i][1] > yBigSmall[0])
      yBigSmall[0] = intersectionArr[i][1];
    if (intersectionArr[i][1] < yBigSmall[1])
      yBigSmall[1] = intersectionArr[i][1];
    console.log('in xBigSmall:', xBigSmall);
    console.log('in yBigSmall:', yBigSmall);
    console.log();
  }
  console.log('xBigSmall:', xBigSmall);
  console.log('yBigSmall:', yBigSmall);

  // matrix만들기
  let rowLen = yBigSmall[0] - yBigSmall[1] + 1;
  let colLen = xBigSmall[0] - xBigSmall[1] + 1;
  let matrix = [];
  for (let i = 0; i < rowLen; i++) {
    matrix.push(Array(colLen).fill('.'));
  }
  console.log('matrix:', matrix);

  // 해당위치에 결과만들기
  for (let i = 0; i < intersectionArr.length; i++) {
    let x = intersectionArr[i][0];
    let y = intersectionArr[i][1];
    console.log('x:', x);
    console.log('y:', y);
    console.log('x - xBigSmall[1]:', x - xBigSmall[1]);
    console.log('y - yBigSmall[1]:', y - yBigSmall[1]);
    // ! 틀림
    // matrix[rowLen - 1 - (y - yBigSmall[1])][colLen - 1 - (x - xBigSmall[1])] =
    //   '*';

    // ? 수정
    matrix[yBigSmall[0] - y][x - xBigSmall[1]] = '*';
    console.log();
  }

  console.log('result matrix:', matrix);
  return matrix.map((e) => e.join(''));
}

/*
정확성  테스트
테스트 1 〉	통과 (0.39ms, 30.2MB)
테스트 2 〉	통과 (8.78ms, 34.9MB)
테스트 3 〉	통과 (0.26ms, 30.2MB)
테스트 4 〉	통과 (21.60ms, 42.2MB)
테스트 5 〉	통과 (4.42ms, 32.9MB)
테스트 6 〉	통과 (1.21ms, 30.3MB)
테스트 7 〉	통과 (6.52ms, 33.9MB)
테스트 8 〉	통과 (0.26ms, 30.1MB)
테스트 9 〉	통과 (23.45ms, 35.1MB)
테스트 10 〉	통과 (32.02ms, 35.6MB)
테스트 11 〉	통과 (36.37ms, 35.9MB)
테스트 12 〉	통과 (28.80ms, 35.8MB)
테스트 13 〉	통과 (37.52ms, 35.7MB)
테스트 14 〉	통과 (33.16ms, 35.3MB)
테스트 15 〉	통과 (37.91ms, 35.8MB)
테스트 16 〉	통과 (29.06ms, 35.4MB)
테스트 17 〉	통과 (25.75ms, 35.3MB)
테스트 18 〉	통과 (29.50ms, 35.8MB)
테스트 19 〉	통과 (27.02ms, 35.7MB)
테스트 20 〉	통과 (30.75ms, 35.3MB)
테스트 21 〉	통과 (33.32ms, 37.8MB)
테스트 22 〉	통과 (0.28ms, 30.1MB)
테스트 23 〉	통과 (0.25ms, 30.2MB)
테스트 24 〉	통과 (0.21ms, 30.1MB)
테스트 25 〉	통과 (0.29ms, 30.1MB)
테스트 26 〉	통과 (0.28ms, 30MB)
테스트 27 〉	통과 (0.16ms, 30MB)
테스트 28 〉	통과 (0.21ms, 30.1MB)
테스트 29 〉	통과 (0.19ms, 30.2MB)
*/

//----------------------------------------------------------------
// ! 수정풀이
function GetIntersection([A, B, E], [C, D, F]) {
  if (A * D - B * C === 0) {
    return false;
  }
  const x = (B * F - E * D) / (A * D - B * C);
  if (!Number.isInteger(x)) {
    return false;
  }
  const y = (E * C - A * F) / (A * D - B * C);
  if (!Number.isInteger(y)) {
    return false;
  }
  // 정수인 경우
  return [x, y];
}

function solution(line) {
  // 교점 조건
  // 교점들 중 절대값이 가장 큰것이 point임
  // 위치가 정수인 것만 인정

  //교점 구하기
  let intersectionArr = [];
  for (let i = 0; i < line.length - 1; i++) {
    for (let j = i + 1; j < line.length; j++) {
      console.log('i:', i);
      console.log('j:', j);
      console.log('line[i]:', line[i]);
      console.log('line[j]:', line[j]);
      let intersection = GetIntersection(line[i], line[j]);
      if (intersection) {
        console.log('정수교점 있음:', intersection);
        intersectionArr.push(intersection);
      } else {
        console.log('없음');
      }
      console.log();
    }
  }
  console.log('intersectionArr:', intersectionArr);

  // 인자를 사용해서 별 그리기
  // 높이 y값중 가장 큰수 - 가장 작은수
  // 너비 x값중 가장 큰수 - 가장 작은수
  //                큰수                 , 작은수

  let xMin = Math.min(...intersectionArr.map((ele) => ele[0]));
  let xMax = Math.max(...intersectionArr.map((ele) => ele[0]));
  let yMin = Math.min(...intersectionArr.map((ele) => ele[1]));
  let yMax = Math.max(...intersectionArr.map((ele) => ele[1]));

  // matrix만들기
  let rowLen = yMax - yMin + 1;
  let colLen = xMax - xMin + 1;
  let matrix = [];
  for (let i = 0; i < rowLen; i++) {
    matrix.push(Array(colLen).fill('.'));
  }
  console.log('matrix:', matrix);

  // 해당위치에 결과만들기
  for (let i = 0; i < intersectionArr.length; i++) {
    let x = intersectionArr[i][0];
    let y = intersectionArr[i][1];
    matrix[yMax - y][x - xMin] = '*';
    console.log();
  }

  console.log('result matrix:', matrix);
  return matrix.map((e) => e.join(''));
}

/*
정확성  테스트
테스트 1 〉	통과 (0.37ms, 29.9MB)
테스트 2 〉	통과 (7.45ms, 34.6MB)
테스트 3 〉	통과 (0.29ms, 29.7MB)
테스트 4 〉	통과 (17.52ms, 41.8MB)
테스트 5 〉	통과 (4.54ms, 32.5MB)
테스트 6 〉	통과 (1.13ms, 30.1MB)
테스트 7 〉	통과 (6.35ms, 33.7MB)
테스트 8 〉	통과 (0.26ms, 29.8MB)
테스트 9 〉	통과 (48.16ms, 34.9MB)
테스트 10 〉	통과 (53.28ms, 34.8MB)
테스트 11 〉	통과 (56.76ms, 35.2MB)
테스트 12 〉	통과 (49.07ms, 35.7MB)
테스트 13 〉	통과 (35.71ms, 35.1MB)
테스트 14 〉	통과 (29.13ms, 35.3MB)
테스트 15 〉	통과 (33.79ms, 35.9MB)
테스트 16 〉	통과 (26.70ms, 35.6MB)
테스트 17 〉	통과 (25.63ms, 35MB)
테스트 18 〉	통과 (32.94ms, 35.7MB)
테스트 19 〉	통과 (26.05ms, 35.6MB)
테스트 20 〉	통과 (27.75ms, 35.5MB)
테스트 21 〉	통과 (31.47ms, 37.6MB)
테스트 22 〉	통과 (0.29ms, 29.8MB)
테스트 23 〉	통과 (0.26ms, 30.1MB)
테스트 24 〉	통과 (0.23ms, 30MB)
테스트 25 〉	통과 (0.24ms, 30MB)
테스트 26 〉	통과 (0.29ms, 29.9MB)
테스트 27 〉	통과 (0.29ms, 29.9MB)
테스트 28 〉	통과 (0.21ms, 29.7MB)
테스트 29 〉	통과 (0.18ms, 30MB)
*/

let result = solution([
  [2, -1, 4],
  [-2, -1, 4],
  [0, -1, 1],
  [5, -8, -12],
  [5, 8, 12],
]);
console.log('result:', result);
