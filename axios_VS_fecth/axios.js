// axios
const axios = require("axios");

axios({
  url: "http://localhost3000/test",
  method: "post",
  headers: {
    "Content-Type": "application/json",
  },
  data: {
    name: "Kim",
    age: 25,
  },
}).then((res) => {
  console.log(res);
});




