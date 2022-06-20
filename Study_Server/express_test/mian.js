const http = require('http');
const express = require('express');
const app = express();

// const server = http.createServer((req, res) => {
//   console.log('req:', req.url);
//   res.end('<h1> server check </h1>');
//   console.log('req:', req.url);
// });
const PORT = 4000;
let items = ['item1', 'item2', 'item3'];
app.get('/', (req, res) => {
  res.end('<h1> main page </h1>');
});
app.get('/items', (req, res) => {
  res.end(`<h1> 아이템 페이지 ${items}</h1>`);
});
app.get('/items/:id', (req, res) => {
  res.end(`<h1> 개별 아이템 페이지 ${items[res.params.id - 1]}</h1>`);
});
app.get('*', (req, res) => {
  res.end('<h1> not config </h1>');
});

app.listen(PORT, () => {
  console.log(`server running PORT:${PORT}`);
});
