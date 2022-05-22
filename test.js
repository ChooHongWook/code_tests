function getBCount(board, R, C) {
  let count = 0;
  if (R > 0) {
    if (C > 0 && board[R - 1][C - 1] === 'B') {
      count++;
    }
    if (board[R - 1][C] === 'B') {
      count++;
    }
    if (board[R - 1][C + 1] === 'B') {
      count++;
    }
  }

  if (C > 0 && board[R][C - 1] === 'B') {
    count++;
  }
  if (board[R][C + 1] === 'B') {
    count++;
  }

  if (R + 1 < board.length) {
    if (C > 0 && board[R + 1][C - 1] === 'B') {
      count++;
    }
    if (board[R + 1][C] === 'B') {
      count++;
    }
    if (board[R + 1][C + 1] === 'B') {
      count++;
    }
  }
  return count;
}

function solution(N, R, C) {
  // write your code in JavaScript (Node.js 8.9.4)

  // make board
  let board = [];
  for (let i = 0; i < N; i++) {
    let arr = Array(N).fill(0);
    board.push(arr);
  }
  console.log('board:', board);
  for (let i = 0; i < R.length; i++) {
    board[R[i]][C[i]] = 'B';
  }
  console.log('board + B:', board);
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 'B') {
        continue;
      }
      board[i][j] = getBCount(board, i, j);
    }
  }

  return board;
}
console.log(solution(3, [2, 1, 0, 2], [0, 2, 1, 2]));
