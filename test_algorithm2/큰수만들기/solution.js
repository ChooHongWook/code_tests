function solution(number, k) {
  let answer = '';
  let answerStack = [0];
  let deleteCount = 0;
  // 숫자 길이만큼 반복
  for (let i = 0; i < number.length; i++) {
    // 삭제숫자의 개수가 k보다 작고
    // number[i]의 숫자가 answerStack마지막 숫자보다 클때
    while (
      deleteCount <= k &&
      number[i] > answerStack[answerStack.length - 1]
    ) {
      // answerStack의 마지막 숫자는 삭제
      answerStack.pop();
      // 삭제 카운트 상승
      deleteCount++;
    }
    // answerStack의 길이가 찾아야할 숫자의 길이보다 작으면
    // answerStack에 number을 순서대로 넣음
    if (answerStack.length < number.length - k) answerStack.push(number[i]);
  }
  answer = answerStack.join('');
  return answer;
}

// 맨처음 생각한 식
// 안됨 왜지?
function solution(number, k) {
  // 만들 수 있는 수중 가장 큰수
  // 해당 숫자중 k개수만큰 삭제
  // 삭제한 수중 가장 큰값
  // 재귀사용
  let result = 0;
  // 구간을 나누어서 삭제 (k개 수 뽑기 응용)
  function recursive(count, buff, str) {
    // 다 삭제하면 종료
    if (count === 0) {
      // console.log("buff:",buff)
      // console.log("str:",str)
      if (Number(buff + str) > result) result = Number(buff + str);
      return;
    }
    // console.log("str:",str)
    // console.log("buff:",buff)
    for (let i = 0; i <= str.length - count; i++) {
      recursive(count - 1, buff + str.slice(0, i), str.slice(i + 1));
    }
  }

  recursive(k, '', number);
  return String(result);
}
/*

테스트 1 〉	통과 (0.15ms, 30.1MB)
테스트 2 〉	실패 (600.20ms, 34.7MB)
테스트 3 〉	실패 (시간 초과)
테스트 4 〉	실패 (시간 초과)
테스트 5 〉	실패 (시간 초과)
테스트 6 〉	실패 (런타임 에러)
테스트 7 〉	실패 (런타임 에러)
테스트 8 〉	실패 (런타임 에러)
테스트 9 〉	실패 (시간 초과)
테스트 10 〉	실패 (런타임 에러)
테스트 11 〉	통과 (0.08ms, 29.8MB)
테스트 12 〉	통과 (0.08ms, 29.9MB)
*/

// 틀린이유 : 로직을 잘못짬
// 갯수만큼 전부다 뺏 것들중에서 가장 큰수를 쿠함
// 굳이 그럴필요가 없음

//----------------------------------------------------------------

function solution(number, k) {
  let answer = '';
  let answerStack = [0];
  let deleteCount = 0;
  // 숫자 길이만큼 반복
  for (let i = 0; i < number.length; i++) {
    // 삭제숫자의 개수가 k보다 작고
    // number[i]의 숫자가 answerStack마지막 숫자보다 클때
    // 해당 숫자 삭제
    while (
      deleteCount <= k &&
      number[i] > answerStack[answerStack.length - 1]
    ) {
      // answerStack의 마지막 숫자는 삭제
      answerStack.pop();
      // 삭제 카운트 상승
      deleteCount++;
    }
    // answerStack의 길이가 찾아야할 숫자의 길이보다 작으면
    // answerStack에 number을 순서대로 넣음
    if (answerStack.length < number.length - k) answerStack.push(number[i]);
  }
  answer = answerStack.join('');
  return answer;
}
/*
테스트 1 〉	통과 (0.09ms, 30.2MB)
테스트 2 〉	통과 (0.08ms, 30.2MB)
테스트 3 〉	통과 (0.10ms, 30.2MB)
테스트 4 〉	통과 (0.26ms, 30MB)
테스트 5 〉	통과 (0.22ms, 30.2MB)
테스트 6 〉	통과 (5.55ms, 33.2MB)
테스트 7 〉	통과 (7.32ms, 34.1MB)
테스트 8 〉	통과 (10.25ms, 34.9MB)
테스트 9 〉	통과 (24.51ms, 49.9MB)
테스트 10 〉	통과 (33.74ms, 45MB)
테스트 11 〉	통과 (0.06ms, 30.1MB)
테스트 12 〉	통과 (0.07ms, 30.2MB)
*/

// 가능한 이유
//

//----------------------------------------------------------------
