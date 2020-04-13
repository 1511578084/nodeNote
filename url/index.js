
console.log(new URL('http:Example.com/', 'https://example.org/'))
console.log(new URL('https:Example.com/?123#bar', 'https://example.org'))

const myURL = new URL('https://example.org:8888');
console.log(myURL.port);
// 打印 8888

// 默认端口将自动转换为空字符。
// (HTTPS 协议默认端口是 443)
myURL.port = 443;
console.log(myURL.port);