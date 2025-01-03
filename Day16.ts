/**
 * @param {string} s
 * @returns {string}
 */
function removeSnow(s: string): string {
  
    let arr = s.split("");
    let withDouble = true;

    while (withDouble) {
        for (let index = 0; index < arr.length; index++) {
            let after = arr[index + 1] || ""
            const element = arr[index];
    
            if (after === element){
                arr.splice(index, 2)
                break;
            }
        }
        if (new Set(arr).size === arr.length){
           withDouble = false;
        }
    }
   
    return arr.join("");
  }

  console.log(removeSnow('zxxzoz')) // -> "oz"
// 1. Remove "xx", resulting in "zzoz"
// 2. Remove "zz", resulting in "oz"

console.log(removeSnow('abcdd')) // -> "abc"
// 1. Remove "dd", resulting in "abc"

console.log(removeSnow('zzz') )// -> "z"
// 1. Remove "zz", resulting in "z"

console.log(removeSnow('a')) // -> "a"
// No duplicate piles