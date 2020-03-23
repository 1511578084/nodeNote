let a = 10


console.log(a)

debugger;

a = 20

console.log(a)


setTimeout(() => {
    debugger;
    console.log(a)
}, 1000);

a = 30