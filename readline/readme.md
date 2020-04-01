# readline 逐行读取
1. const rl = readline.createInterface({input: 输入流(process.stdin， fs.createReadStream), output: 输出流(process.stdout， fs.createWriteStream)})
2. rl.question(string, (answer) => {})
3. rl.on('line', (line) => {})
4. rl实现了Symbol.asyncIterator 可以用 for await (const l of rl)