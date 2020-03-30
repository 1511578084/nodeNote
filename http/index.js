const http = require('http');
// const net = require('net');
// const { URL } = require('url');

// // 创建 HTTP 隧道代理。
// const proxy = http.createServer((req, res) => {
// const ip = res.socket.remoteAddress;
// const port = res.socket.remotePort;
// res.setHeader('content-type', 'text/html;charset=utf8')
// res.statusCode = 404
// res.end(`您的 IP 地址是 ${ip}，您的源端口是 ${port}`);
// });

// proxy.on('connect', (req, cltSocket, head) => {
//     console.log(222, req.url)
// //   连接到原始服务器。
//   const { port, hostname } = new URL(`http://${req.url}`);
//   const srvSocket = net.connect(port || 80, hostname, () => {
//     console.log(222)
//     cltSocket.write('HTTP/1.1 200 Connection Established\r\n' +
//                     'Proxy-agent: Node.js-Proxy\r\n' +
//                     '\r\n');
//     srvSocket.write(head);
//     srvSocket.pipe(cltSocket);
//     cltSocket.pipe(srvSocket);
//   });
// });

// // 代理正在运行。
// proxy.listen(1337, '127.0.0.1', () => {
//     console.log(111)
//   // 向隧道代理发出请求。
//   const options = {
//     port: 1337,
//     host: '127.0.0.1',
//     method: 'CONNECT',
//     path: 'nodejs.cn:80'
//   };

//   const req = http.request(options);
//   req.end();

//   req.on('connect', (res, socket, head) => {
//       console.log(333)
//     console.log('已连接');

//     // 通过 HTTP 隧道发出请求。
//     socket.write('GET / HTTP/1.1\r\n' +
//                  'Host: nodejs.cn:80\r\n' +
//                  'Connection: close\r\n' +
//                  '\r\n');
//     socket.on('data', (chunk) => {
//         console.log(555)
//       console.log(chunk.toString());
//     });
//     socket.on('end', () => {
//         console.log(666)

//     //   proxy.close();
//     });
//   });
// });

// console.log(http.STATUS_CODES)

const postData = JSON.stringify({
    'msg': '你好世界'
  })
  
  const options = {
    hostname: 'nodejs.cn',
    port: 80,
    path: '/upload',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(postData)
    }
  };
  
  const req = http.request(options, (res) => {
    console.log(`状态码: ${res.statusCode}`);
    console.log(`响应头: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      console.log(`响应主体: ${chunk}`);
    });
    res.on('end', () => {
      console.log('响应中已无数据');
    });
  });
  
  req.on('error', (e) => {
    console.error(`请求遇到问题: ${e.message}`);
  });
  
  // 将数据写入请求主体。
  req.write(postData);
  req.end();