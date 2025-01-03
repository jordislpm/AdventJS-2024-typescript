function detectBombs(grid: boolean[][]): number[][] {

    return grid.map((row,i)=>{

        return row.map((ele, e)=>{
            let up = grid[i -1 ]?.[e] ? 1 : 0 ;
            let upLeft = grid[i -1 ]?.[e -1] ? 1 : 0 ;
            let upRight = grid[i -1 ]?.[e +1] ? 1 : 0 ;
            let left = grid[i]?.[e -1] ? 1 : 0 ;
            let right = grid[i]?.[e +1] ? 1 : 0 ;
            let down = grid[i +1]?.[e] ? 1 : 0 ;
            let downLeft = grid[i +1]?.[e - 1] ? 1 : 0 ;
            let downRight = grid[i +1]?.[e + 1] ? 1 : 0 ;
        
         
        return Math.abs(up + upLeft + upRight + left + right+ down + downLeft + downRight)
        })
            })
  }

  console.log(detectBombs([
    [true, false, false],
    [false, true, false],
    [false, false, false]
  ]))


  // [
  //   [1, 2, 1],
  //   [2, 1, 1],
  //   [1, 1, 1]
  // ]
  
  console.log(detectBombs([
    [true, false],
    [false, false]
  ]))


  // [
  //   [0, 1],
  //   [1, 1]
  // ]
  
  console.log(detectBombs([
    [true, true],
    [false, false],
    [true, true]
  ]))


  
  // [
  //   [1, 1],
  //   [4, 4],
  //   [1, 1]
  // ]