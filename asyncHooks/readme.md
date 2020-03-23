# async_hooks(异步钩子)
1. `const async_hooks = require('async_hooks')`
2. `console.log` 会触发hooks
# 方法
+ async_hooks.createHook({init, before, after, destory})
+ asyncHooksInstance.enable()
+ asyncHooksInstance.disable()
+ async_hooks.executionAsyncId() `number 0: 代表c++底层调用`
+ asyync_hooks,triggerAsyncId()