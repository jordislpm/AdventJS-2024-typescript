function execute(code: string): number {
    let result = 0;
    const stack: number[] = [];
  
    let i = 0;
    while (i < code.length) {
      const char = code[i];
  
      switch (char) {
        case "+":
          result++;
          break;
        case "-":
          result--;
          break;
        case "[":
          if (result === 0) {
            let loop = 1;
            while (loop > 0) {
              i++;
              if (code[i] === "[") loop++;
              if (code[i] === "]") loop--;
            }
          } else {
            stack.push(i);
          }
          break;
        case "]":
          if (result !== 0) {
            i = stack[stack.length - 1] - 1;
          } else {
            stack.pop();
          }
          break;
        case "{":
          if (result === 0) {
            let condition = 1;
            while (condition > 0) {
              i++;
              if (code[i] === "{") condition++;
              if (code[i] === "}") condition--;
            }
          }
          break;
        default:
          break;
      }
  
      i++;
    }
  console.log(stack)
    return result;
  }

console.log(execute('+++')); // 3
console.log(execute('+--')); // -1
console.log(execute('>+++[-]')); // 0
 console.log(execute('>>>+{++}')); // 3
 console.log(execute('+{[-]+}+')); // 2
console.log(execute('{+}{+}{+}')); // 0
console.log(execute('------[+]++')); // 2
console.log(execute('-[++{-}]+{++++}')); // 5