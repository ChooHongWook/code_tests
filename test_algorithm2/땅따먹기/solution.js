function solution(land) {
  // 같은 행의 숫자를 밟을수 없다.
  // 밟은 숫자들합의 최댓갑을 구하여라
  let answer = 0;
  let point;
  for (let i = 0; i < land[0].length; i++) {
    for (let j = 0; j < land.length; j++) {
      point = i;

      land[j + 1].splice(i, 1);
      console.log('a:', land[j + 1]);
      Math.max();
      answer += land[j][i];
      console.log('answer:', answer);
    }
  }

  return answer;
}
//----------------------------------------------------------------
// 아 전부다 꺼내서 비교를 해서 너무 오래걸림
function solution(land) {
  let result = [];
  // bfs 사용
  function repeat(arrs, num, idx) {
    // 탈줄조건
    if (arrs.length === 0) {
      result.push(num);
      console.log('pushresult:', num);
      console.log();
      console.log();
      return;
    }

    let arr = arrs.shift();

    for (let i = 0; i < arr.length; i++) {
      // 전에 사용했었언 idx이면 넘어감
      if (idx === i) {
        continue;
      }
      console.log('arrs:', arrs);
      console.log('arr:', arr);
      console.log('i:', i);
      console.log('num+arr[i]:', num + arr[i]);

      // 함수실행
      repeat(arrs.slice(), num + arr[i], i);
      console.log();
    }
  }
}
//----------------------------------------------------------------

// function solution(land) {
//   for (let rowIndex = 1; rowIndex < land.length; rowIndex++) {
//     for (let colIndex = 0; colIndex < land[0].length; colIndex++) {
//       land[rowIndex][colIndex] += Math.max(
//         ...land[rowIndex - 1].slice(0, colIndex),
//         ...land[rowIndex - 1].slice(colIndex + 1)
//       );
//     }
//   }
//   return Math.max(...land[land.length - 1]);
// }

function solution(land) {
  //열 인덱스만큼 반복
  for (let rowIndex = 1; rowIndex < land.length; rowIndex++) {
    // 행 인덱스 만큼 반복
    for (let colIndex = 0; colIndex < land[0].length; colIndex++) {
      // land의 각각의 위치에 기존값에 이전에 더할수 있는 숫자중 가장 최댓값 더하기
      console.log('rowIndex:', rowIndex);
      console.log('colIndex:', colIndex);
      console.log('더하는 최대 배열:', [
        ...land[rowIndex - 1].slice(0, colIndex),
        ...land[rowIndex - 1].slice(colIndex + 1),
      ]);
      land[rowIndex][colIndex] += Math.max(
        ...land[rowIndex - 1].slice(0, colIndex),
        ...land[rowIndex - 1].slice(colIndex + 1)
      );
      console.log('land[rowIndex][colIndex]:', land[rowIndex][colIndex]);
    }
  }
  console.log('최댓값 전의 배열확인:', land[land.length - 1]);
  return Math.max(...land[land.length - 1]);
}
//----------------------------------------------------------------

function solution(land) {
  var answer = 0;

  return Math.max(
    ...land.reduce(
      (a, c) => {
        return [
          c[0] + Math.max(a[1], a[2], a[3]),
          c[1] + Math.max(a[0], a[2], a[3]),
          c[2] + Math.max(a[0], a[1], a[3]),
          c[3] + Math.max(a[0], a[1], a[2]),
        ];
      },
      [0, 0, 0, 0]
    )
  );
}
