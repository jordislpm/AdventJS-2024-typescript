function distributeWeight(weight: number): string {
    const boxRepresentations: Record<number, string[]> = {
        1: [" _ ", "|_|"],
        2: [" ___ ", "|___|"],
        5: [" _____ ", "|     |", "|_____|"],
        10: [" _________ ", "|         |", "|_________|"]
    };
    let arr: string[] = []
    const addLevel = (n:number)=>{
            if(arr.length === 0){
                arr.unshift(...boxRepresentations[n])
            } else{
                let newpart = [...boxRepresentations[n]];
                let lastPart = newpart.pop()
                arr[0]= lastPart + arr[0].slice(lastPart?.length).trimEnd()
                arr.unshift(...newpart)
            }
    }
    while (weight > 0) {
        switch (true) {
            case weight >= 10:
                addLevel(10)
                weight -= 10
                break;
            case weight >= 5:
                addLevel(5)
                weight -= 5
                break;
            case weight >= 2:
                addLevel(2)
                weight -= 2
                break;
            case weight >= 1:
                addLevel(1)
                weight -= 1
                break;
            default:
                break;
        }
    }
    return arr.join("\n");
}


console.log(distributeWeight(1))
// Returns:
//  _
// |_|

console.log(distributeWeight(2))
// Returns:
//  ___
// |___|

console.log(distributeWeight(3))
// Returns:
//  _
// |_|_
// |___|

console.log(distributeWeight(4))
// Returns:
//  ___
// |___|
// |___|

console.log(distributeWeight(5))
// Returns:
//  _____
// |     |
// |_____|

console.log(distributeWeight(6))
// Returns:
//  _
// |_|___
// |     |
// |_____|
