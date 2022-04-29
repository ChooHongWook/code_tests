function solution(new_id) {
  // 아이디의 길이는 3자 이상 15자 이하
  // 아이디는 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.) 문자만 사용
  // 단, 마침표(.)는 처음과 끝에 사용할 수 없으며 또한 연속으로 사용할 수 없습니다.
  // for문 또는 정규표현식
  // 소문자로 변환
  let lower_id = new_id.toLowerCase();
  let role = 'abcdefghijklmnopqrstuvwxyz0123456789-_.';
  let role1_id = '';
  let result = '';
  for (let i = 0; i < lower_id.length; i++) {
    // console.log("for작동?")
    if (role.includes(lower_id[i])) {
      // console.log("if작동?")
      role1_id += lower_id[i];
    }
  }
  // console.log("role1_id:",role1_id)
  for (let i = 0; i < role1_id.length; i++) {
    if (role1_id[i] + role1_id[i + 1] !== '..') {
      result += role1_id[i];
    }
  }
  // console.log("result:",result)
  if (result[0] === '.') {
    result = result.slice(1);
  }
  if (result[result.length - 1] === '.') {
    result = result.slice(0, result.length - 1);
  }
  // console.log("role4_id:",result)

  if (result === '') {
    result += 'a';
  }
  // console.log("role5_id:",result)
  // console.log("result.length:",result.length)
  if (result.length >= 16) {
    result = result.slice(0, 15);
  }
  if (result[result.length - 1] === '.') {
    result = result.slice(0, result.length - 1);
  }
  // console.log("role6_id:",result)

  while (result.length <= 2) {
    result += result[result.length - 1];
  }
  // console.log("role7_id:",result)
  // let answer = '';
  return result;
}
