function isRobotBack(moves: string): true | [number, number] {
    let position: [number, number] = [0, 0]



    let arr = moves.split("")
    let newArr:string[] = []

    const checkDirection = (str:string)=>{
        if (str === "R") {
            position[0] += 1
        } else if (str === "L") {
            position[0] -= 1

        } else if (str === "U") {
            position[1] += 1

        } else if (str === "D") {
            position[1] -= 1

        }
    }



    const inverse = {
        "U": "D",
        "D": "U",
        "R": "L",
        "L": "R"
      }

    arr.forEach((ele, i)=>{
        
        if(ele === "!"){
             const nextMove = arr[i + 1] || ""
            let newMove = inverse[nextMove]
            newArr.push(newMove, newMove)
        } else if (ele === "*"){
            const nextMove = arr[i + 1] || ""
            newArr.push(nextMove)

        }else if(ele === "?"){
            const nextMove = arr[i + 1] || ""
            if(newArr.some(lt => lt === nextMove)){
                let newMove = inverse[nextMove]
              newArr.push(newMove)
                } 
        } else{
newArr.push(ele)
        }
    })
    console.log(newArr)
    newArr.forEach((ele)=> checkDirection(ele))
    return position[0] == 0 && position[1] == 0 ? true : position
}

//  console.log(isRobotBack('R')  )   // [1, 0]
// console.log(isRobotBack('RL') )   // true
// console.log(isRobotBack('RLUD')) // true
// console.log(isRobotBack('*RU')  ) // [2, 1]
// console.log(isRobotBack('R*U')  ) // [1, 2]
// console.log(isRobotBack('LLL!R'))// [-4, 0]
// console.log(isRobotBack('R?R') )  // [1, 0]
// console.log(isRobotBack('L?R') )  // true
// console.log(isRobotBack('U?D')  ) // true
// console.log(isRobotBack('R!L')  ) // [2,0]
// console.log(isRobotBack('U!D')  ) // [0,2]
// console.log(isRobotBack('R?L') )  // true
// console.log(isRobotBack('U?U') )  // [0,1]
// console.log(isRobotBack('*U?U') ) // [0,2]
console.log(isRobotBack('U?D?U')) // true