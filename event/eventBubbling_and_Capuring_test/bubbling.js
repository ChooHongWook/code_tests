// 모든요소 전부 찾아서 배열 형태로 만듬
const all = document.querySelectorAll('*');

// 현재 타겟을 콘솔에 출력
const clickEvent = (e) => {
  console.log(e.currentTarget);
};

// 찾은 요소들 각각에 이벤트 넣기
all.forEach((el) => {
  el.addEventListener('click', clickEvent);
});
