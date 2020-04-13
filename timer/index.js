const a = setImmediate(() => {
    console.log(2)
})

a.unref()

const b = setTimeout(() => {
        console.log(1)
}, 300);

b.unref()

setTimeout(() => {
    console.log(3)
}, 20);
