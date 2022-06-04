function doRotation(metrix, pointObj) {
  //get round
  // 22 => 24 => 54 => 52 => 22
  //    증가   증가   감소   감소
  // y가 가로
  // x가 세로
  // 만약 y의 값이 4(뒤의값이 되면)
  // x를 더함
  let [xPoint, yPoint] = [pointObj.x[0] - 1, pointObj.y[0] - 1];
  let startValue = metrix[xPoint][yPoint];
  console.log('startValue:', startValue);
  // y갑 증가
  // 22 => 24 => 54 => 52 => 22
  //   y증가  x증가   y감소   x감소

  let valueArr = [0];
  let buffer = [];

  // y증가
  console.log('y증가');
  for (; yPoint < pointObj.y[1] - 1; yPoint++) {
    console.log('현재위치:', metrix[xPoint][yPoint]);
    valueArr.push(metrix[xPoint][yPoint]);
    buffer.push(metrix[xPoint][yPoint]);
    metrix[xPoint][yPoint] = valueArr.shift();
  }
  // x증가
  console.log('x증가');
  for (; xPoint < pointObj.x[1] - 1; xPoint++) {
    console.log('현재위치:', metrix[xPoint][yPoint]);
    valueArr.push(metrix[xPoint][yPoint]);
    buffer.push(metrix[xPoint][yPoint]);
    metrix[xPoint][yPoint] = valueArr.shift();
  }
  // y감소
  console.log('y감소');
  for (; yPoint > pointObj.y[0] - 1; yPoint--) {
    console.log('현재위치:', metrix[xPoint][yPoint]);
    valueArr.push(metrix[xPoint][yPoint]);
    buffer.push(metrix[xPoint][yPoint]);
    metrix[xPoint][yPoint] = valueArr.shift();
  }
  // x감소
  console.log('x감소');
  for (; xPoint > pointObj.x[0] - 1; xPoint--) {
    console.log('현재위치:', metrix[xPoint][yPoint]);
    valueArr.push(metrix[xPoint][yPoint]);
    buffer.push(metrix[xPoint][yPoint]);
    metrix[xPoint][yPoint] = valueArr.shift();
  }
  metrix[pointObj.x[0] - 1][pointObj.y[0] - 1] = valueArr.shift();
  console.log('buffer:', buffer);
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

function makeMetrix(rows, columns) {
  // make metirx
  let metrix = [];
  let innerNum = 1;
  for (let r = 0; r < rows; r++) {
    let rowArr = [];
    for (let c = 0; c < columns; c++) {
      rowArr.push(innerNum);
      innerNum++;
    }
    metrix.push(rowArr);
  }

  return metrix;
}

function solution(rows, columns, queries) {
  let metrix = makeMetrix(rows, columns);
  console.log('metrix:', metrix);
  let result = [];

  for (let i = 0; i < queries.length; i++) {
    let pointObj = getPointObj(queries[i]);
    console.log('pointObj:', pointObj);
    result.push(doRotation(metrix, pointObj));
    // break;
  }

  console.log('metrix 회전한것:', metrix);

  return result;
}

let result = solution(3, 3, [
  [1, 1, 2, 2],
  [1, 2, 2, 3],
  [2, 1, 3, 2],
  [2, 2, 3, 3],
]);
console.log('result:', result);
