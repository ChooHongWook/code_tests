function solution(people, limit) {
  people.sort((a, b) => a - b);
  // console.log("people:",people)
  let count = 0;
  let head = 0;
  let rear = people.length - 1;

  while (head <= rear) {
    if (people[head] + people[rear] > limit) {
      // console.log('넘음')
      // console.log('people[head]:',people[head])
      // console.log('people[rear]:',people[rear])
      // // console.log('넘음')
      rear--;
      count++;
    } else {
      // console.log('담아짐')
      // console.log('people[head]:',people[head])
      // console.log('people[rear]:',people[rear])
      rear--;
      head++;
      count++;
    }
  }
  return count;
}

/*
테스트 1 〉	통과 (2.29ms, 31.6MB)
테스트 2 〉	통과 (1.18ms, 30.1MB)
테스트 3 〉	통과 (1.26ms, 30.2MB)
테스트 4 〉	통과 (1.08ms, 30.1MB)
테스트 5 〉	통과 (0.66ms, 30.1MB)
테스트 6 〉	통과 (0.40ms, 30.1MB)
테스트 7 〉	통과 (0.60ms, 30.1MB)
테스트 8 〉	통과 (0.11ms, 29.9MB)
테스트 9 〉	통과 (0.16ms, 30.1MB)
테스트 10 〉	통과 (1.16ms, 30.1MB)
테스트 11 〉	통과 (0.96ms, 30.1MB)
테스트 12 〉	통과 (0.90ms, 30.1MB)
테스트 13 〉	통과 (1.16ms, 30MB)
테스트 14 〉	통과 (1.37ms, 30.2MB)
테스트 15 〉	통과 (0.23ms, 30.2MB)
효율성  테스트
테스트 1 〉	통과 (14.59ms, 33.5MB)
테스트 2 〉	통과 (34.27ms, 33.1MB)
테스트 3 〉	통과 (15.02ms, 33.3MB)
테스트 4 〉	통과 (33.32ms, 33.3MB)
테스트 5 〉	통과 (11.72ms, 33.1MB)
*/

//----------------------------------------------------------------
function solution(people, limit) {
  people.sort((a, b) => a - b);
  for (var head = 0, rear = people.length - 1; head < rear; rear--) {
    if (people[head] + people[rear] <= limit) head++;
  }
  return people.length - head;
}
/*
테스트 1 〉	통과 (2.30ms, 31.8MB)
테스트 2 〉	통과 (1.16ms, 30.2MB)
테스트 3 〉	통과 (1.25ms, 30.1MB)
테스트 4 〉	통과 (1.05ms, 30.3MB)
테스트 5 〉	통과 (0.66ms, 30MB)
테스트 6 〉	통과 (0.40ms, 30MB)
테스트 7 〉	통과 (0.59ms, 30.1MB)
테스트 8 〉	통과 (0.11ms, 29.8MB)
테스트 9 〉	통과 (0.17ms, 30.1MB)
테스트 10 〉	통과 (1.12ms, 30MB)
테스트 11 〉	통과 (0.95ms, 30MB)
테스트 12 〉	통과 (0.88ms, 30MB)
테스트 13 〉	통과 (1.16ms, 30.1MB)
테스트 14 〉	통과 (1.25ms, 29.9MB)
테스트 15 〉	통과 (0.17ms, 30MB)
효율성  테스트
테스트 1 〉	통과 (46.05ms, 33.3MB)
테스트 2 〉	통과 (34.34ms, 33.3MB)
테스트 3 〉	통과 (50.58ms, 33MB)
테스트 4 〉	통과 (33.29ms, 33.3MB)
테스트 5 〉	통과 (31.78ms, 33MB)
*/

// 같은코드아닌가 어디서 차이가 나오는거지?
