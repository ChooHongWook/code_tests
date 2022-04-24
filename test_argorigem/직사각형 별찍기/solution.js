process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const n = data.split(' ');
  const a = Number(n[0]),
    b = Number(n[1]);
  //console.log("a",a);
  //console.log("b",b);
  result = '';
  let arr1 = '';
  for (let i = 0; i < a; i++) {
    arr1 += '*';
  }
  for (let i = 0; i < b; i++) {
    result += arr1 + '\n';
  }
  console.log(result);
});
