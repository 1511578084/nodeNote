
// const buf5 = Buffer.from('tést', 'ascii');
// console.log(buf5)
// const buf6 = Buffer.from('tést', 'latin1');
// console.log(buf6)
// const buf7 = Buffer.alloc(2);
// console.log(buf7)
// const buf8 = Buffer.from('e', 'ascii');
// console.log(buf8, Buffer.poolSize)

// const arr = new Uint16Array(2);
// arr[0] = 65535;

// // 拷贝 `arr` 的内容。
// const buf1 = Buffer.from(arr);
// // 与 `arr` 共享内存。
// const buf2 = Buffer.from(arr.buffer);

// console.log(buf1, arr[0])
// console.log(buf2,  Buffer)


// const int8 = new Int8Array(1)
// int8[0] = 127

// console.log(Buffer.from(int8))

// const buf = Buffer.from({
//     valueOf() {
//         return '222'
//     },
//     [Symbol.toPrimitive]() {
//         return '111'
//     }
// }, 'utf8');

// console.log(buf)

// const buf2 = Buffer.from('z', 'hex');

// console.log(buf2.length)

const buffer = require('buffer')

console.log(buffer.INSPECT_MAX_BYTES,buffer.kMaxLength, buffer.transcode, buffer.constants.MAX_LENGTH, buffer.constants.MAX_STRING_LENGTH)
