// 태그div를 전부 찾아서 배열 형태로 만듬
const divs = document.querySelectorAll('div');

// 현재 타겟의 클래스 이름을 콘솔에 출력
// const clickEvent = (e) => {
//   console.log(e.currentTarget.className);
// };

// 이벤트 전파 막기로 현재 타겟의 클래스 이름만 콘솔에 출력
const clickEvent = (e) => {
  e.stopPropagation();
  console.log(e.currentTarget.className);
};

// 찾은 요소들 각각에 이벤트 넣기
divs.forEach((div) => {
  div.addEventListener('click', clickEvent, { capture: true });
});
