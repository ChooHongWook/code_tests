// 내가 생각하는 가장 최적화
function solution(brown, yellow) {
  let sum = brown + yellow;
  // 약수 구하기
  for (let i = 3; i <= Math.sqrt(sum); i++) {
    if (sum % i !== 0) continue;
    // 약수중에서 조건에 맞는 결과 값 출력
    if ((sum / i - 2) * (i - 2) === yellow) {
      return [sum / i, i];
    }
  }
}

/*
테스트 1 〉	통과 (0.07ms, 30.2MB)
테스트 2 〉	통과 (0.07ms, 30MB)
테스트 3 〉	통과 (0.13ms, 30.1MB)
테스트 4 〉	통과 (0.04ms, 30.3MB)
테스트 5 〉	통과 (0.05ms, 30.3MB)
테스트 6 〉	통과 (0.07ms, 30.1MB)
테스트 7 〉	통과 (0.09ms, 30.1MB)
테스트 8 〉	통과 (0.10ms, 30.1MB)
테스트 9 〉	통과 (0.09ms, 30.1MB)
테스트 10 〉	통과 (0.10ms, 30.1MB)
테스트 11 〉	통과 (0.07ms, 30MB)
테스트 12 〉	통과 (0.05ms, 30.2MB)
테스트 13 〉	통과 (0.05ms, 30.1MB)
*/

//----------------------------------------------------------------

// 약수들 구하는 함수
const getDivisors = (num) => {
  const divisors = [];
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      divisors.push([i, num / i]);
    }
  }
  return divisors;
};
function solution(brown, yellow) {
  let result = [];
  // 약수들 구하기
  let divisors = getDivisors(brown + yellow);
  // console.log("divisors:",divisors);

  // 약수들 중 조건에 맞는 약수 찾기
  for (let i = 0; i < divisors.length; i++) {
    if ((divisors[i][0] - 2) * (divisors[i][1] - 2) === yellow) {
      // 조건에 맞게 가로 길이가 앞에
      return [divisors[i][1], divisors[i][0]];
    }
  }
}
/*

테스트 1 〉	통과 (0.11ms, 30MB)
테스트 2 〉	통과 (0.14ms, 29.9MB)
테스트 3 〉	통과 (0.12ms, 29.8MB)
테스트 4 〉	통과 (0.11ms, 30MB)
테스트 5 〉	통과 (0.09ms, 30MB)
테스트 6 〉	통과 (0.11ms, 30MB)
테스트 7 〉	통과 (0.14ms, 29.5MB)
테스트 8 〉	통과 (0.12ms, 29.6MB)
테스트 9 〉	통과 (0.14ms, 30MB)
테스트 10 〉	통과 (0.15ms, 29.9MB)
테스트 11 〉	통과 (0.10ms, 29.9MB)
테스트 12 〉	통과 (0.11ms, 30.1MB)
테스트 13 〉	통과 (0.10ms, 30MB)

*/

//----------------------------------------------------------------

function solution(brown, yellow) {
  var answer = [];
  const size = brown + yellow;
  answer = widthHeightPair(size).filter(
    (pair) => (pair[0] + pair[1]) * 2 - 4 === brown
  )[0];
  return answer;
}
function widthHeightPair(size) {
  let result = [];
  for (let i = 1; i <= Math.sqrt(size); i++)
    if (size % i === 0) result.push([size / i, i]);
  return result;
}
/*
테스트 1 〉	통과 (0.10ms, 30MB)
테스트 2 〉	통과 (0.08ms, 29.9MB)
테스트 3 〉	통과 (0.21ms, 29.9MB)
테스트 4 〉	통과 (0.11ms, 29.9MB)
테스트 5 〉	통과 (0.16ms, 29.9MB)
테스트 6 〉	통과 (0.17ms, 29.8MB)
테스트 7 〉	통과 (0.27ms, 30MB)
테스트 8 〉	통과 (0.13ms, 30.1MB)
테스트 9 〉	통과 (0.19ms, 29.6MB)
테스트 10 〉	통과 (0.18ms, 30MB)
테스트 11 〉	통과 (0.08ms, 30MB)
테스트 12 〉	통과 (0.12ms, 30.1MB)
테스트 13 〉	통과 (0.08ms, 30MB)
*/
//----------------------------------------------------------------

