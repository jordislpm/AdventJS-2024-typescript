// type Inventory = Array<
//   { name: string, quantity: number, category: string }
// >

// function organizeInventory(inventory: Inventory): object {
//   // Code here

//   const miObjeto = new Object;

//   inventary.forEach((ele)=>{
// if(ele.category){
//     if(!miObjeto[ele.category]){
//         miObjeto[ele.category] = {}
//     }
   
//     if(!Object.hasOwn(miObjeto[ele.category], ele.name)){
//         miObjeto[ele.category] = {...miObjeto[ele.category], [ele.name]:ele.quantity}
//     } else if(Object.hasOwn(miObjeto[ele.category], ele.name)){
//         miObjeto[ele.category][ele.name] += ele.quantity
//         console.log(miObjeto[ele.category][ele.name])
//     }
// }
//   })


//   return miObjeto
// }

type Inventory = Array<
  {  name: string;
    quantity: number;
    category: string;}
>


type OrganizedInventory = Record<string, Record<string, number>>;
function organizeInventory(inventory: Inventory): OrganizedInventory {
  return inventory.reduce<OrganizedInventory>((acc, item) => {
    const { name, quantity, category } = item;

    if (!category) return acc;
    if (!acc[category]) {
      acc[category] = {};
    }
    acc[category][name] = (acc[category][name] || 0) + quantity;

    return acc;
  }, {});
}

const inventary = [
    { name: 'doll', quantity: 5, category: 'toys' },
    { name: 'car', quantity: 3, category: 'toys' },
    { name: 'ball', quantity: 2, category: 'sports' },
    { name: 'car', quantity: 2, category: 'toys' },
    { name: 'racket', quantity: 4, category: 'sports' }
  ]

  const inventary2 = [
    { name: 'book', quantity: 10, category: 'education' },
    { name: 'book', quantity: 5, category: 'education' },
    { name: 'paint', quantity: 3, category: 'art' }
  ]
  
  console.log(organizeInventory(inventary))
  //console.log(organizeInventory(inventary2))