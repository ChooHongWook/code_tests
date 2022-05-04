function solution(land) {
  //열 인덱스만큼 반복
  for (let rowIndex = 1; rowIndex < land.length; rowIndex++) {
    // 행 인덱스 만큼 반복
    for (let colIndex = 0; colIndex < land[0].length; colIndex++) {
      // land의 각각의 위치에 기존값에 최댓갑 더하기
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
