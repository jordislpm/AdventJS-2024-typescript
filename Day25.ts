function execute(code: string): number {

    let plus = "+";
    let less = "-"
    let skip = ">"


    let result = 0;
    for (let index = 0; index < code.length; index++) {
        const element = code[index];

        switch (element) {
            case "+":
                result++
                break;
            case "-":
                result--
                break;
            case ">":
                break;
            case "[":
                let start = code.indexOf("[")
                let end = code.indexOf("]")
                index =  end
                result = 0
            case "{":
                break;
            default:
                break;
        }    
        console.log(element)
        console.log(index)

    }
    return result
}

console.log(execute('+++')); // 3
console.log(execute('+--')); // -1
console.log(execute('>+++[-]')); // 0
// console.log(execute('>>>+{++}')); // 3
// console.log(execute('+{[-]+}+')); // 2
// console.log(execute('{+}{+}{+}')); // 0
console.log(execute('------[+]++')); // 2
// console.log(execute('-[++{-}]+{++++}')); // 5