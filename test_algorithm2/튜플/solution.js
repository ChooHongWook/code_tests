function solution(s) {
  // 길이에 따른 추가된 숫자가 해당 위치에 들어감
  let a = s.slice(2, s.length - 2);
  // console.log("a:",a)
  a = a.split('},{');
  // console.log("a:",a)
  a = a.map((e) => {
    return e.split(',');
  });
  // console.log("a:",a)
  let obj = {};
  a.forEach((e) => {
    // console.log("e:",e)
    e.forEach((el) => {
      if (obj[el] === undefined) {
        obj[el] = 0;
      }
      obj[el] += 1;
    });
  });
  // console.log("obj:",obj)
  let answer = [];
  for (let key in obj) {
    answer[a.length - obj[key]] = Number(key);
  }

  return answer;
}
/**
 * 
테스트 1 〉	통과 (0.15ms, 30.1MB)
테스트 2 〉	통과 (0.16ms, 29.8MB)
테스트 3 〉	통과 (0.28ms, 30MB)
테스트 4 〉	통과 (0.31ms, 30.3MB)
테스트 5 〉	통과 (0.25ms, 30.1MB)
테스트 6 〉	통과 (0.44ms, 30.2MB)
테스트 7 〉	통과 (4.60ms, 32.4MB)
테스트 8 〉	통과 (15.47ms, 35.9MB)
테스트 9 〉	통과 (9.46ms, 32.6MB)
테스트 10 〉	통과 (14.46ms, 36.5MB)
테스트 11 〉	통과 (19.34ms, 36.6MB)
테스트 12 〉	통과 (35.84ms, 37.2MB)
테스트 13 〉	통과 (36.36ms, 37MB)
테스트 14 〉	통과 (37.98ms, 37.4MB)
테스트 15 〉	통과 (0.15ms, 30.2MB)
 * */

function solution(s) {
  return JSON.parse(s.replace(/{/g, '[').replace(/}/g, ']'))
    .sort((a, b) => a.length - b.length)
    .reduce((arr, v, n) => {
      if (n) {
        return arr.concat(v.filter((f) => !arr.includes(f)));
      }
      return v;
    }, []);
}
/**
테스트 1 〉	통과 (0.11ms, 30MB)
테스트 2 〉	통과 (0.18ms, 30MB)
테스트 3 〉	통과 (0.08ms, 30.1MB)
테스트 4 〉	통과 (0.13ms, 29.8MB)
테스트 5 〉	통과 (0.37ms, 30.2MB)
테스트 6 〉	통과 (0.35ms, 30.3MB)
테스트 7 〉	통과 (6.56ms, 32.4MB)
테스트 8 〉	통과 (20.68ms, 33.5MB)
테스트 9 〉	통과 (7.28ms, 32.7MB)
테스트 10 〉	통과 (30.37ms, 33.8MB)
테스트 11 〉	통과 (28.74ms, 34.7MB)
테스트 12 〉	통과 (68.46ms, 36.6MB)
테스트 13 〉	통과 (54.53ms, 36.6MB)
테스트 14 〉	통과 (43.10ms, 36.9MB)
테스트 15 〉	통과 (0.12ms, 30MB)
 *
 *
 */
const tupleFrom = (str) =>
  str
    .slice(2, -2)
    .split('},{')
    .map((it) => toNumbers(it))
    .sort(accendingByLength)
    .reduce(
      (acc, cur) => [...acc, ...cur.filter((it) => !acc.includes(it))],
      []
    );

const toNumbers = (str) => str.split(',').map((it) => Number(it));

const accendingByLength = (arr1, arr2) => arr1.length - arr2.length;

const solution = (s) => tupleFrom(s);
/**

테스트 1 〉	통과 (0.14ms, 30.1MB)
테스트 2 〉	통과 (0.23ms, 30.1MB)
테스트 3 〉	통과 (0.13ms, 30.1MB)
테스트 4 〉	통과 (0.27ms, 30MB)
테스트 5 〉	통과 (0.33ms, 29.8MB)
테스트 6 〉	통과 (0.59ms, 30.4MB)
테스트 7 〉	통과 (12.05ms, 32.9MB)
테스트 8 〉	통과 (23.39ms, 34.9MB)
테스트 9 〉	통과 (11.07ms, 33.7MB)
테스트 10 〉	통과 (26.32ms, 35.1MB)
테스트 11 〉	통과 (35.36ms, 35.5MB)
테스트 12 〉	통과 (49.53ms, 36.7MB)
테스트 13 〉	통과 (51.48ms, 36.6MB)
테스트 14 〉	통과 (50.01ms, 36.8MB)
테스트 15 〉	통과 (0.13ms, 30.2MB)
 *
 *
 */
const solution = (s) =>
  s
    .match(/(\d+,)*\d+/g)
    .map((s) => s.split(',').map((n) => +n))
    .sort((a, b) => a.length - b.length)
    .reduce((a, s) => [...a, ...s.filter((n) => a.indexOf(n) === -1)], []);

/**
 * 테스트 1 〉	통과 (0.22ms, 30MB)
테스트 2 〉	통과 (0.35ms, 30MB)
테스트 3 〉	통과 (0.30ms, 30.1MB)
테스트 4 〉	통과 (0.26ms, 30MB)
테스트 5 〉	통과 (0.51ms, 29.9MB)
테스트 6 〉	통과 (0.66ms, 30.2MB)
테스트 7 〉	통과 (6.65ms, 33.1MB)
테스트 8 〉	통과 (25.55ms, 35MB)
테스트 9 〉	통과 (10.38ms, 33.7MB)
테스트 10 〉	통과 (26.11ms, 35MB)
테스트 11 〉	통과 (38.50ms, 35.6MB)
테스트 12 〉	통과 (53.53ms, 37.2MB)
테스트 13 〉	통과 (51.03ms, 37.3MB)
테스트 14 〉	통과 (51.62ms, 37.2MB)
테스트 15 〉	통과 (0.16ms, 30MB)
 *
 *
 */
