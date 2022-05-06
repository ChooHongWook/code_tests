function solution(board, moves) {
  // console.log("board:",board)
  let box = [];
  let result = 0;
  // 움직임 수만큼 이동
  for (let i = 0; i < moves.length; i++) {
    // 움직이는 x축 = moves[i]
    let x = moves[i] - 1;
    for (let j = 0; j < board.length; j++) {
      // 칸이 비어있으면 넘어감
      // console.log("y:",j)
      // console.log("x:",x)
      // console.log("board[j][x]:",board[j][x])
      // console.log("box:",box)
      // console.log("result:",result)
      // console.log()
      if (board[j][x] === 0) {
        continue;
        // 인형이 들어 있으면 뽑음
      } else {
        // box의 맨 끝과 같은 숫자면 사라짐
        if (box[box.length - 1] === board[j][x]) {
          box.pop();
          result++;
          // 다른 숫자면 끝에 들어감
        } else {
          box.push(board[j][x]);
        }

        board[j][x] = 0;
        break;
      }
      // console.log()
    }
  }
  // console.log("result:",result)

  var answer = 0;
  return result * 2;
}

//----------------------------------------------------------------

function solution(board, moves) {
  let box = [];
  let result = 0;
  // 움직임 수만큼 이동
  for (let i = 0; i < moves.length; i++) {
    // 움직이는 x축 = moves[i]
    let x = moves[i] - 1;
    for (let j = 0; j < board.length; j++) {
      // 칸이 비어있으면 넘어감
      if (board[j][x] === 0) {
        continue;
        // 인형이 들어 있으면 뽑음
      } else {
        // box의 맨 끝과 같은 숫자면 사라짐
        if (box[box.length - 1] === board[j][x]) {
          box.pop();
          result++;
          // 다른 숫자면 끝에 들어감
        } else {
          box.push(board[j][x]);
        }
        // 뽑으면
        board[j][x] = 0;
        break;
      }
    }
  }
  return result * 2;
}
