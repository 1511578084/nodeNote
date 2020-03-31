const path = require('path')
const assert = require('assert')

console.log(path.normalize(__filename), path.basename(__filename, '.js'))

console.log(process.env.path, path.posix)
console.log(assert.strictEqual(path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\test\\aaa'), ''))

console.log(process.cwd(),path.resolve('a.html'))