function solution(brown, yellow) {
  var answer = [];
  for (var i = 3; i <= (brown + yellow) / i; i++) {
    var x = Math.floor((brown + yellow) / i);
    if ((x - 2) * (i - 2) === yellow) {
      return [x, i];
    }
  }
}

/*
테스트 1 〉	통과 (0.04ms, 30MB)
테스트 2 〉	통과 (0.04ms, 30.1MB)
테스트 3 〉	통과 (0.14ms, 30.3MB)
테스트 4 〉	통과 (0.05ms, 30MB)
테스트 5 〉	통과 (0.06ms, 30MB)
테스트 6 〉	통과 (0.08ms, 30.1MB)
테스트 7 〉	통과 (0.19ms, 30.1MB)
테스트 8 〉	통과 (0.13ms, 30.1MB)
테스트 9 〉	통과 (0.15ms, 30MB)
테스트 10 〉	통과 (0.15ms, 30.2MB)
테스트 11 〉	통과 (0.05ms, 30MB)
테스트 12 〉	통과 (0.06ms, 29.8MB)
테스트 13 〉	통과 (0.08ms, 29.8MB)
*/
//----------------------------------------------------------------

//이게 왜 되지?
function solution(brown, yellow) {
  const x = (brown - 12) * 0.5;
  const y = yellow - brown + 8;
  const i = (8 + x + Math.sqrt(Math.pow(x, 2) - 4 * y)) * 0.5;
  const j = (8 + x - Math.sqrt(Math.pow(x, 2) - 4 * y)) * 0.5;
  console.log(i);

  var answer = [i, j];
  return answer;
}

/*

*/
//----------------------------------------------------------------

function solution(brown, yellow) {
  var xpy = brown / 2 + 2;
  for (var a = 1; a < xpy; a++)
    if (a * (xpy - a) == brown + yellow)
      return [Math.max(a, xpy - a), Math.min(a, xpy - a)];
}

/*

*/
//----------------------------------------------------------------

function solution(brown, yellow) {
  var answer = [];

  console.log(Math.floor(Math.sqrt(yellow)));

  for (var i = 0; i <= Math.floor(Math.sqrt(yellow)); i++) {
    if (yellow % i == 0 && (yellow / i) * 2 + i * 2 + 4 == brown) {
      console.log(yellow / i, i);
      return yellow / i >= i
        ? [yellow / i + 2, i + 2]
        : [i + 2, yellow / i + 2];
    }
  }
}

/*
테스트 1 〉	통과 (4.09ms, 30.1MB)
테스트 2 〉	통과 (4.09ms, 30.3MB)
테스트 3 〉	통과 (4.33ms, 30.3MB)
테스트 4 〉	통과 (4.06ms, 30.3MB)
테스트 5 〉	통과 (3.99ms, 30.3MB)
테스트 6 〉	통과 (4.07ms, 30.4MB)
테스트 7 〉	통과 (4.08ms, 30.2MB)
테스트 8 〉	통과 (4.04ms, 30.3MB)
테스트 9 〉	통과 (4.08ms, 30.2MB)
테스트 10 〉	통과 (4.12ms, 30.3MB)
테스트 11 〉	통과 (4.10ms, 30.2MB)
테스트 12 〉	통과 (3.98ms, 30.2MB)
테스트 13 〉	통과 (3.96ms, 30.2MB)
*/
//----------------------------------------------------------------

function solution(brown, yellow) {
  var sum = brown + yellow;
  // 큰수부터 내려가는 식
  var x = sum - 1,
    div = 0,
    mod = 0;
  // 와 이게 되네
  for (; x > 2; x--) {
    div = sum / x;
    mod = sum % x;
    // 조건에 맞는지 확인
    if (mod == 0 && div > 2 && (x - 2) * (div - 2) == yellow) {
      return [x, div];
    }
  }
}

