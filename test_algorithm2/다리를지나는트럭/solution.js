function solution(bridge_length, weight, truck_weights) {
  // 다리 위의 트럭 정보
  let onBridge_Arr = Array(bridge_length).fill(0);
  // 걸리는 시간
  let time = 0;
  let i = 0;

  // 트럭이 전부 지나갈때 까지 반복
  while (i < truck_weights.length) {
    onBridge_Arr.shift();
    if (sumArr(onBridge_Arr) + truck_weights[i] > weight) {
      onBridge_Arr.push(0);
    } else {
      onBridge_Arr.push(truck_weights[i]);
      i++;
    }
    time++;
  }
  // 마지막 트럭이 들어갔다면 다리의 기리만큼 시간이 더걸림
  return time + bridge_length;
}
// 함수안의 인자를 전부 더하는 함수
function sumArr(arr) {
  return arr.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
}

/*
정확성  테스트
테스트 1 〉	통과 (32.30ms, 31.9MB)
테스트 2 〉	통과 (1059.72ms, 32.3MB)
테스트 3 〉	통과 (0.09ms, 30.3MB)
테스트 4 〉	통과 (252.16ms, 32.2MB)
테스트 5 〉	통과 (2401.63ms, 33.7MB)
테스트 6 〉	통과 (664.46ms, 32.8MB)
테스트 7 〉	통과 (17.32ms, 31.8MB)
테스트 8 〉	통과 (0.69ms, 29.8MB)
테스트 9 〉	통과 (30.57ms, 31.8MB)
테스트 10 〉	통과 (0.80ms, 29.7MB)
테스트 11 〉	통과 (0.11ms, 29.7MB)
테스트 12 〉	통과 (0.51ms, 29.8MB)
테스트 13 〉	통과 (4.91ms, 31.7MB)
테스트 14 〉	통과 (0.08ms, 29.9MB)
*/

// --------------------------------------------------------------

//? optimize soluiton
// reduce함수를 안써서 함수한번 사용할때마다 배열안의 인자를 전부 확인하는 시간을 줄임

function solution(bridge_length, weight, truck_weights) {
  // 다리 위의 트럭 정보
  let onBridge_Arr = Array(bridge_length).fill(0);

  // 다리위의 트럭 총 무게
  let onBrigeWeight = 0;
  // 걸리는 시간
  let time = 0;
  let i = 0;

  // 트럭이 전부 지나갈때 까지 반복
  while (i < truck_weights.length) {
    // 다리위에서 나가는 트럭이 있으면 무게가 줄어듬
    onBrigeWeight -= onBridge_Arr.shift();
    if (onBrigeWeight + truck_weights[i] > weight) {
      onBridge_Arr.push(0);
    } else {
      // 트럭이 올라오면 무게가 증가
      onBridge_Arr.push(truck_weights[i]);
      onBrigeWeight += truck_weights[i];
      i++;
    }
    time++;
  }
  // 마지막 트럭이 들어갔다면 다리의 기리만큼 시간이 더걸림
  return time + bridge_length;
}

/*
정확성  테스트
테스트 1 〉	통과 (0.28ms, 30MB)
테스트 2 〉	통과 (29.01ms, 32.8MB)
테스트 3 〉	통과 (0.05ms, 30.1MB)
테스트 4 〉	통과 (4.80ms, 32.8MB)
테스트 5 〉	통과 (26.49ms, 34.8MB)
테스트 6 〉	통과 (9.24ms, 33.6MB)
테스트 7 〉	통과 (0.34ms, 30.1MB)
테스트 8 〉	통과 (0.10ms, 30.1MB)
테스트 9 〉	통과 (3.13ms, 32.9MB)
테스트 10 〉	통과 (0.18ms, 30.2MB)
테스트 11 〉	통과 (0.06ms, 30MB)
테스트 12 〉	통과 (0.13ms, 30MB)
테스트 13 〉	통과 (0.37ms, 30.1MB)
테스트 14 〉	통과 (0.05ms, 30.2MB)
*/

