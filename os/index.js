const os = require('os')


console.log(process.arch, os.arch(), os.freemem()/1024/1024/1024)
console.log(os.homedir(), os.hostname(), os.networkInterfaces(), os.platform(), os.release())
console.log(os.tmpdir(), os.uptime()/60/60, os.userInfo())