/*
테스트 1 〉	통과 (0.05ms, 29.8MB)
테스트 2 〉	통과 (0.05ms, 29.9MB)
테스트 3 〉	통과 (8.23ms, 32.9MB)
테스트 4 〉	통과 (0.20ms, 30.1MB)
테스트 5 〉	통과 (0.46ms, 30.3MB)
테스트 6 〉	통과 (6.05ms, 32.6MB)
테스트 7 〉	통과 (9.45ms, 32.7MB)
테스트 8 〉	통과 (7.10ms, 32.4MB)
테스트 9 〉	통과 (9.37ms, 32.6MB)
테스트 10 〉	통과 (10.38ms, 32.6MB)
테스트 11 〉	통과 (0.04ms, 30.1MB)
테스트 12 〉	통과 (0.07ms, 30.1MB)
테스트 13 〉	통과 (0.17ms, 29.9MB)
*/
//----------------------------------------------------------------

function solution(brown, yellow) {
  var answer = [];
  yaksu(yellow).some((v) => {
    var height = v[0],
      width = v[1];
    if (height * 2 + 2 * width + 4 === brown) {
      answer.push(width + 2, height + 2);
      return true;
    }
  });
  return answer;
}

function yaksu(yellow) {
  var arr = [];
  arr.push([1, yellow]);
  for (var i = 2, end = yellow - 1; i <= end; i++) {
    if (Math.floor(yellow / i) === yellow / i) {
      end = yellow / i - 1;
      arr.push([i, yellow / i]);
    }
  }
  return arr;
}

/*

*/
//----------------------------------------------------------------
// 일부러 어렵게 푼코드 인듯
function solution(brown, yellow) {
  var answer = [];
  const total = brown + yellow;

  // 약수의 분해들을넣음
  const primes = [];
  var n = yellow;
  var p = 2;
  while (n >= p * p) {
    if (n % p == 0) {
      primes.push(p);
      n = n / p;
    } else {
      p++;
    }
  }
  primes.push(n);
  console.log('primes:', primes);

  //permutation for primes of yellow
  function permute(arr, start, end, length) {
    if (start == end) {
      const a = arr.slice(0, length).reduce((a, b) => a * b, 1);
      const b =
        arr.length == length ? 1 : arr.slice(length).reduce((a, b) => a * b, 1);
      if ((a + 2) * (b + 2) == total) {
        answer = [a + 2, b + 2].sort((x, y) => y - x);
        return true;
      } else return false;
    } else {
      for (var i = start; i < end + 1; i++) {
        arr = swap(arr, start, i);
        const stop = permute(arr, start + 1, end, length);
        if (stop) return stop;
        arr = swap(arr, i, start);
      }
      return false;
    }
  }

  const len = primes.length;
  for (var i = 1; i <= len; i++) {
    if (permute(primes, 0, len - 1, i)) {
      console.log(answer);
      return answer;
    }
  }
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}

/*
테스트 1 〉	통과 (6.02ms, 30.3MB)
테스트 2 〉	통과 (5.04ms, 30MB)
테스트 3 〉	통과 (24.72ms, 34.7MB)
테스트 4 〉	통과 (7.54ms, 30.2MB)
테스트 5 〉	통과 (4.69ms, 30.3MB)
테스트 6 〉	통과 (6.90ms, 33.4MB)
테스트 7 〉	통과 (10.63ms, 34.3MB)
테스트 8 〉	통과 (11.67ms, 33.7MB)
테스트 9 〉	통과 (9.96ms, 33.7MB)
테스트 10 〉	통과 (1187.66ms, 35MB)
테스트 11 〉	통과 (4.75ms, 30.1MB)
테스트 12 〉	통과 (4.91ms, 30.3MB)
테스트 13 〉	통과 (4.87ms, 30.2MB)
*/
//----------------------------------------------------------------
