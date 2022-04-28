// 시간복잡도 O(4n)
function solution(id_list, report, k) {
  // 한번에 한명 신고
  // 횟수 제한 x 서로 다른 유저 연속 신고 가능하나 최대 1회 처리
  // => 중복 있을시 중복 처링필요
  // k번 이상 정지 및 신고자에게 알림 메일
  // => 정지한 사람을 신고한사람 정보필요
  // 모든 신고 내용 취합 후 정지 메일 발송

  var answer = [];
  const obj_id = {};
  const objReport = {};
  const banList = [];

  // id_list를 객체로 변화
  id_list.map((id) => (obj_id[id] = 0));

  // 중복된 신고 제거를 위한 중복 배열 제거
  const newReport = [...new Set(report)];
  const arrReport = newReport.map((rep) => rep.split(' '));

  // 신고 당한 아이디 객체 생성 { 아이디: 횟수 }
  arrReport.map((rep) => {
    if (!objReport[rep[1]]) {
      objReport[rep[1]] = 1;
    } else if (objReport[rep[1]]) {
      objReport[rep[1]] += 1;
    }
  });
  // 신고 당한 아이디 객체 중 k 조건에 부합하지 않는 객체 제거
  Object.keys(objReport).map((key) => {
    if (objReport[key] >= k) {
      banList.push(key);
    }
  });

  // 정지된 유저를 신고한 신고자 객체 생성
  // report에서 정지된 유저를 신고했던 유저 서칭 후 객체 값 + 1
  // { 유저명: 정지시킨 신고 수}
  arrReport.map((rep) => {
    if (banList.includes(rep[1])) {
      // ★수정★
      obj_id[rep[0]] += 1;
    }
  });

  // obj_id 객체의 값을 return
  answer = Object.values(obj_id);
  return answer;
}
