const a = require('./a')

console.log(require.main === module)
console.log(require('./readme.md'))
console.log(require.cache, Object.create(null), require.extensions)
console.log(require.resolve('./a'))
console.log(require.resolve.paths('./h'))

setTimeout(() => {
    console.log(a, a.b)
}, 200)
