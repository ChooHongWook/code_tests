// express 넣기
// import와의 차이점
// import는 최상단에만 선언할수 있음
// require는 중간에 선언할수 있음
// inportrk ex6문법
const express = require('express');

const app = express();

const members = require('./members');

console.log('members:', members);

app.get('/main', (req, res) => {
  res.send('<h1>Main Page</h1>');
});

let port = 4000;
app.listen(port, () => {
  console.log(`Server is running port:${port}`);
});
