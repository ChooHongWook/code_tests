// 내가 푼 해결

function solution(participant, completion) {
  // 방법 1 둘다 sort해서 for한번만 돌려서 같지 않으면 그것을 꺼내면 됨
  // 방법 2 같은게 있는지 하나씩 반복을 돌려서 뺌..

  // const stringSort = (a,b) => {
  //     if (a > b) return 1
  //     if (a < b) return -1
  //     return 0
  // }

  // participant.sort(stringSort)
  // completion.sort(stringSort)

  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}

/*
정확성  테스트
테스트 1 〉	통과 (0.05ms, 33.6MB)
테스트 2 〉	통과 (0.07ms, 33.6MB)
테스트 3 〉	통과 (0.45ms, 33.5MB)
테스트 4 〉	통과 (0.64ms, 33.8MB)
테스트 5 〉	통과 (0.62ms, 33.8MB)
효율성  테스트
테스트 1 〉	통과 (44.38ms, 46.9MB)
테스트 2 〉	통과 (69.32ms, 52.9MB)
테스트 3 〉	통과 (93.97ms, 58.6MB)
테스트 4 〉	통과 (129.13ms, 58.8MB)
테스트 5 〉	통과 (103.22ms, 57MB)
*/

//------------------------------

function solution(participant, completion) {
  /*
  for(let i in participant) {
      if(completion.includes(participant[i]) == false) return participant[i];
      completion.splice(completion.indexOf(participant[i]), 1);
  }
  */

  participant.sort();
  completion.sort();

  for (let i in participant) {
    if (participant[i] !== completion[i]) return participant[i];
  }
}

/*
정확성  테스트
테스트 1 〉	통과 (0.05ms, 33.4MB)
테스트 2 〉	통과 (0.04ms, 33.4MB)
테스트 3 〉	통과 (0.39ms, 33.5MB)
테스트 4 〉	통과 (0.73ms, 33.8MB)
테스트 5 〉	통과 (0.71ms, 33.8MB)
효율성  테스트
테스트 1 〉	통과 (45.54ms, 48.1MB)
테스트 2 〉	통과 (100.87ms, 53.6MB)
테스트 3 〉	통과 (125.73ms, 57.9MB)
테스트 4 〉	통과 (136.73ms, 61.2MB)
테스트 5 〉	통과 (127.84ms, 61.3MB)
*/

//------------------------------

function solution(participant, completion) {
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    let a = participant[i],
      b = completion[i];

    map.set(a, (map.get(a) || 0) + 1);
    map.set(b, (map.get(b) || 0) - 1);
  }

  for (let [k, v] of map) {
    if (v > 0) return k;
  }

  return 'nothing';
}

/*
정확성  테스트
테스트 1 〉	통과 (0.08ms, 33.6MB)
테스트 2 〉	통과 (0.07ms, 33.6MB)
테스트 3 〉	통과 (0.34ms, 33.6MB)
테스트 4 〉	통과 (0.90ms, 33.8MB)
테스트 5 〉	통과 (0.40ms, 33.8MB)
효율성  테스트
테스트 1 〉	통과 (21.68ms, 54.3MB)
테스트 2 〉	통과 (56.81ms, 62.5MB)
테스트 3 〉	통과 (36.72ms, 67.2MB)
테스트 4 〉	통과 (35.01ms, 67.3MB)
테스트 5 〉	통과 (28.36ms, 63.3MB)
*/
