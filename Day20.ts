function fixGiftList(received: string[], expected: string[]): { missing: Record<string, number>, extra: Record<string, number> } {
    let expectedCopy = [...expected]
    let receivedCopy = [...received]
    let missing:Record<string, number>= {}
    let extra:Record<string, number>= {}

   received.forEach((ele)=>{
        let otherIndex = expectedCopy.indexOf(ele)

        if (otherIndex !== -1){
            expectedCopy.splice(otherIndex, 1)
            return ele
        }
    })

    expected.forEach((ele)=>{
        let otherIndex = receivedCopy.indexOf(ele)

        if (otherIndex !== -1){
            receivedCopy.splice(otherIndex, 1)
            return ele
        }
    })

    expectedCopy.forEach((ele)=>{
if (!missing[ele]){
missing[ele] =1
} else if (missing[ele]){
    missing[ele] = missing[ele] +1
}
    })

    receivedCopy.forEach((ele)=>{
        if (!extra[ele]){
        extra[ele] =1
        } else if (extra[ele]){
            extra[ele] = extra[ele] +1
        }
            })
    return {
      missing,
      extra
    }
  }



  console.log(fixGiftList(
    ['puzzle', 'car', 'doll', 'car'], 
    ['car', 'puzzle', 'doll', 'ball']))
// Returns:
// {
//   missing: { ball: 1 },
//   extra: { car: 1 }
// }

console.log(fixGiftList(
  ['book', 'train', 'kite', 'train'],
  ['train', 'book', 'kite', 'ball', 'kite']
))
// Returns:
// {
//   missing: { ball: 1, kite: 1 },
//   extra: { train: 1 }
// }

console.log(fixGiftList(
  ['bear', 'bear', 'car'],
  ['bear', 'car', 'puzzle', 'bear', 'car', 'car']
))
// Returns:
// {
//   missing: { puzzle: 1, car: 2 },
//   extra: {}
// }

console.log(fixGiftList(
    ['bear', 'bear', 'car'], 
    ['car', 'bear', 'bear']))
// Returns:
// {
//   missing: {},
//   extra: {}
// }