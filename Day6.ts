function inBox(box: string[]): boolean {
    for (let i = 1; i < box.length - 1; i++) {
      const row = box[i];
      const giftIndex = row.indexOf("*");
  
      if (giftIndex > 0 && giftIndex < row.length - 1) {
        return true;
      }
    }
  
    return false;
  }


  console.log(inBox([
    "###",
    "#* #",
    "###"
  ]) )// ➞ true
  
console.log(  inBox([
    "####",
    "#* #",
    "#  #",
    "####"
  ])) // ➞ true
  
console.log(  inBox([
    "#####",
    "#   #",
    "#  #*",
    "#####"
  ])) // ➞ false
  
console.log(  inBox([
    "#####",
    "#   #",
    "#   #",
    "#   #",
    "#####"
  ])) // ➞ false