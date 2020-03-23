const fs = require('fs')


try {
    fs.readFile('abc.txt', (err, result) => {
        if (err) throw err
     })
} catch(e) {
    console.log(e)
}



function callback () {
   setTimeout(() => {
    throw new Error('能捕获到么？')
   })
}

function fn (cb) {
    cb()
}


try {
   fn(callback)
}catch (e) {

}

console.log(111)

