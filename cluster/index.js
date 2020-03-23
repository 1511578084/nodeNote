const cluster = require('cluster')
const http = require('http')
const os = require('os')

const cpuNum = os.cpus().length
console.log(11111)
if (cluster.isMaster) {
    console.log(`主进程： ${process.pid}`)
    for(let i=0; i< cpuNum; i++) {
        cluster.fork()
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`工作进程：${worker.process.pid}退出`)
    })
    

    
} else {
    http.createServer((req, res) => {
        res.writeHead(200)
        res.end('服务您的是' + process.pid)
    }).listen(8000)
    console.log(`工作进程：${process.pid}启动`,cluster.isMaster)

}