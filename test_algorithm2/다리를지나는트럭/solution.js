function sumArr(arr) {
  return arr.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
}

function solution(bridge_length, weight, truck_weights) {
  let onBridge_Arr = Array(bridge_length).fill(0);
  let count = 0;
  let i = 0;
  while (i < truck_weights.length) {
    // console.log("sumArr",sumArr(onBridge_Arr))
    onBridge_Arr.shift();
    if (sumArr(onBridge_Arr) + truck_weights[i] > weight) {
      onBridge_Arr.push(0);
    } else {
      onBridge_Arr.push(truck_weights[i]);
      i++;
    }
    count++;
    // console.log("count:",count)
    // console.log("onBridge_Arr:",onBridge_Arr)
    // console.log()
  }
  return count + bridge_length;
}

/*
정확성  테스트
테스트 1 〉	통과 (32.30ms, 31.9MB)
테스트 2 〉	통과 (1059.72ms, 32.3MB)
테스트 3 〉	통과 (0.09ms, 30.3MB)
테스트 4 〉	통과 (252.16ms, 32.2MB)
테스트 5 〉	통과 (2401.63ms, 33.7MB)
테스트 6 〉	통과 (664.46ms, 32.8MB)
테스트 7 〉	통과 (17.32ms, 31.8MB)
테스트 8 〉	통과 (0.69ms, 29.8MB)
테스트 9 〉	통과 (30.57ms, 31.8MB)
테스트 10 〉	통과 (0.80ms, 29.7MB)
테스트 11 〉	통과 (0.11ms, 29.7MB)
테스트 12 〉	통과 (0.51ms, 29.8MB)
테스트 13 〉	통과 (4.91ms, 31.7MB)
테스트 14 〉	통과 (0.08ms, 29.9MB)
*/
