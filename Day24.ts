function isTreesSynchronized(
    tree1: { value: string; left?: any; right?: any } | undefined,
    tree2: { value: string; left?: any; right?: any } | undefined
  ): [boolean, string] {

    if (tree1?.value === null || tree1?.value === undefined && tree2?.value === null || tree2?.value === undefined) {
        return [false , '']
      }  else{

    const checkSynchronized = ( 
        tree1: { value: string; left?: any; right?: any } | undefined,
        tree2: { value: string; left?: any; right?: any } | undefined
      
    )=>{
        const value1:string = tree1?.value || "null";
        const value2:string = tree2?.value || "null";
        
        if (tree1 === null  || tree2 === null) {
            return 
          }
        if (value1 !==  value2){
            return false
        } else {

       let right = checkSynchronized(tree1?.left || null, tree2?.right || null);
       let left =  checkSynchronized(tree1?.right || null, tree2?.left|| null);
       if (right === false || left === false){
        return false
       }
        }
        return true
        
    }

        
let resultBoolean: boolean = checkSynchronized(tree1, tree2) || false;
      let resultString = tree1?.value ? tree1.value : ""  
      
       
    return [resultBoolean, resultString]

}
  }


    

  
  
  const tree1 = {
    value: '🎄',
    left: { value: '⭐' },
    right: { value: '🎅' }
  }
  
  const tree2 = {
    value: '🎄',
    left: { value: '🎅' },
    right: { value: '⭐' },
  }
  
console.log(isTreesSynchronized(tree1, tree2)) // [true, '🎄']
  
  /*
    tree1          tree2
     🎄              🎄
    / \             / \
  ⭐   🎅         🎅   ⭐
  */
  
  const tree3 = {
    value: '🎄',
    left: { value: '🎅' },
    right: { value: '🎁' }
  }
  
 console.log(isTreesSynchronized(tree1, tree3))// [false, '🎄']
  
  const tree4 = {
    value: '🎄',
    left: { value: '⭐' },
    right: { value: '🎅' }
  }
  
console.log(isTreesSynchronized(tree1, tree4)) // [false, '🎄']
  
  console.log(isTreesSynchronized(
    { value: '🎅' },
    { value: '🧑‍🎄' }
  )) // [false, '🎅']