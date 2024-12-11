type Shoe = {
    type: 'I' | 'R'
    size: number
}

function organizeShoes(shoes: Shoe[]): number[] {


    let newarr: Shoe[] = []
    let result: number[] = []
    shoes.forEach((ele) => {
        newarr.push(ele)
        
        let index = newarr.findIndex((item) => item.type !== ele.type && item.size === ele.size)
        if (index !== -1){
            result.push(newarr[index].size)
            newarr.splice(index,1)
            newarr.pop()

        }
     

        
        // if (newarr.findIndex((item) => item.type !== ele.type && item.size === ele.size)) {
        //     result.push(ele.size)
        //     newarr.pop()
        // }
    })
    return result
}


console.log(organizeShoes(
    [
        { type: 'I', size: 39 },
        { type: 'R', size: 39 },
        { type: 'R', size: 39 },
    ]
))
const shoes: Shoe[] = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
]

//console.log(organizeShoes(shoes))
// [38, 42]

const shoes2: Shoe[] = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'I', size: 38 },
    { type: 'I', size: 38 },
    { type: 'R', size: 38 }
]
//console.log(organizeShoes(shoes2))
// [38, 38]



const shoes3: Shoe[] = [
    { type: 'I', size: 38 },
    { type: 'R', size: 36 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 43 }
]

console.log(organizeShoes(shoes3))
// []