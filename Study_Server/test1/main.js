const http = require('http');

const server = http.createServer((req, res) => {
  // console.log('req:', req.url);
  res.end('<h1> server check </h1>');
  console.log('req:', req.url);
});
const PORT = 4000;
server.listen(PORT, () => {
  console.log(`server running PORT:${PORT}`);
});
