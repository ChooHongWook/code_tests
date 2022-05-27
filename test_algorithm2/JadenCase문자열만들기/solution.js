function solution(s) {
  let answer = '';
  for (let i = 0; i < s.length; i++) {
    if (i === 0 || s[i - 1] === ' ') {
      answer += s[i].toUpperCase();
    } else {
      answer += s[i].toLowerCase();
    }
  }
  return answer;
}
/*
정확성  테스트
테스트 1 〉	통과 (0.06ms, 30MB)
테스트 2 〉	통과 (0.07ms, 30MB)
테스트 3 〉	통과 (0.07ms, 30.2MB)
테스트 4 〉	통과 (0.07ms, 30.1MB)
테스트 5 〉	통과 (0.08ms, 29.9MB)
테스트 6 〉	통과 (0.07ms, 30MB)
테스트 7 〉	통과 (0.07ms, 30.1MB)
테스트 8 〉	통과 (0.06ms, 30.1MB)
테스트 9 〉	통과 (0.06ms, 30.2MB)
테스트 10 〉	통과 (0.05ms, 30.1MB)
테스트 11 〉	통과 (0.08ms, 30.1MB)
테스트 12 〉	통과 (0.11ms, 29.8MB)
테스트 13 〉	통과 (0.06ms, 30.1MB)
테스트 14 〉	통과 (0.07ms, 30.2MB)
테스트 15 〉	통과 (0.08ms, 30.1MB)
테스트 16 〉	통과 (0.06ms, 30.1MB)
테스트 17 〉	통과 (0.06ms, 30.1MB)
테스트 18 〉	통과 (0.04ms, 29.8MB)
 */

//----------------------------------------------------------------

function solution(s) {
  let str = s.toLowerCase();
  console.log('str:', str);
  let strArr = []; // = str.split(' ')
  let blankArr = [];
  for (let i = 0; i < str.length; i++) {
    let word = '';
    let blank = '';
    if (str[i] === ' ' && str[i + 1] === ' ') {
      function solution(s) {
        let str = s.toLowerCase();
        console.log('str:', str);
        let strArr = []; // = str.split(' ')
        let blankArr = [];
        for (let i = 0; i < str.length; i++) {
          let word = '';
          let blank = '';
          if (str[i] === ' ' && str[i + 1] === ' ') {
          }
        }

        console.log('strArr:', strArr);
        for (let i = 0; i < strArr.length; i++) {
          let wordArr = strArr[i].split('');
          console.log('wordArr:', wordArr);
          wordArr[0] = wordArr[0].toUpperCase();
          console.log('wordArr:', wordArr);
          strArr[i] = wordArr.join('');
        }
        console.log('strArr:', strArr);
        var answer = '';
        return strArr.join(' ');
      }
    }
  }

  console.log('strArr:', strArr);
  for (let i = 0; i < strArr.length; i++) {
    let wordArr = strArr[i].split('');
    console.log('wordArr:', wordArr);
    wordArr[0] = wordArr[0].toUpperCase();
    console.log('wordArr:', wordArr);
    strArr[i] = wordArr.join('');
  }
  console.log('strArr:', strArr);
  var answer = '';
  return strArr.join(' ');
}
/*
다른방법 탐색
 */

//----------------------------------------------------------------

function solution(s) {
  var answer = '';
  answer = s
    .split(' ')
    .map(
      (word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
    )
    .join(' ');
  //word[0]은 빈 문자열을 만나면 undefined를,  word.charAt(0)은 빈 문자열을 만나면 빈 문자열을 반환한다.
  return answer;
}
/*
정확성  테스트
테스트 1 〉	통과 (0.06ms, 30.1MB)
테스트 2 〉	통과 (0.07ms, 30.2MB)
테스트 3 〉	통과 (0.10ms, 30.2MB)
테스트 4 〉	통과 (0.07ms, 29.7MB)
테스트 5 〉	통과 (0.12ms, 29.9MB)
테스트 6 〉	통과 (0.07ms, 30.1MB)
테스트 7 〉	통과 (0.08ms, 29.8MB)
테스트 8 〉	통과 (0.10ms, 30MB)
테스트 9 〉	통과 (0.11ms, 29.9MB)
테스트 10 〉	통과 (0.06ms, 30MB)
테스트 11 〉	통과 (0.13ms, 30MB)
테스트 12 〉	통과 (0.16ms, 30MB)
테스트 13 〉	통과 (0.09ms, 30MB)
테스트 14 〉	통과 (0.07ms, 30.1MB)
테스트 15 〉	통과 (0.08ms, 30.2MB)
테스트 16 〉	통과 (0.06ms, 29.9MB)
테스트 17 〉	통과 (0.08ms, 30MB)
테스트 18 〉	통과 (0.08ms, 30.2MB)
 */

//----------------------------------------------------------------

function solution(s) {
  var answer = [];

  s = s.split(' ');
  for (var i = 0; i < s.length; i++) {
    answer.push(
      s[i].substr(0, 1).toUpperCase() +
        s[i].substr(1, s[i].length).toLowerCase()
    );
  }
  return answer.join(' ');
}

/*

 */

//----------------------------------------------------------------
