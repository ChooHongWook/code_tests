function solution(lottos, win_nums) {
  let answer = [];

  let inArr = lottos.filter((e) => {
    return win_nums.includes(e);
  });
  let zeroArr = lottos.filter((e) => {
    return e === 0;
  });
  console.log("inArr:", inArr);
  console.log("inArr legth:", inArr.length);
  console.log("zeroArr:", zeroArr);
  console.log("zeroArr legth:", zeroArr.length);

  answer.push(7);
  return answer;
}
