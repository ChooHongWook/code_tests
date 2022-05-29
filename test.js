function mostFrequentCharacter(str) {
  // TODO: 여기에 코드를 작성합니다.

  let newObj = {};
  let result = '';
  let bigNum = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      continue;
    }

    if (str[i] in newObj) {
      newObj[str[i]] += 1;
      if (bigNum < newObj[str[i]]) {
        result = str[i];
        bigNum = newObj[str[i]];
      }
    } else {
      newObj[str[i]] = 1;
    }
  }

  return result;
}
