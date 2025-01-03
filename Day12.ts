function calculatePrice(ornaments: string): number| undefined {
    // Code here

    let arrOrnaments:number[] = ornaments.split("").map((ornament, index)=>{
       if ( ornament === "*") return 1
       if ( ornament === "o") return 5
       if ( ornament === "^") return 10
       if ( ornament === "#") return 50
       if ( ornament === "@") return 100
       return NaN
      
    })
for (let index = 0; index < arrOrnaments.length; index++) {
    const element = arrOrnaments[index]

if (arrOrnaments[index] < arrOrnaments[index +1])
    arrOrnaments[index] = - arrOrnaments[index]

 

}
    return !arrOrnaments.some(ele => isNaN(ele)) ? arrOrnaments.reduce((a, b) => a + b, 0) : undefined ;
  }

console.log(calculatePrice('***'))  // 3   (1 + 1 + 1)
console.log(calculatePrice('*o') )  // 4   (5 - 1)
console.log(calculatePrice('o*') ) // 6   (5 + 1)
 console.log(calculatePrice('*o*') ) // 5  (-1 + 5 + 1) 
console.log(calculatePrice('**o*') )// 6  (1 - 1 + 5 + 1) 
console.log(calculatePrice('o***') )// 8   (5 + 3)
console.log(calculatePrice('*o@')  )// 94  (-5 - 1 + 100)
console.log(calculatePrice('*#')  ) // 49  (-1 + 50)
console.log(calculatePrice('@@@')  )// 300 (100 + 100 + 100)
console.log(calculatePrice('#@')   )// 50  (-50 + 100)
console.log(calculatePrice('#@Z') ) // undefined (Z is unknown)