function solution(n) {
  // 1, 2는 무조건 있고
  // 3이상부터는 나누어지면 있음

  // 약수를 구해서

  // 1,2 3이상의 홀수 여야함
  // 작은수가 큰수의 절반보다 커야함
  // divisors구하기
  if (n < 3) {
    return 1;
  }

  let count;
  //1 무조건 됨 2는 홀수 면 가능
  if (n % 2 === 0) {
    count = [1];
  } else {
    count = [1, 2];
  }
  for (let i = 3; i <= Math.sqrt(n); i++) {
    // i는 약수여야 하고,
    if (n % i === 0) {
      // i는 홀수 여야 조건에 맞음
      if (i % 2 === 1) count.push(i);
      // 제곱근이 아니면 나눈수 확인하기
      if (n / i !== i) {
        // 나눈수가 홀수 이고 i가 나눈수의 절반이상이면 가능 (count++)
        if ((n / i) % 2 === 1 && n / i / 2 <= i) count.push(n / i);
      }
    }
  }

  return count.length;
}

/*
정확성  테스트
테스트 1 〉	통과 (0.06ms, 29.8MB)
테스트 2 〉	실패 (0.06ms, 30.1MB)
테스트 3 〉	실패 (0.06ms, 29.9MB)
테스트 4 〉	실패 (0.06ms, 29.9MB)
테스트 5 〉	통과 (0.06ms, 30.1MB)
테스트 6 〉	통과 (0.05ms, 29.7MB)
테스트 7 〉	실패 (0.07ms, 29.9MB)
테스트 8 〉	실패 (0.09ms, 30MB)
테스트 9 〉	통과 (0.05ms, 29.9MB)
테스트 10 〉	통과 (0.08ms, 30MB)
테스트 11 〉	통과 (0.09ms, 30.1MB)
테스트 12 〉	실패 (0.05ms, 30.1MB)
테스트 13 〉	실패 (0.05ms, 30MB)
테스트 14 〉	통과 (0.08ms, 29.9MB)
테스트 15 〉	통과 (0.07ms, 29.9MB)
테스트 16 〉	통과 (0.05ms, 30.1MB)
테스트 17 〉	실패 (0.05ms, 30MB)
테스트 18 〉	통과 (0.05ms, 29.9MB)
효율성  테스트
테스트 1 〉	실패 (0.08ms, 29.5MB)
테스트 2 〉	실패 (0.08ms, 29.6MB)
테스트 3 〉	실패 (0.09ms, 29.6MB)
테스트 4 〉	실패 (0.08ms, 29.6MB)
테스트 5 〉	실패 (0.09ms, 29.6MB)
테스트 6 〉	실패 (0.09ms, 29.7MB)
*/

//----------------------------------------------------------------

function solution(n) {
  let count = 0;
  // 시작하는 숫자
  for (let i = 1; i <= n; i++) {
    let sum = 0;
    // i부터 시작해서 끝까지 더함
    for (let j = i; j <= n; j++) {
      sum += j;
      //목표값과 같거나 크면 종료
      if (sum >= n) {
        // 목표값과 같으면 갯수를 셈
        if (sum === n) count++;
        break;
      }
    }
  }
  return count;
}

/*
정확성  테스트
테스트 1 〉	통과 (0.05ms, 29.7MB)
테스트 2 〉	통과 (0.14ms, 29.6MB)
테스트 3 〉	통과 (0.14ms, 30MB)
테스트 4 〉	통과 (0.18ms, 30.2MB)
테스트 5 〉	통과 (0.10ms, 30MB)
테스트 6 〉	통과 (0.09ms, 29.9MB)
테스트 7 〉	통과 (0.14ms, 30MB)
테스트 8 〉	통과 (0.08ms, 29.9MB)
테스트 9 〉	통과 (0.07ms, 30.1MB)
테스트 10 〉	통과 (0.18ms, 30.1MB)
테스트 11 〉	통과 (0.24ms, 30MB)
테스트 12 〉	통과 (0.17ms, 30.1MB)
테스트 13 〉	통과 (0.18ms, 29.8MB)
테스트 14 〉	통과 (0.18ms, 29.8MB)
테스트 15 〉	통과 (0.07ms, 30MB)
테스트 16 〉	통과 (0.07ms, 30.1MB)
테스트 17 〉	통과 (0.07ms, 29.9MB)
테스트 18 〉	통과 (0.04ms, 29.7MB)
효율성  테스트
테스트 1 〉	통과 (3.11ms, 32.4MB)
테스트 2 〉	통과 (2.11ms, 32.6MB)
테스트 3 〉	통과 (2.68ms, 32.5MB)
테스트 4 〉	통과 (1.73ms, 32.5MB)
테스트 5 〉	통과 (1.91ms, 32.4MB)
테스트 6 〉	통과 (2.16ms, 32.4MB)
*/

//----------------------------------------------------------------

