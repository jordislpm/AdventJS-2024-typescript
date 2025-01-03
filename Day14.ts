function minMovesToStables(reindeer: number[], stables: number[]): number {

    const options: [number, number][][] = [];

    let result:number = 10000000000;

    const permute = (array: number[], current: number[] = []): void => {
        if (array.length === 0) {
            options.push(reindeer.map((item, index) => [item, current[index]]));
            return;
        }
        for (let i = 0; i < array.length; i++) {
            const next = array[i];
            const remaining = array.slice(0, i).concat(array.slice(i + 1));
            permute(remaining, current.concat(next));
        }
  
    };

    permute(stables);

 
        for (let index = 0; index < options.length; index++) {
            const element = options[index];
            let minimun = 0
            element.forEach((e)=>{
                minimun += Math.abs(e[0] - e[1])

            })
if (index == 0){
    result = minimun
} else {
    result = minimun < result ? minimun : result;
}
        }
   


    return result
  }
  

console.log(  minMovesToStables([2, 6, 9], [3, 8, 5]) )// -> 3
// Explanation:
// Reindeer at positions: 2, 6, 9
// Stables at positions: 3, 8, 5
// 1st reindeer: moves from position 2 to the stable at position 3 (1 move).
// 2nd reindeer: moves from position 6 to the stable at position 5 (1 move)
// 3rd reindeer: moves from position 9 to the stable at position 8 (1 move).
// Total moves: 1 + 1 + 1 = 3 moves

//console.log(minMovesToStables([1, 1, 3], [1, 8, 4]))
// Explanation:
// Reindeer at positions: 1, 1, 3
// Stables at positions: 1, 8, 4
// 1st reindeer: does not move (0 moves)
// 2nd reindeer: moves from position 1 to the stable at position 4 (3 moves)
// 3rd reindeer: moves from position 3 to the stable at position 8 (5 moves)
// Total moves: 0 + 3 + 5 = 8 moves