// 두 변수를 위치 바꾸는 함수
function swap(idx1, idx2, arr) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

// naive solution
function bubbleSort(arr) {
  const Len = arr.length;

  for (let i = 0; i < Len - 1; i++) {
    // 매 반복(iteration)마다 i번째로 큰 수가 마지막에서 i번째 위치
    // 이미 정렬된 요소는 고려할 필요가 없으므로, 'j < N - 1 - i'만 비교
    for (let j = 0; j < Len - 1 - i; j++) {
      console.log('i:', i);
      console.log('j:', j);
      console.log('arr[j]:', arr[j]);
      console.log('arr[j+1]:', arr[j + 1]);
      console.log('arr:', arr);
      if (arr[j] > arr[j + 1]) {
        console.log('정렬해야함');
        swap(j, j + 1, arr);
        console.log('arr:', arr);
      }
      console.log();
    }
  }

  return arr;
}
let result = bubbleSort([3, 2, 5, 1]);
console.log('result:', result);

// optimized solution
function bubbleSort(arr) {
  const Len = arr.length;

  for (let i = 0; i < Len; i++) {
    // swap 횟수를 기록
    // 어떤 요소도 swap되지 않은 경우, 배열은 정렬된 상태
    let swaps = 0;

    // 매 반복(iteration)마다 i번째로 큰 수가 마지막에서 i번째 위치
    // 이미 정렬된 요소는 고려할 필요가 없으므로, 'j < N - 1 - i'만 비교
    for (let j = 0; j < Len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swaps++;
        swap(j, j + 1, arr);
      }
    }

    if (swaps === 0) {
      break;
    }
  }

  return arr;
}
