function fixPackages(packages: string): string {
    // Code here
    return ''
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