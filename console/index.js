const fs = require('fs')
console.time('exec')

console.log('你好%s, %d', '世界', 1)

const myCon = new console.Console(fs.createWriteStream('./logout.txt'), process.stderr)

myCon.error('oj')

console.assert(false, new Error('会中断么')) // 不会像assert模块一样，终止程序
console.error(222)
console.log(111)
// console.clear()

const obj = {
    a: {
        b: {
            c: {
                d: 1
            }
        }
    }
}

Object.defineProperty(obj, 'name', {
    value: 10,
    enumerable: false
})

console.dir(obj, {depth: null, showHidden: true})

console.group('哈哈')

console.group( '嘻嘻')
console.groupEnd()

console.group( '嘻嘻')
console.groupEnd()
console.groupEnd()
console.group('哈哈')
console.groupEnd()
console.table([{name: '小芳', age: 19}, {name: '小明', age: 20}])

console.timeEnd('exec')


