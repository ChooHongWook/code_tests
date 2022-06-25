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
