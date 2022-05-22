//getDayName
function solution(a, b) {
  // a = 1, b = 1;
  // 달의 마지막 일수
  let month = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // 2016년 1월1일이 금요일이므로
  // Index 1에 금요일이 오도록 설계
  let day = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];

  // a달 전까지의 모든 일수를 더하고 해당 달의 일수를 더함
  let sumDays = b;
  for (let i = 1; i < a; i++) {
    sumDays += month[i];
  }
  // 요일은 시작 날로부터 7개의 요일이 반복함
  return day[sumDays % 7];
}
/*
테스트 1 〉	통과 (0.04ms, 30MB)
테스트 2 〉	통과 (0.04ms, 29.6MB)
테스트 3 〉	통과 (0.04ms, 29.9MB)
테스트 4 〉	통과 (0.05ms, 29.8MB)
테스트 5 〉	통과 (0.06ms, 29.5MB)
테스트 6 〉	통과 (0.04ms, 30.1MB)
테스트 7 〉	통과 (0.04ms, 29.8MB)
테스트 8 〉	통과 (0.05ms, 29.7MB)
테스트 9 〉	통과 (0.06ms, 29.9MB)
테스트 10 〉	통과 (0.04ms, 29.9MB)
테스트 11 〉	통과 (0.04ms, 29.9MB)
테스트 12 〉	통과 (0.06ms, 29.9MB)
테스트 13 〉	통과 (0.04ms, 29.8MB)
테스트 14 〉	통과 (0.04ms, 30MB)
*/

// ----------------------------------------------------------------

function solution(a, b) {
  let date = new Date(2016, a - 1, b);
  console.log('date:', date);
  // date: 2016-05-23T15:00:00.000Z
  console.log('date.toString():', date.toString());
  // date.toString(): Tue May 24 2016 00:00:00 GMT+0900 (Korean Standard Time)
  console.log('date.toString().slice(0, 3):', date.toString().slice(0, 3));
  // date.toString().slice(0, 3): Tue
  return date.toString().slice(0, 3).toUpperCase();
}

/*
테스트 1 〉	통과 (112.09ms, 30.7MB)
테스트 2 〉	통과 (7.61ms, 30.7MB)
테스트 3 〉	통과 (80.49ms, 30.7MB)
테스트 4 〉	통과 (8.08ms, 30.8MB)
테스트 5 〉	통과 (0.24ms, 30.7MB)
테스트 6 〉	통과 (0.23ms, 30.7MB)
테스트 7 〉	통과 (0.31ms, 30.6MB)
테스트 8 〉	통과 (0.33ms, 30.6MB)
테스트 9 〉	통과 (0.25ms, 30.8MB)
테스트 10 〉	통과 (0.32ms, 30.6MB)
테스트 11 〉	통과 (0.32ms, 30.7MB)
테스트 12 〉	통과 (0.24ms, 30.5MB)
테스트 13 〉	통과 (0.31ms, 30.6MB)
테스트 14 〉	통과 (0.23ms, 30.8MB)
*/

// ----------------------------------------------------------------

function solution(a, b) {
  var arr = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  var date = new Date(`2016-${a}-${b}`);
  console.log('date:', date);
  // date: 2016-05-23T15:00:00.000Z
  var day = date.getDay();
  console.log('day:', day);
  // day: 2
  return arr[day];
}
/*
테스트 1 〉	통과 (4.36ms, 30.1MB)
테스트 2 〉	통과 (4.16ms, 30.4MB)
테스트 3 〉	통과 (4.74ms, 30.2MB)
테스트 4 〉	통과 (5.02ms, 30.1MB)
테스트 5 〉	통과 (0.12ms, 30.4MB)
테스트 6 〉	통과 (0.10ms, 30.4MB)
테스트 7 〉	통과 (0.14ms, 30.3MB)
테스트 8 〉	통과 (0.11ms, 30.3MB)
테스트 9 〉	통과 (0.18ms, 30.3MB)
테스트 10 〉	통과 (0.11ms, 30.5MB)
테스트 11 〉	통과 (0.12ms, 30.1MB)
테스트 12 〉	통과 (0.11ms, 30.3MB)
테스트 13 〉	통과 (0.13ms, 30.3MB)
테스트 14 〉	통과 (0.10ms, 30.5MB)
*/

// !----------------------------------------------------------------

//아래 코드는 테스트를 위한 코드입니다.
console.log(solution(5, 24));
