const dgram = require('dgram')

const socket = dgram.createSocket('udp4')

socket.on('message', (msg, rinfo) => {
    console.log(msg, rinfo.address, rinfo.port)
})


socket.bind(6000)