function findMissingNumbers(nums: number[]): number[] {
    let result:number[] = []
    for (let index = 1; index < nums.sort((a, b) => a - b)[nums.length - 1]; index++) {
        if (!nums.includes(index)){
            result.push(index)
        }
    }
    return result
  };

 console.log(findMissingNumbers([1, 2, 4, 6]))
// [3, 5]

console.log(findMissingNumbers([4, 8, 7, 2]))
// [1, 3, 5, 6]
console.log(findMissingNumbers([3, 2, 1, 1]))
// []

console.log(findMissingNumbers([5, 5, 5, 3, 3, 2, 1]))
// [4]