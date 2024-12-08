function fixPackages(packages: string): string {
  // Code here


  let arr = packages.split("")
  while (arr.join("").includes("(")) {
    let open: number = -1;
    let close: number = -1;
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      if (element === "(") {
        open = index
      }
  
      if (element === ")") {
        close = index
        break;
      }
    }

  let newArr = [...arr].slice(open, close +1).reverse()
  let newArrLenght = newArr.length
  newArr.shift()
  newArr.pop()
   arr.splice(open, newArrLenght, ...newArr)
  }

 
  return arr.join("")
}

console.log(fixPackages('a(cb)de'))
// ➞ "abcde"
// We reverse "cb" inside the parentheses
console.log(fixPackages('a(bc(def)g)h'))
// ➞ "agdefcbh"
// 1st we reverse "def" → "fed", then we reverse "bcfedg" → "gdefcb"
console.log(fixPackages('abc(def(gh)i)jk'))
// ➞ "abcighfedjk"
// 1st we reverse "gh" → "hg", then "defhgi" → "ighfed"

console.log(fixPackages('a(b(c))e'))
// ➞ "acbe"
// 1st we reverse "c" → "c", then "bc" → "cb"