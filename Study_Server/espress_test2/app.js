const exports = require('express');

const app = express();

app.get('/main', (req, res) => {
  res.send('<h1>Main Page</h1>');
});

let port = 4000;
app.listen(port);
