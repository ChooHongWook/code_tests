function solution(clothes) {
  let obj = {};
  // 정보를 객체로 정리
  for (let i = 0; i < clothes.length; i++) {
    if (obj[clothes[i][1]] === undefined) {
      obj[clothes[i][1]] = [];
    }
    obj[clothes[i][1]].push(clothes[i][0]);
  }

  // 멱함수 ()
  // 일단 배열의 수만큼은 한번씩을 뽑고
  // 추가적으로 객체에서 최대 4개의 정보를 가지고 있음
  // 그것을 전부 다르게 입고 활동할것
  let keyArr = Object.keys(obj);

  let usePartArr = [];
  function recurtion(arr, buffer) {
    if (arr.length === 0) {
      console.log('buffer:', buffer);
      if (buffer.length > 0) {
        usePartArr.push(buffer);
      }
      return;
    }
    let sliceArr = arr.slice();
    let head = sliceArr.shift();

    recurtion(sliceArr, [...buffer]);
    recurtion(sliceArr, [head, ...buffer]);
  }

  recurtion(keyArr, []);
  console.log('usePartArr:', usePartArr);
  console.log();
  let result = 0;
  for (let i = 0; i < usePartArr.length; i++) {
    console.log('usePartArr[i]:', usePartArr[i]);
    result += usePartArr[i].reduce((a, b) => {
      console.log('a:', a);
      console.log('obj[b]:', obj[b]);
      console.log('a * (b.length) :', a * obj[b].length);
      return a * obj[b].length;
    }, 1);
    console.log('result:', result);
    console.log();
  }
  console.log('result:', result);
  return result;
}
// 문제 1번 타임아웃
// 최적화 시도 하였으나
//----------------------------------------------------------------

// 수정 배열을 길이 숫자로 바꿈 그러나 안됨
function solution(clothes) {
  let obj = {};
  // 정보를 객체로 정리
  for (let i = 0; i < clothes.length; i++) {
    if (obj[clothes[i][1]] === undefined) {
      obj[clothes[i][1]] = 0;
    }
    obj[clothes[i][1]] += 1;
  }
  // console.log("obj:",obj)

  // 일단 배열의 수만큼은 한번씩을 뽑고
  // 그것을 전부 다르게 입고 활동할것

  // 멱함수 ()
  let keyArr = Object.keys(obj);
  let usePartArr = [];
  function recurtion(arr, buffer) {
    if (arr.length === 0) {
      if (buffer.length > 0) {
        usePartArr.push(buffer);
      }
      return;
    }
    let sliceArr = arr.slice();
    let head = sliceArr.shift();
    recurtion(sliceArr, [...buffer]);
    recurtion(sliceArr, [head, ...buffer]);
  }
  // 함수실행
  recurtion(keyArr, []);

  let result = 0;
  for (let i = 0; i < usePartArr.length; i++) {
    // 각인자가 여러개면 배열의 길이들을 곱함
    result += usePartArr[i].reduce((a, b) => {
      return a * obj[b];
    }, 1);
  }
  return result;
}

//----------------------------------------------------------------
// reference
// (a+1)(b+1) = ab + a + b + 1 을 이용한 식
// 이게뭐누 ㅋㅋ
function solution(clothes) {
  var answer = 1;
  const spyWear = {};
  for (const clothNPart of clothes)
    spyWear[clothNPart[1]] = (spyWear[clothNPart[1]] || 0) + 1;
  for (const part in spyWear) answer *= spyWear[part] + 1;
  return answer - 1;
}

// 다른 다사람 풀이 다 봤는데 결국 다 (a+1)(b+1)을 이용한것임