//----------------------------------------------------------------
// 다른사람 풀이1
function solution(bridge_length, weight, truck_weights) {
  // '다리'를 모방한 큐에 간단한 배열로 정리 : [트럭무게, 얘가 나갈 시간].
  let time = 0,
    qu = [[0, 0]],
    weightOnBridge = 0;

  // 대기 트럭, 다리를 건너는 트럭이 모두 0일 때 까지 다음 루프 반복
  while (qu.length > 0 || truck_weights.length > 0) {
    // 1. 현재 시간이, 큐 맨 앞의 차의 '나갈 시간'과 같다면 내보내주고,
    //    다리 위 트럭 무게 합에서 빼준다.
    if (qu[0][1] === time) weightOnBridge -= qu.shift()[0];

    if (weightOnBridge + truck_weights[0] <= weight) {
      // 2. 다리 위 트럭 무게 합 + 대기중인 트럭의 첫 무게가 감당 무게 이하면
      //    다리 위 트럭 무게 업데이트, 큐 뒤에 [트럭무게, 이 트럭이 나갈 시간] 추가.
      weightOnBridge += truck_weights[0];
      qu.push([truck_weights.shift(), time + bridge_length]);
    } else {
      // 3. 다음 트럭이 못올라오는 상황이면 얼른 큐의
      //    첫번째 트럭이 빠지도록 그 시간으로 점프한다.
      //    참고: if 밖에서 1 더하기 때문에 -1 해줌
      if (qu[0]) time = qu[0][1] - 1;
    }
    // 시간 업데이트 해준다.
    time++;
  }
  return time;
}

/*
정확성  테스트
테스트 1 〉	통과 (0.07ms, 30.3MB)
테스트 2 〉	통과 (0.11ms, 30.2MB)
테스트 3 〉	통과 (0.12ms, 29.8MB)
테스트 4 〉	통과 (0.17ms, 30.2MB)
테스트 5 〉	통과 (0.54ms, 30.1MB)
테스트 6 〉	통과 (0.39ms, 30MB)
테스트 7 〉	통과 (0.07ms, 30.2MB)
테스트 8 〉	통과 (0.09ms, 29.9MB)
테스트 9 〉	통과 (0.23ms, 30.2MB)
테스트 10 〉	통과 (0.08ms, 30.1MB)
테스트 11 〉	통과 (0.14ms, 30.1MB)
테스트 12 〉	통과 (0.11ms, 30.2MB)
테스트 13 〉	통과 (0.12ms, 30.1MB)
테스트 14 〉	통과 (0.07ms, 30.1MB)
*/

//----------------------------------------------------------------
// 다른사람 풀이1 optimize
function solution(bridge_length, weight, truck_weights) {
  // '다리'를 모방한 큐에 간단한 배열로 정리 : [트럭무게, 얘가 나갈 시간].
  let time = 0,
    qu = [[0, 0]],
    weightOnBridge = 0;

  // 대기 트럭이 없을 때 까지 다음 루프 반복
  while (truck_weights.length > 0) {
    // 1. 현재 시간이, 큐 맨 앞의 차의 '나갈 시간'과 같다면
    //    내보내주고,다리 위 트럭 무게 합에서 빼준다.
    if (qu[0][1] === time) weightOnBridge -= qu.shift()[0];

    if (weightOnBridge + truck_weights[0] <= weight) {
      // 2. 다리 위 트럭 무게 합 + 대기중인 트럭의 첫 무게가 감당 무게 이하면
      //    다리 위 트럭 무게 업데이트, 큐 뒤에 [트럭무게, 이 트럭이 나갈 시간] 추가.
      weightOnBridge += truck_weights[0];
      qu.push([truck_weights.shift(), time + bridge_length]);
      // 시간 업데이트 해준다.
      time++;
    } else if (qu[0]) time = qu[0][1];
    // 3. 2의 조건에 해당하지 않고 다음 트럭이 존재한다면
    //    큐의 첫번째 트럭이 빠지도록 그 시간으로 점프한다.
  }
  // 4. 마지막 트럭이 올라갔다면
  //    그 마지막 트럭이 나가는 시간은
  //    올라간 시간 + 다리의 길이
  return time + bridge_length;
}

/*
정확성  테스트
테스트 1 〉	통과 (0.10ms, 30MB)
테스트 2 〉	통과 (0.08ms, 29.8MB)
테스트 3 〉	통과 (0.10ms, 30.3MB)
테스트 4 〉	통과 (0.16ms, 30MB)
테스트 5 〉	통과 (0.34ms, 30MB)
테스트 6 〉	통과 (0.23ms, 30.1MB)
테스트 7 〉	통과 (0.07ms, 29.9MB)
테스트 8 〉	통과 (0.11ms, 30MB)
테스트 9 〉	통과 (0.24ms, 30MB)
테스트 10 〉	통과 (0.08ms, 30.1MB)
테스트 11 〉	통과 (0.09ms, 30.1MB)
테스트 12 〉	통과 (0.12ms, 30.2MB)
테스트 13 〉	통과 (0.12ms, 30.2MB)
테스트 14 〉	통과 (0.09ms, 29.8MB)
*/

