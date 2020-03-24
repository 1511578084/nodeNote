const EventEmitter = require('events')

// const myEmitter = new EventEmitter()

// function callbackA() {
//   // 移除在下一次生效
//   this.removeListener('event', callbackB)
//   console.log('A')
// }

// function callbackB() {
//   console.log('B')
// }

// myEmitter.on('event', callbackA)
// myEmitter.on('event', callbackB)



// myEmitter.emit('event') // A, B

// myEmitter.emit('event') // A

// console.log(myEmitter.rawListeners('event')[0] === callbackA)


// const ee = new EventEmitter();

// function pong() {
//   console.log('pong');
// }

// ee.on('ping', pong);
// ee.once('ping', pong); // 这里用once，打印两次pong， 用on打印三次pong
// // ee.on('ping', pong);
// ee.emit('ping');
// ee.removeListener('ping', pong); // 多次添加一个处理函数， 删除最近一次添加的， 因为once会自动删除，所以之前使用once这个删除的就是on注册的函数
// ee.emit('ping');


// const emitter = new EventEmitter();

// function log () {
//   console.log('只记录一次')
// }

// emitter.once('log', log);

// // 返回一个数组，包含了一个封装了 `listener` 方法的监听器。
// const listeners = emitter.rawListeners('log');
// const logFnWrapper = listeners[0];

// // 打印 “只记录一次”，但不会解绑 `once` 事件。
// console.log(logFnWrapper.listener === log);

// // 打印 “只记录一次”，且移除监听器。
// logFnWrapper();

// emitter.on('log', () => console.log('持续地记录'));
// // 返回一个数组，只包含 `.on()` 绑定的监听器。
// const newListeners = emitter.rawListeners('log');

// // 打印两次 “持续地记录”。
// newListeners[0]();
// emitter.emit('log');


const ee = new EventEmitter()

async function run() {

  process.nextTick(() => {
    ee.emit('call', 43)
    ee.emit('call', 44)

  })

  const [num] = await EventEmitter.once(ee, 'call')

  console.log(num)


  process.nextTick(() => {
    ee.emit('error', new Error('错误了'))
  })

  try {
    await EventEmitter.once(ee, 'call')
  } catch(e) {
    console.log(e.message)
  }

}


run()


// const ee = new EventEmitter();

// (async () => {

//   process.nextTick(() => {
//     ee.emit('call', 43)
//     ee.emit('call', 44)
//   })


//   for await(const v of EventEmitter.on(ee, 'call')) {

//       console.log(v)
//   }

// })()
