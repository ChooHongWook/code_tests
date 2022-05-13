// // 기존코드
// let inputs = document.querySelectorAll('input');
// inputs.forEach(function (input) {
//   input.addEventListener('click', function (event) {
//     alert('clicked');
//   });
// });

// 변경된이벤트
let itemListObj = document.querySelector('.itemList');
itemListObj.addEventListener('click', function (event) {
  console.log('event.target:', event.target);
  alert(`${event.target.id}`);
});

// 새 리스트 아이템을 추가하는 코드
let itemList = document.querySelector('.itemList');

let li = document.createElement('li');
let input = document.createElement('input');
let label = document.createElement('label');
let labelText = document.createTextNode('추가로 생성된 일정');

input.setAttribute('type', 'checkbox');
input.setAttribute('id', 'item3');
label.setAttribute('for', 'item3');
label.appendChild(labelText);
li.appendChild(input);
li.appendChild(label);
itemList.appendChild(li);
