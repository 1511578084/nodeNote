# 断言
1. assert.AssertionError 集成自errors.Error类，代表断言失败
2. 严格模式：`const assert = require('assert').strict`
3. 最好使用严格模式，不要使用遗留模式
4. 断言失败，将抛出异常，如果传入错误对象，抛出的是从错误对象，而不是AssertionError对象
# 方法
+ assert(value, messge)
+ assert.deepEqual(actual, expected[, meesage])
+ assert.notDeepEqual(actual, expected[, message])
+ assert.match(string, regexp[, message])
+ assert.deepStrictEqual(actual, expected[, meesage])
+ assert.notDeepStrictEqual(actual, expected[, message])
+ assert.doseNotMatch(string, regexp[, message])
+ assert.equal(actual, expected[, message])
+ assert.notEqual(actual, expected[, message])
+ assert.fail([message])