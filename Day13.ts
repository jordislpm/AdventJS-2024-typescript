function isRobotBack(moves: string): true | [number, number] {
    let position: [number, number] = [0, 0]

    let newArr:string[] = []
    const updatePosition = (move: string) => {
        const directions: Record<string, [number, number]> = {
            "R": [1, 0],
            "L": [-1, 0],
            "U": [0, 1],
            "D": [0, -1],
        };
        const [dx, dy] = directions[move];
        position[0] += dx;
        position[1] += dy;
    };

    const inverse = {
        "U": "D",
        "D": "U",
        "R": "L",
        "L": "R"
      }

      let allModifiers = "!?*"
      let modifier = ""
     moves.split("").forEach((move)=>{

        if(allModifiers.includes(move)){
            modifier = move;
        } else {
            let actualMove: string[] = [move]

            switch (modifier) {
                case "*":
               actualMove = [move, move]
                  break;
                case "!":
                    actualMove = [inverse[move]]
                  break;
                case "?":
actualMove = !newArr.includes(move) ? [move]: []

                  break;
                default:
                  break;
              }

              modifier = ""
      
              newArr.push(...actualMove)
              actualMove = []
        }

     })
    newArr.forEach(updatePosition);
    return position[0] == 0 && position[1] == 0 ? true : position
}
console.log(isRobotBack('R')  )   // [1, 0]
console.log(isRobotBack('RL') )   // true
console.log(isRobotBack('RLUD')) // true
console.log(isRobotBack('*RU')  ) // [2, 1]
console.log(isRobotBack('R*U')  ) // [1, 2]
console.log(isRobotBack('LLL!R'))// [-4, 0]
console.log(isRobotBack('R?R') )  // [1, 0]
console.log(isRobotBack('L?R') )  // true
console.log(isRobotBack('U?D')  ) // true
console.log(isRobotBack('R!L')  ) // [2,0]
console.log(isRobotBack('U!D')  ) // [0,2]
console.log(isRobotBack('R?L') )  // true
console.log(isRobotBack('U?U') )  // [0,1]
console.log(isRobotBack('*U?U') ) // [0,2]
console.log(isRobotBack('U?D?U')) // true
console.log(isRobotBack('U?D?U')) // true