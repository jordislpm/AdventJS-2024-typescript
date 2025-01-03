// The elf programmers are creating a small magical assembler to control the machines in Santa Claus's workshop.

// To assist them, we will implement a simple interpreter that supports the following magical instructions:

// MOV x y: Copies the value x (which can be a number or the content of a register) into register y
// INC x: Increments the content of register x by 1
// DEC x: Decrements the content of register x by 1
// JMP x y: If the value in register x is 0, then jumps to the instruction at index y and continues executing the program from there.
// Expected behavior:
// If an attempt is made to access, increment, or decrement a register that has not been initialized, the default value 0 will be used.
// The jump with JMP is absolute and goes to the exact index indicated by y.
// Upon completion, the program should return the content of register A. If A did not have a defined value, it returns undefined.


function compile(instructions: string[]): number {
    type Register = Record<string, number>;
    type CommandFunction = () => void;
    interface Commands {
        MOV: (index: string, register: string) => void;
        INC: (register: string) => void;
        DEC: (index: string, register: string) => void;
    }

    const registers: Register = {};

    const commands: Commands = {
        MOV: (value: string, register: string) => {
            const numValue = Number(value);
          
            if (!isNaN(numValue)) {
                registers[register] = numValue;
                
            } else {
                registers[register] = registers[value];
               
            }
        },

        INC: (register: string) => {
            if (registers[register] !== undefined) {
                registers[register] += 1;
            } else {
                registers[register] = (registers[register] || 0) + 1;
            }
        },
        DEC: (register: string) => {

            if (registers[register] !== undefined) {
                registers[register] -= 1;
            } else {
                registers[register] = (registers[register] || 0) - 1;
            }
           
        },
    };

    let i = 0;
    const maxIterations = instructions.length * 10;
    let iterationCount = 0;

    while (i < instructions.length && iterationCount < maxIterations) {
        const element = instructions[i].split(" ");

        if (element[0] === "JMP") {
            if ((registers[element[1]] || 0) === 0) {
                let newIndex = Number(element[2]) ;
                if (newIndex >= 0 && newIndex < instructions.length) {
                    i = newIndex;
                } else {
                    break;
                }
            } else {
                i++;
            }
        } else {
            commands[element[0]](element[1], element[2] || '');
            i++;
        }

        iterationCount++;
        if (iterationCount >= maxIterations) {
            break;
        }
    }

    return registers.A;
}


  const instructions = [
    'MOV -1 C', // copies -1 to register 'C',
    'INC C', // increments the value of register 'C'
    'JMP C 1', // jumps to the instruction at index 1 if 'C' is 0
    'MOV C A', // copies register 'C' to register 'A',
    'INC A' // increments the value of register 'A'
  ]
  
  console.log(compile(instructions)) // -> 2

console.log(compile(["MOV 5 B", "DEC B", "MOV B A", "INC A"])) // 5

  console.log(compile(["INC A", "INC A", "DEC A", "MOV A B"])) // 1

console.log(compile(["MOV 0 A",  "INC A"])) // 1
  
    console.log(compile(["MOV 2 X", "DEC X", "DEC X", "JMP X 1", "MOV X A"])) // -2

  /**
   Step-by-step execution:
   0: MOV -1 C -> The register C receives the value -1
   1: INC C    -> The register C becomes 0
   2: JMP C 1  -> C is 0, jumps to the instruction at index 1
   1: INC C    -> The register C becomes 1
   2: JMP C 1  -> C is 1, the instruction is ignored
   3: MOV C A  -> Copies register C to A. Now A is 1
   4: INC A    -> The register A becomes 2
   */