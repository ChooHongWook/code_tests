document.querySelector('#id-checkbox').addEventListener(
  'click',
  function (event) {
    document.getElementById('output-box').innerHTML +=
      '죄송합니다! <code>preventDefault()</code> 때문에 체크할 수 없어요!<br>';
    event.preventDefault();
  },
  false
);
