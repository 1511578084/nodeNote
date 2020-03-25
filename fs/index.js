const fs = require('fs')
const os = require('os')
// async function print(dirname){
//     const arr = await fs.promises.opendir(dirname)

//     for await (const dir of arr) {
//         console.log(dir)
//     }

// }


// print('/').catch(console.error)

// fs.watch('./readme.md', {encoding: 'buffer'}, (eventType, filename) => {
//     console.log(eventType, Buffer.isBuffer(filename))
// })

// fs.open('./readme.md', 'wx', (err, fd) => {
//     console.log(err)
//     if (err) {
//       if (err.code === 'EEXIST') {
//         console.error('myfile 已存在');
//         return;
//       }
  
//       throw err;
//     }
  
//   });

//   fs.link('./readme.md', './rd.md', () => {})

// fs.read(fs.openSync('./readme.md', 'a+'), Buffer.alloc(10), 1, 6, null, (a, b, c) => {
//     console.log(a, b, c)
// })


// fs.readdir('/', {withFileTypes: true},(err, files) => {
//     files.forEach((item) => {
//         console.log(item.isDirectory())
//     })
// })


// console.log(os.tmpdir())

// fs.mkdtemp('./目录-', (err, floder) => {
//     console.log(floder)
// })


// fs.readlink('c:/Program Files/nodejs/node', (err, link)=> {
//     console.log(err, link)
// })


console.log(fs.realpathSync('./rd.md'))


