function solution(price, money, count) {
  let usePrice = price;
  let needPrice = 0;
  for (let i = 0; i < count; i++) {
    needPrice += usePrice;
    usePrice += price;
  }

  console.log('needPrice:', needPrice);
  let result = needPrice - money;
  if (result < 0) {
    result = 0;
  }
  return result;
}

//----------------------------------------------------------------
// reference
// 가우스 공식 활용
function solution(price, money, count) {
  const needPrice = (price * count * (count + 1)) / 2;
  return needPrice - money > 0 ? needPrice - money : 0;
}
