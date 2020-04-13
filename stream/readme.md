# stream 流
1. 流分为可写流（客户端的请求对象， 服务端的响应对象, process.stdout, process.stderr，子进程的stdin
zlib流， crypto流， TCP socket， fs可写流）和可读流
2. stream.writable.cork 会阻止缓冲区数据输入到目的地，直到调用同等数量的uncrok
3. 当可写流write返回false时，应该停止向可写流继续写入数据，应该等可写流的drain事件触发之后，再继续写入
4. 可读流运作模式分两种，一种流动模式，一种暂停模式
5. 可读流默认都为暂停模式（未被暂停），直到添加'data'监听器，调用resume(), pipe() 可自动切换到流动模式
6. 如果可读流处于暂停状态，添加data事件不会切换为流动模式
7. readable事件和data事件同时添加，会触发readable事件，read()时才会触发data事件