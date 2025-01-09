function generateGiftSets(gifts: string[]): string[][] {


    const result: string[][] = [];

  function combine(index: number = 0, currentCombination: string[] = []): void {
    if (currentCombination.length >0){
        result.push([...currentCombination])
    }
    for (let i = index; i < gifts.length; i++) {
        currentCombination.push(gifts[i])
        combine( i +1, currentCombination)
        currentCombination.pop()
  
    } 
  }

  combine();
  return result.sort((a,b)=> a.length - b.length);
  }


 console.log(generateGiftSets(['car', 'doll', 'puzzle']))
// [
//   ['car'],
//   ['doll'],
//   ['puzzle'],
//   ['car', 'doll'],
//   ['car', 'puzzle'],
//   ['doll', 'puzzle'],
//   ['car', 'doll', 'puzzle']
// ]
//console.log(generateGiftSets(['ball']))
// [
//   ['ball']
// ]

//console.log(generateGiftSets(['game', 'pc']))
// [
//   ['game'],
//   ['pc'],
//   ['game', 'pc']
// ]