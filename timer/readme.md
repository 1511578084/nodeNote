# timer 定时器
1. setImmediate(callback, [...args])
2. setTimeout(callback, delay, [...args])
3. setinterval(callback, delay, [...args])
4. immediate.unref()还会执行回调函数
5. timeout.unref()不会执行回调