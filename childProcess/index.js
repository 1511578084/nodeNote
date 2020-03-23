const {spawn, fork} = require('child_process')

// const ls = spawn('ls', ['-lh', './'])

// ls.stdout.on('data', function(data) {
//     console.log(data.toString())
// })

// ls.on('close', (code) => {
//     console.log(`子进程退出，使用退出码 ${code}`);
//   });

fork('./child.js', {
    cwd: __dirname,
    env: {
        ab: 12
    },
    silent: false,
    // stdio: 'ignore'
}, (err, stdout, stderr) => {
    console.log(err, stdout, stderr)
})

console.log(process.argv)


// const assert = require('assert');
// const fs = require('fs');
// const child_process = require('child_process');

// const subprocess = child_process.spawn('ls', {
//   stdio: [
//     0, // 使用父进程的 stdin 用于子进程。
//     'pipe', // 把子进程的 stdout 通过管道传到父进程 。
//     fs.openSync('err.out', 'w') // 把子进程的 stderr 定向到一个文件。
//   ]
// });

// console.log(assert.strictEqual(subprocess.stdio[0], null)) // true
// console.log(assert.strictEqual(subprocess.stdio[0], subprocess.stdin)); // true

// console.log(assert(subprocess.stdout)); // true
// console.log(assert.strictEqual(subprocess.stdio[1], subprocess.stdout)); // true

// console.log(assert.strictEqual(subprocess.stdio[2], null)); // true
// console.log(assert.strictEqual(subprocess.stdio[2], subprocess.stderr)); // true