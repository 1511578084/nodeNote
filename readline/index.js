// const readline = require('readline')
// const fs = require('fs')

// const rl = readline.createInterface(
//     {
//         input: process.stdin,
//         output: process.stdout
//     }
// )

// // rl.question('是男是女?\n', (answer) => {
// //     console.log(answer)
// //     rl.close()
// // })

// rl.on('line', (input) => {
//     if (input === 'close') {
//         rl.close()
//     }
//     console.log(input)
    
// })

// // setTimeout(() => {
// //     rl.write('1')
// //     rl.write(null, { ctrl: true, name: 'u' });
// // }, 1000)


// const fs = require('fs');
// const readline = require('readline');

// async function processLineByLine() {
//   const fileStream = fs.createReadStream('package-lock.json');

//   const rl = readline.createInterface({
//     input: fileStream,
//     crlfDelay: Infinity
//   });
//   // 注意：我们使用 crlfDelay 选项将 input.txt 中的所有 CR LF 实例（'\r\n'）识别为单个换行符。

//   for await (const line of rl) {
//     // input.txt 中的每一行在这里将会被连续地用作 `line`。
//     console.log(`Line from file: ${line}`);
//   }
// }

// processLineByLine();

const { once } = require('events');
const { createReadStream } = require('fs');
const { createInterface } = require('readline');

(async function processLineByLine() {
  try {
    const rl = createInterface({
      input: createReadStream('package-lock.json'),
      crlfDelay: Infinity
    });

    rl.on('line', (line) => {
      // 处理行。
      console.log(line)
    });

    await once(rl, 'close');

    console.log('文件已处理');
  } catch (err) {
    console.error(err);
  }
})();