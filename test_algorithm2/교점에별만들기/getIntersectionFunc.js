// 교점 구하는 함수
function GetIntersection(ln1, ln2) {
  // 문제가 있어서 조절이 필요

  // 정수인 교점만 리턴

  // 인자를 하나로 만듬
  // 무조건 x인자를 없에기
  let share = ln1[0] / ln2[0];

  // x인자 없애기
  let justY = ln1.map((el, idx) => {
    return el - ln2[idx] * share;
  });
  console.log('justY:', justY);

  // y값 구하기
  let Y = justY[2] / -justY[1];
  console.log('Y:', Y);
  if (!Number.isInteger(Y)) {
    return false;
  }
  // x값 구하기
  let X;
  if (ln1[0] === 0) {
    X = (ln2[1] * Y + ln2[2]) / -ln2[0];
  } else {
    X = (ln1[1] * Y + ln1[2]) / -ln1[0];
  }

  console.log('X:', X);
  if (!Number.isInteger(X)) {
    return false;
  }

  return [X, Y];
}
