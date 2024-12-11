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


function compile (instructions: string[]): number {

    type Register = Record<string, number>;
    type CommandFunction = () => void;
    interface Commands {
        MOV: (index: string, register: string) => void;
        INC: (register: string) => void;
        DEC: (index: string, register: string) => void;
    }
    
    const registers: Register = {
    };
    
    const commands: Commands = {
        MOV: (value: string, register: string) => {
            const numValue = Number(value); 
            console.log(value, register)
            if (!isNaN(numValue)) {
                registers[register] = numValue;
                console.log(registers)
                console.log(value, register)
            } else {
                registers[register] = registers[value];
                console.log(registers[value])
                console.log(value, register)
            }
         
        },
     
        INC: (register: string) => {
            console.log(registers[register])
            if (registers[register] !== undefined){
                registers[register] = registers[register] +=1
            } else {
                registers[register] = 0
            }
        },
        DEC: (register: string) => {
            console.log(registers[register])
            
            if (registers[register] !== undefined){
                registers[register] = registers[register] -=1
            } else {
                registers[register] = 0
            }
        },
    };

    for (let i = 0; i < instructions.length; i++) {
        const element = instructions[i].split(" ");

        console.log(registers, i)
        
        if (element[0] === "JMP") {
            if (registers[element[1]] === 0) {
                let newIndex = Number(element[2]) - 1;
        
                //i = newIndex - 1; 
            }
        } else {
            console.log(element[0]);
            commands[element[0]](element[1], element[2] ? element[2] : "");
        }
        console.log(registers)
    }


    // Code here
    console.log()
    return registers.A
  }

  const instructions = [
    'MOV -1 C', // copies -1 to register 'C',
    'INC C', // increments the value of register 'C'
    'JMP C 1', // jumps to the instruction at index 1 if 'C' is 0
    'MOV C A', // copies register 'C' to register 'A',
    'INC A' // increments the value of register 'A'
  ]
  
  //console.log(compile(instructions)) // -> 2

  console.log(compile(["MOV 5 B", "DEC B", "MOV B A", "INC A"]))

  //console.log(compile(["MOV 0 A",  "INC A"]))
  
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