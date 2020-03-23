const async_hooks = require('async_hooks')
const fs = require('fs')
const util = require('util')

function debuger(...args) {
    fs.writeFileSync('./log.txt', `${util.format(args)}\n`, {flag: 'a'})
}

async_hooks.createHook({
    init (asyncId, type, triggerAsyncId, resource) {
        debuger('init',asyncId, type, triggerAsyncId, resource)
        
    },
    before(asyncId) {
        debuger('before',asyncId)
    },
    after(asyncId) {
        debuger('after', asyncId)
    },
    destroy(asyncId) {
        debuger('destory', asyncId)
    },
}).enable()

