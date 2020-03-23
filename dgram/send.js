const dgram = require('dgram')

const socket = dgram.createSocket('udp4');

socket.connect(6000, () => {
    socket.send(Buffer.from('123'))
})


// socket.unref()

// socket.ref()