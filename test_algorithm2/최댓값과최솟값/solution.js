function solution(s) {
  // console.log("s:",s)
  // 띄여쓰기 단위로 분리
  let arr = s.split(' ');
  // console.log("arr:",arr)

  // 인자타입을 Number로 변경
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
  }
  // console.log("arr:",arr)
  // 정렬
  arr.sort((a, b) => a - b);
  // console.log("arr:",arr)
  let answer = '';
  // 제일 작은수와 제일 높은 수를 원하는 형태로 출력
  answer = `${arr[0]} ${arr[arr.length - 1]}`;
  return answer;
}

/*
정확성  테스트
테스트 1 〉	통과 (0.16ms, 30.1MB)
테스트 2 〉	통과 (0.12ms, 30MB)
테스트 3 〉	통과 (0.11ms, 29.9MB)
테스트 4 〉	통과 (0.10ms, 30MB)
테스트 5 〉	통과 (0.33ms, 30.2MB)
테스트 6 〉	통과 (0.11ms, 30MB)
테스트 7 〉	통과 (0.07ms, 29.9MB)
테스트 8 〉	통과 (0.12ms, 29.9MB)
테스트 9 〉	통과 (0.10ms, 29.9MB)
테스트 10 〉	통과 (0.14ms, 30.1MB)
테스트 11 〉	통과 (0.08ms, 29.8MB)
테스트 12 〉	통과 (0.15ms, 29.9MB)
*/
//--------------------------------------------------------
function solution(s) {
  const arr = s.split(' ');
  // 나누어서 문자열로 최댓값 최솟값 출력
  return Math.min(...arr) + ' ' + Math.max(...arr);
}

/*
정확성  테스트
테스트 1 〉	통과 (0.06ms, 30MB)
테스트 2 〉	통과 (0.07ms, 29.9MB)
테스트 3 〉	통과 (0.04ms, 30.2MB)
테스트 4 〉	통과 (0.05ms, 30.2MB)
테스트 5 〉	통과 (0.30ms, 30.3MB)
테스트 6 〉	통과 (0.06ms, 29.9MB)
테스트 7 〉	통과 (0.05ms, 30.2MB)
테스트 8 〉	통과 (0.06ms, 30MB)
테스트 9 〉	통과 (0.06ms, 30.1MB)
테스트 10 〉	통과 (0.06ms, 29.9MB)
테스트 11 〉	통과 (0.10ms, 30.2MB)
테스트 12 〉	통과 (0.06ms, 30MB)
*/
//--------------------------------------------------------
function solution(s) {
  // 최솟값 추출
  let min = Math.min.apply(null, s.split(' ').map(Number));
  // 최댓값 추출
  let max = Math.max.apply(null, s.split(' ').map(Number));
  var answer = min + ' ' + max;
  return answer;
}

/*
정확성  테스트
테스트 1 〉	통과 (0.07ms, 30MB)
테스트 2 〉	통과 (0.13ms, 29.7MB)
테스트 3 〉	통과 (0.06ms, 29.7MB)
테스트 4 〉	통과 (0.06ms, 30MB)
테스트 5 〉	통과 (0.20ms, 30.3MB)
테스트 6 〉	통과 (0.09ms, 29.9MB)
테스트 7 〉	통과 (0.05ms, 30MB)
테스트 8 〉	통과 (0.07ms, 29.8MB)
테스트 9 〉	통과 (0.06ms, 29.6MB)
테스트 10 〉	통과 (0.10ms, 30MB)
테스트 11 〉	통과 (0.06ms, 29.9MB)
테스트 12 〉	통과 (0.07ms, 29.8MB)
*/
//--------------------------------------------------------
