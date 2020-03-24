# events 事件触发器
1. 在触发绑定的事件时，如果移除一个处理函数，则在下次触发时才生效
2. once绑定的处理函数，再触发之后自动解绑
3. 通过emitter.rawListeners(eventName)获取once绑定的处理函，返回的处理函数数据被包裹了一层，其中.listener才是真正的处理函数
4. events.once(emitter, eventName) 返回Promise<args[]>, 在emitter.emit(eventName, args)之后resolved, 在emitter.emit('error', error) 之后rejected
5. event.on(emitter, eventName) 返回asynciterator<args[][]>，可以用for of 迭代，在emitter.emit(eventName, args)