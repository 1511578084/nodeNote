// const assert = require('assert');

// const ae = new assert.AssertionError({
//     actual: 3,
//     expected: 2,
//     operator: 'strictEqual'
// })

// const a = 1

// try {
//    assert.strictEqual(1, 2)
// }catch(e) {
//     console.log(e.message)
//     console.log(ae.message)
// }

// console.log(222)

const assert = require('assert').strict;

// assert.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, '3']], 4, 5]);
assert('', new Error('抛出错误对象，而不是AssertionError'))