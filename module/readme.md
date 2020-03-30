# module 模块
1. require.main === module, 代表该文件为主模块，及node启动文件
2. 引入非.js，.json，.node模块，返回 {}
3. 循环引用,会返回一个已加载模块的副本
4. require.cache , require.extensions
5. require.resolve返回文件的绝对路径，不加载模块
6. require.resolve.paths(module) 返回加载模块所查找的路径