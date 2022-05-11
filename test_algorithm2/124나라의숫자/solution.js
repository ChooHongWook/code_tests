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
