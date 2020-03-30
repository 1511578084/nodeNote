
console.log(require.main, module)
module.exports = {
    a: 1
}


setTimeout(() => {
    module.exports = {b: 10}
}, 100)