// 작동 막기
document.querySelector('#id-checkbox').addEventListener(
  'click',
  function (event) {
    document.getElementById('output-box').innerHTML +=
      '죄송합니다! <code>preventDefault()</code> 때문에 체크할 수 없어요!<br>';
    event.preventDefault();
  },
  false
);
//----------------------------------------------------------------

// 메시지 보여주기
function displayWarning(msg) {
  warningBox.innerHTML = msg;

  if (document.body.contains(warningBox)) {
    window.clearTimeout(warningTimeout);
  } else {
    // insert warningBox after myTextbox
    myTextbox.parentNode.insertBefore(warningBox, myTextbox.nextSibling);
  }

  warningTimeout = window.setTimeout(function () {
    warningBox.parentNode.removeChild(warningBox);
    warningTimeout = -1;
  }, 2000);
}

// 영문 소문지인지 확인
function checkName(evt) {
  console.log('evt:', evt);
  let charCode = evt.charCode;
  console.log('charCode:', charCode);
  if (charCode != 0) {
    //영문 소문자가 아니면
    // 영문 소문자 charCode = 97 ~ 122
    if (charCode < 97 || charCode > 122) {
      evt.preventDefault();
      displayWarning(
        '영문 소문자만 입력하세요.' + '\n' + 'charCode: ' + charCode + '\n'
      );
    }
  }
}

let myTextbox = document.getElementById('my-textbox');
myTextbox.addEventListener('keypress', checkName, false);

let warningTimeout;
let warningBox = document.createElement('div');
warningBox.className = 'warning';
