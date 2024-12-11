function createXmasTree(height: number, ornament: string): string {
    /* Code here */


    let long = Math.abs((height*2)-1)
    let under = "_"

    console.log(long)
    let arr: string[] = []

    for (let index = 0; index < height; index++) {
        if(index === 0){
            arr.unshift(`${under.repeat(height-1)}#${under.repeat(height-1)}`)
            arr.unshift(`${under.repeat(height-1)}#${under.repeat(height-1)}\n`)
        }
        arr.unshift(`${under.repeat(index)}${ornament.repeat(long)}${under.repeat(index)}\n`)
        long-=2
        console.log(long)
        
    }
    console.log(arr)

        return [...arr].join("")
  }



  const tree = createXmasTree(5, '*')
  console.log(tree)
// const tree2 = createXmasTree(3, '+')
// console.log(tree2)
//   const tree3 = createXmasTree(6, '@')
// console.log(tree3)