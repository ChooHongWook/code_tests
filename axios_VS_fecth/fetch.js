//fetch

const url = `http://localhost3000/test`;
const option = {
  method: "POST",
  header: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Kim",
    age: 25,
  }),
};

fetch(url, option).then((res) => {
  console.log(res);
});



