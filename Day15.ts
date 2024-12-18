function drawTable(data: Array<Record<string, string | number>>): string {


    
    let jump:string ="\n"
    let plus = "+"
    let column = "|"
    let space = " "
    let guion = "-"
    let left: string[]= [];
    let right:string[] = [];
    let leftLength = 0
    let rightLength = 0

    const titles = Object.keys(data[0] || {});
    let arr:string[]=[]

    const columnWidths = titles.map(
        title => Math.max(title.length, ...data.map(row => String(row[title] || "").length))
    );

    console.log(columnWidths)

    let header = `${column}${space}${titles[0]}${space.repeat(columnWidths[0] - titles[0].length + 1)}${column}${space}${titles[1]}${space.repeat(columnWidths[1] - titles[1].length + 1)}${column}`

for (let i = 0; i< data.length; i++) {
    let profile = data[i];

    let title:string[] = Object.keys(profile)

    if (i === 0){
        left.push(title[0].charAt(0).toUpperCase() + title[0].slice(1))
        right.push(title[1].charAt(0).toUpperCase() + title[1].slice(1))
        leftLength = title[0].length > leftLength ? title[0].length : leftLength
        rightLength = title[1].length > rightLength ? title[0].length : rightLength
    }
    let leftValue = String(profile[title[0]])
    let rightValue = String(profile[title[1]])
    left.push(leftValue)
    right.push(rightValue)
    leftLength = leftValue.length > leftLength ? leftValue.length : leftLength
    rightLength = rightValue.length > rightLength ? rightValue.length : rightLength
}

let division:string= `${plus}${guion.repeat(columnWidths[0] +2)}${plus}${guion.repeat(columnWidths[1] +2)}`
left.forEach((ele, i)=>{
 

    if(i === 0){
arr.push(division)
arr.push(`${column}${space}${left[i]}${space.repeat(leftLength - left[i].length + 1)}${column}${space}${right[i]}${space.repeat(rightLength - right[i].length)}${column}`)
arr.push(division)
    } else{
        arr.push(`${column}${space}${left[i]}${space.repeat(leftLength - left[i].length + 1)}${column}${space}${right[i]}${space.repeat(rightLength - right[i].length + 1)}${column}`)   
    }
if(i === left.length -1){
    arr.push(division)
}
})

    // Code here
    return [
        division,
        header,
        division,
        division
    ].join(jump)
  }

console.log(  drawTable([
    { name: 'Alice', city: 'London' },
    { name: 'Bob', city: 'Paris' },
    { name: 'Charlie', city: 'New York' }
  ]))
  // +---------+-----------+
  // | Name    | City      |
  // +---------+-----------+
  // | Alice   | London    |
  // | Bob     | Paris     |
  // | Charlie | New York  |
  // +---------+-----------+
  
// console.log(  drawTable([
//     { gift: 'Doll', quantity: 10 },
//     { gift: 'Book', quantity: 5 },
//     { gift: 'Music CD', quantity: 1 }
//   ]))
  // +----------+----------+
  // | Gift     | Quantity |
  // +----------+----------+
  // | Doll     | 10       |
  // | Book     | 5        |
  // | Music CD | 1        |
  // +----------+----------+