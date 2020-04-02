const fs = require('fs')

const wd = fs.createWriteStream('./stream.txt')

wd.write('1')
wd.cork()
wd.write('2')
wd.cork()
wd.write('3')

console.log(wd.writableCorked)

setTimeout(() => {
    wd.uncork()
    setTimeout(() => {
        // 先输入1,10s之后输入23
        wd.uncork()

    }, 5000)
}, 5000)