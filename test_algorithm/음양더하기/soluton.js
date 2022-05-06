function solution(absolutes, signs) {
  //var answer = 123456789;
  let result = 0;
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i]) {
      result += absolutes[i];
    } else {
      result -= absolutes[i];
    }
  }
  return result;
}
