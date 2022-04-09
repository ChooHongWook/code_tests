// node_modules 에 있는 express 관련 파일을 가져온다.
let express = require("express");

// express 는 함수이므로, 반환값을 변수에 저장한다.
let app = express();

app.post("/test", function (req, res) {
  console.log("req :", req);
  console.log("req.body :", req.body);
  console.log("req.data :", req.data);
  res.send("서버연결확인");
});

// 3000 포트로 서버 오픈
let PORT = 3000;
app.listen(PORT, function () {
  console.log(`start! express server on port ${PORT}`);
});
