function createFrame(names: string[]): string {
    // Code here
     const maxName = Math.max(...names.map(name => name.length));
      const border = "*".repeat(maxName + 4);
      const newNames = names.map(
          name => `* ${name}${" ".repeat(maxName - name.length)} *`
        );
  
        return [border, ...newNames, border].join("\n");
  }

  console.log(createFrame(["a","bb", "ccc"]))
console.log(createFrame(["a","bb", "ccc", "dddd"]))
console.log(createFrame(["midu","madeval ", "educalvolpz", "midu"]))