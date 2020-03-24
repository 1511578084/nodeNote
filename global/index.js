process.nextTick(() => {

    console.log(1)
})


Promise.resolve(1).then(() => {
    console.log(2)
}).then(() => {
    console.log(5)
})


Promise.resolve(1).then(() => {
    console.log(3)
}).then(() => {
    console.log(6)
})

// 将前面的微任务进行排队，再调用callback
queueMicrotask(() => {
    console.log(4)
})

console.log(WebAssembly, TextEncoder)