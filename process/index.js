
const fs = require('fs')

process.chdir(__dirname) // 改变当前node进程的工作目录


console.log(fs.readFileSync('./readme.md'))

console.log(process.ppid, process.pid)
