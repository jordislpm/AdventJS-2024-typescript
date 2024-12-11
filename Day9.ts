type Space = '·' | '@' | '*' | 'o'
type Board = Space[]
type Movement = 'U' | 'D' | 'R' | 'L'
type Result = 'none' | 'crash' | 'eat'

function moveTrain(board: string[], mov: Movement): Result {
  let result: Result = "none";
  const train = "@";

  // Mapa de direcciones de movimiento
  const directions: Record<Movement, [number, number]> = {
    U: [-1, 0],
    D: [1, 0],
    L: [0, -1],
    R: [0, 1],
  };

  // Lógica para validar el movimiento
  const checkMove = (row: number, col: number): Result => {
    if (row < 0 || row >= board.length || col < 0 || col >= board[row].length) {
      return "crash"; // Fuera del tablero
    }
    const newPlace = board[row][col];
    const moveResults: Record<string, Result> = {
      "·": "none",
      "o": "crash",
      "*": "eat",
    };
    return moveResults[newPlace] ?? "crash"; // Valor por defecto
  };

  // Encontrar posición del tren
  let trainRow = -1, trainCol = -1;
  board.some((level, rowIndex) => {
    const colIndex = level.indexOf(train);
    if (colIndex !== -1) {
      trainRow = rowIndex;
      trainCol = colIndex;
      return true; // Detener búsqueda
    }
    return false;
  });

  // Si no se encuentra el tren, no hay movimiento
  if (trainRow === -1 || trainCol === -1) return result;

  // Calcular nueva posición según la dirección
  const [rowDelta, colDelta] = directions[mov] || [0, 0];
  const newRow = trainRow + rowDelta;
  const newCol = trainCol + colDelta;

  // Validar movimiento
  result = checkMove(newRow, newCol);

  return result;
}

const board = ['·····', '*····', '@····', 'o····', 'o····']

console.log(moveTrain(board, 'U'))
// ➞ 'eat'
// Because the train moves up and finds a magical fruit

console.log(moveTrain(board, 'D'))
// ➞ 'crash'
// The train moves down and the head crashes into itself

console.log(moveTrain(board, 'L'))
// ➞ 'crash'
// The train moves to the left and crashes into the wall

console.log(moveTrain(board, 'R'))
// ➞ 'none'
// The train moves to the right and there is empty space on the right


