function solution(n) {
  // n - (3^n) - (3^k) - (3^z)
  let useNum = '412';
  let answer = '';
  //     let len = Math.floor(n/3)
  //     console.log("len:",len)

  //     for (let i = 0; i < len; i++) {
  //         answer += useNum
  //     }
  let absNum = 0;
  while (n > 3) {
    // if ()
    absNum++;
  }

  return answer;
}

//----------------------------------------------------------------

function solution(n) {
  var answer = '';
  const oneTwoFour = ['4', '1', '2'];
  while (n > 0) {
    const remainder = n % 3;
    answer = oneTwoFour[remainder] + answer;
    if (remainder === 0) {
      // 왜 -1을 해야하지..?
      n = Math.floor((n - 1) / 3);
    } else {
      n = Math.floor(n / 3);
    }
  }
  return answer;
}

//----------------------------------------------------------------
const solution = (n) => f(n - 1);
const f = (n) => (n < 3 ? '124'[n] : f(div(n, 3) - 1) + f(n % 3));
const div = (a, b) => parseInt(a / b);

// test --------------------
// 테스트 케이스 도 연습하기(TDD)
function test() {}

test('simple', () => {
  expect(solution(1)).toBe('1');
  expect(solution(2)).toBe('2');
  expect(solution(3)).toBe('4');
  expect(solution(4)).toBe('11');
  expect(solution(5)).toBe('12');
  expect(solution(6)).toBe('14');
  expect(solution(7)).toBe('21');
  expect(solution(8)).toBe('22');
  expect(solution(9)).toBe('24');
  expect(solution(10)).toBe('41');
  expect(solution(11)).toBe('42');
  expect(solution(12)).toBe('44');
  expect(solution(13)).toBe('111');
});