// 이게 수학적으로 말이 되나?
// n의 약수 중에 홀수의 갯수가 정답이랑 같은수 인가?
function expressions(num) {
  var answer = 0;

  for (var i = 1; i <= num; i++) {
    if (num % i == 0 && i % 2 == 1) answer++;
  }
  return answer;
}
/*
정확성  테스트
테스트 1 〉	통과 (0.07ms, 30.1MB)
테스트 2 〉	통과 (0.05ms, 30.1MB)
테스트 3 〉	통과 (0.05ms, 30.2MB)
테스트 4 〉	통과 (0.05ms, 30.1MB)
테스트 5 〉	통과 (0.06ms, 30MB)
테스트 6 〉	통과 (0.05ms, 29.8MB)
테스트 7 〉	통과 (0.10ms, 30.1MB)
테스트 8 〉	통과 (0.04ms, 30.1MB)
테스트 9 〉	통과 (0.04ms, 30.1MB)
테스트 10 〉	통과 (0.09ms, 30.2MB)
테스트 11 〉	통과 (0.05ms, 30MB)
테스트 12 〉	통과 (0.08ms, 29.8MB)
테스트 13 〉	통과 (0.08ms, 29.8MB)
테스트 14 〉	통과 (0.09ms, 29.8MB)
테스트 15 〉	통과 (0.04ms, 30MB)
테스트 16 〉	통과 (0.03ms, 29.9MB)
테스트 17 〉	통과 (0.05ms, 30.1MB)
테스트 18 〉	통과 (0.05ms, 30MB)
효율성  테스트
테스트 1 〉	통과 (0.42ms, 30MB)
테스트 2 〉	통과 (0.28ms, 30.1MB)
테스트 3 〉	통과 (0.32ms, 30MB)
테스트 4 〉	통과 (0.32ms, 29.7MB)
테스트 5 〉	통과 (0.38ms, 30.1MB)
테스트 6 〉	통과 (0.37ms, 29.5MB)
*/

//----------------------------------------------------------------

// 수학 식같음 잘 모르겠음
// 대충 k개로 나누이저는 숫자중 연속이 가능 한것 을 찾는것
function expressions(num) {
  var answer = 0;
  var k = 0;

  while ((k * (k - 1)) / 2 <= num) {
    // (num / k - (k - 1) / 2이게 정수인가?
    // =>  k의 값이 가 짝수면 - 0.5 홀수면 - 0.0해서 정수 인지 확인
    // num / k - (k - 1) / 2 != 0
    // => num / k !== (k - 1) / 2
    // => num !== k*(k-1)/2
    if (Number.isInteger(num / k - (k - 1) / 2) && num / k - (k - 1) / 2 != 0) {
      answer++;
    }
    k++;
  }

  return answer;
}

/*
정확성  테스트
테스트 1 〉	통과 (0.09ms, 30.1MB)
테스트 2 〉	통과 (0.07ms, 30MB)
테스트 3 〉	통과 (0.06ms, 30.2MB)
테스트 4 〉	통과 (0.05ms, 30.1MB)
테스트 5 〉	통과 (0.05ms, 30.1MB)
테스트 6 〉	통과 (0.09ms, 30.1MB)
테스트 7 〉	통과 (0.10ms, 30MB)
테스트 8 〉	통과 (0.05ms, 30MB)
테스트 9 〉	통과 (0.07ms, 30.1MB)
테스트 10 〉	통과 (0.05ms, 30.2MB)
테스트 11 〉	통과 (0.05ms, 30.2MB)
테스트 12 〉	통과 (0.05ms, 30MB)
테스트 13 〉	통과 (0.05ms, 30.1MB)
테스트 14 〉	통과 (0.05ms, 30.1MB)
테스트 15 〉	통과 (0.04ms, 30.1MB)
테스트 16 〉	통과 (0.04ms, 30.2MB)
테스트 17 〉	통과 (0.05ms, 30.1MB)
테스트 18 〉	통과 (0.04ms, 30.1MB)
효율성  테스트
테스트 1 〉	통과 (0.07ms, 29.9MB)
테스트 2 〉	통과 (0.08ms, 29.5MB)
테스트 3 〉	통과 (0.09ms, 29.8MB)
테스트 4 〉	통과 (0.08ms, 29.9MB)
테스트 5 〉	통과 (0.07ms, 29.9MB)
테스트 6 〉	통과 (0.06ms, 30.1MB)
*/

//----------------------------------------------------------------
function expressions(num) {
  var start = 0,
    way = 0;

  do {
    start++;

    var f_result = start;

    for (let i = start + 1; i <= num; i++) {
      f_result += i;

      if (f_result > num) {
        break;
      } else if (f_result == num) {
        way++;
      }
    }
  } while (start != num);

  return way + 1;
}
/*

*/

//----------------------------------------------------------------
function expressions(num) {
  var answer = 1; //(15)
  var n, sum;

  for (var i = 1; i <= Math.floor(num / 2); i++) {
    n = i;
    sum = 0;
    while (sum < num) sum += n++;
    if (sum == num) answer++;
  }
  return answer;
}

/*

*/

//----------------------------------------------------------------
function expressions(num) {
  var answer = 0;

  for (var i = 0; i < num; i++) answer += countNumber(num, i + 1, num);

  return answer;
}

function countNumber(tot, begin, left) {
  if (left == 0) return 1;

  if (left < 0 || begin > left) return 0;

  return countNumber(tot, begin + 1, left - begin);
}

/*

*/

//----------------------------------------------------------------
