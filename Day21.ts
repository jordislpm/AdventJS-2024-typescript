function treeHeight(tree: { value: string; left: any; right: any } | null): number {

    return 0
  }


// Tree definition
const tree = {
    value: '🎁',
    left: {
      value: '🎄',
      left: {
        value: '⭐',
        left: null,
        right: null
      },
      right: {
        value: '🎅',
        left: null,
        right: null
      }
    },
    right: {
      value: '❄️',
      left: null,
      right: {
        value: '🦌',
        left: null,
        right: null
      }
    }
  }
  
  // Graphical representation of the tree:
  //        🎁
  //       /   \
  //     🎄     ❄️
  //    /  \      \
  //  ⭐   🎅      🦌
  
  // Function call
  console.log(treeHeight(tree))
  // Returns: 3