function solution(s) {
  // 길이에 따른 추가된 숫자가 해당 위치에 들어감
  let a = s.slice(2, s.length - 2);
  // console.log("a:",a)
  a = a.split('},{');
  // console.log("a:",a)
  a = a.map((e) => {
    return e.split(',');
  });
  // console.log("a:",a)
  let obj = {};
  a.forEach((e) => {
    // console.log("e:",e)
    e.forEach((el) => {
      if (obj[el] === undefined) {
        obj[el] = 0;
      }
      obj[el] += 1;
    });
  });
  // console.log("obj:",obj)
  let answer = [];
  for (let key in obj) {
    answer[a.length - obj[key]] = Number(key);
  }

  return answer;
}
