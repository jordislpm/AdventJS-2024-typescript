function drawRace(indices: number[], length: number): string {
    // Code here

    let result: string[] = []
    let line = "~".repeat(length)

    for (let index = 0; index < indices.length; index++) {
        let lineCompleted = ''
        const element = indices[index];
        let arrLine = line.split("")
        if (element == 0) {
            lineCompleted = `${" ".repeat(Math.abs(indices.length - index - 1))}${line} /${index + 1}`
        }
        else if (element > 0) {
            arrLine[element] = "r"
            lineCompleted = `${" ".repeat(Math.abs(indices.length - index - 1))}${arrLine.join("")} /${index + 1}`
        } else if (element < 0) {
            arrLine[length + element] = "r"
            lineCompleted = `${" ".repeat(Math.abs(indices.length - index - 1))}${arrLine.join("")} /${index + 1}`
        }

        result.push(lineCompleted)
    }
    return result.join("\n")
}

//console.log(  drawRace([0, 5, -3], 10));
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/

console.log(drawRace([2, -1, 0, 5], 8));
/*
   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4
*/

//console.log(drawRace([3, 7, -2], 12));
/*
  ~~~r~~~~~~~~ /1
 ~~~~~~~~r~~~ /2
~~~~~~~~~r~~ /3
*/