//----------------------------------------------------------------
// 교과서

2;
3;
4;
5;
6;
7;
8;
9;
10;
11;
12;
13;
14;
15;
16;
17;
18;
19;
20;
21;
22;
23;
24;
25;
26;
27;
28;
29;
30;
31;
32;
33;
34;
35;
36;
37;
38;
39;
40;
41;
42;
43;
44;
45;
46;
47;
48;
49;
50;
51;
52;
53;
54;
55;
56;
57;
58;
59;
60;
61;
62;
63;
64;
65;
66;
67;
68;
69;
70;
71;
72;
73;
74;
75;
76;
77;
78;
79;
80;
81;
82;
83;
84;
85;
86;
87;
88;
89;
90;
91;
92;
93;
94;
95;
96;
97;
98;
99;
100;
101;
function Node(firstData) {
  this.data = firstData;
  this.prev = null;
  this.next = null;
}

// first out last in
function Queue() {
  this.first = null;
  this.last = null;

  this.enqueue = function (node) {
    if (this.first === null) {
      this.first = node;
      this.first.next = node;
      this.last = node;
      this.last.prev = node;
    } else if (this.first === this.last) {
      this.first.prev = null;
      this.first.next = node;
      this.last = node;
      this.last.prev = this.first;
      this.last.next = null;
    } else if (this.last !== null) {
      var temp = this.last;
      temp.next = node;
      this.last = node;
      this.last.prev = temp;
    }
  };

  this.dequeue = function () {
    var returnValue = this.first.data;

    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else if (this.first !== this.last) {
      this.first = this.first.next;
    }

    return returnValue;
  };

  this.length = function () {
    if (this.first === null) return 0;
    else if (this.first === this.last) {
      return 1;
    } else if (this.first !== this.last) {
      var count = 1,
        node = this.first;

      while (node.next !== null) {
        node = node.next;
        count++;
      }

      return count;
    }
  };

  this.sum = function () {
    if (this.first === null) return 0;
    else if (this.first === this.last) {
      return this.first.data;
    } else if (this.first !== this.last) {
      var count = this.first.data !== -1 ? this.first.data : 0, // 이 문제에 맞게 추가함
        node = this.first;

      while (node.next !== null) {
        node = node.next;
        if (node.data !== -1)
          // 이 문제에 맞게 추가한 조건문
          count += node.data;
      }

      return count;
    }
  };
}

function solution(bridge_length, weight, truck_weights) {
  var answer = 0,
    truck_length = truck_weights.length,
    q = new Queue(),
    end = 0;

  var i = 0;
  for (; i < bridge_length; i++) q.enqueue(new Node(-1));

  while (end !== truck_length) {
    // move truck
    answer++;
    end += q.dequeue() !== -1 ? 1 : 0;

    // add truck
    q.enqueue(
      new Node(
        q.sum() + truck_weights[0] <= weight ? truck_weights.shift() : -1
      )
    );
  }

  return answer;
}

/*
정확성  테스트
테스트 1 〉	통과 (43.83ms, 33MB)
테스트 2 〉	통과 (972.79ms, 36.5MB)
테스트 3 〉	통과 (0.35ms, 30MB)
테스트 4 〉	통과 (197.10ms, 33.5MB)
테스트 5 〉	통과 (4443.02ms, 60.1MB)
테스트 6 〉	통과 (797.77ms, 35.9MB)
테스트 7 〉	통과 (32.39ms, 32.4MB)
테스트 8 〉	통과 (1.66ms, 32.7MB)
테스트 9 〉	통과 (11.81ms, 33.2MB)
테스트 10 〉	통과 (1.98ms, 32.6MB)
테스트 11 〉	통과 (0.44ms, 30.1MB)
테스트 12 〉	통과 (0.74ms, 30.1MB)
테스트 13 〉	통과 (4.20ms, 32.6MB)
테스트 14 〉	통과 (0.62ms, 30MB)
*/

//----------------------------------------------------------------
