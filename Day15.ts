function drawTable(data: Array<Record<string, string | number>>): string {
    let jump = "\n";
    let plus = "+";
    let column = "|";
    let space = " ";
    let guion = "-";

    if (!data.length) return "";

    const titles = Object.keys(data[0] || {});
    const columnWidths = titles.map(
        title => Math.max(title.length, ...data.map(row => String(row[title] || "").length))
    );

    const drawDivider = (): string =>
        `${plus}${columnWidths.map(width => guion.repeat(width + 2)).join(plus)}${plus}`;

    const drawHeader = (): string =>
        `${column}${titles.map((title, i) => 
            `${space}${title.charAt(0).toUpperCase() + title.slice(1)}${space.repeat(columnWidths[i] - title.length + 1)}`
        ).join(column)}${column}`;

    const drawRow = (row: Record<string, string | number>): string =>
        `${column}${titles.map((title, i) => 
            `${space}${String(row[title])}${space.repeat(columnWidths[i] - String(row[title]).length + 1)}`
        ).join(column)}${column}`;

    const rows = data.map(drawRow);

    return [
        drawDivider(),
        drawHeader(),
        drawDivider(),
        ...rows,
        drawDivider()
    ].join(jump);
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