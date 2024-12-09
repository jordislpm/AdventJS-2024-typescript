type Space = '·' | '@' | '*' | 'o'
type Board = Space[]
type Movement = 'U' | 'D' | 'R' | 'L'
type Result = 'none' | 'crash' | 'eat'

function moveTrain(board: string[], mov: Movement): Result {
  // Code here


  let arrBoard = board.map((level)=>level.split(""))
  let arrBoardMoving = structuredClone(arrBoard);
  console.log(arrBoard)

 let result:Result = "none"
 let train = "@"
    const checkMove = (newPlace): Result=>{
        if(newPlace == -1) return 'crash'
         if(newPlace == ".") return 'none'
          if(newPlace == train) return 'crash'
           if(newPlace == "*") return 'eat'
           return "none"
    }
    const actionMove = (actionMove:Movement)=>{
        for (let index = 0; index < arrBoard.length; index++) {
            const level = arrBoard[index];
            console.log(level)
            for (let e = 0; e < level.length; e++) {
                const element = level[e];
                if (element === train){
                    if(mov === "U"){
                        arrBoardMoving[index][e] = arrBoard[index][e]
                        arrBoardMoving[index -1][e] = train
                        
                    } else if(mov === "D"){
                        arrBoardMoving[index +1][e] = train
                        arrBoardMoving[index][e] = arrBoard[index][e]
                    } else if (mov === "L"){
                        arrBoardMoving[index][e -1] = train
                        arrBoardMoving[index][e] = arrBoard[index][e]
                    } else if(mov === "R"){
                        arrBoardMoving[index][e +1] = train
                        arrBoardMoving[index][e] = arrBoard[index][e]
                    }
                }
            }
        }

    }

    actionMove(mov)
    console.log(arrBoard)
    console.log(arrBoardMoving)

  return 'none';

}

const board = ['·····', '*····', '@····', 'o····', 'o····']

console.log(moveTrain(board, 'U'))
// ➞ 'eat'
// Because the train moves up and finds a magical fruit

//console.log(moveTrain(board, 'D'))
// ➞ 'crash'
// The train moves down and the head crashes into itself

//console.log(moveTrain(board, 'L'))
// ➞ 'crash'
// The train moves to the left and crashes into the wall

//console.log(moveTrain(board, 'R'))
// ➞ 'none'
// The train moves to the right and there is empty space on the right
