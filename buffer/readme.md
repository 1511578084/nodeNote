# Buffer
1. 直接使用全局Buffer类，但也可以require('buffer').Buffer
2. 常量 Buffer.poolSize表示预先开辟的缓冲池大小，如果allocUnsafe的大小小于一半，则在缓冲池开辟
3. require('buffer').constans.MAX_LENGTH表示最多少的buffer实例的大小，32位系统1GB，64位系统2GB
4. require('buffer').constans.MAX_STRING_LENGTH表示string 原始数据类型能有的最大 length，以 UTF-16 代码为单位。该值取决于使用的 JS 引擎。
# 使用
+ Buffer.alloc()
+ Buffer.from()
+ Buffer.allocUnsafe
+ bf.slice()
+ bf.fill()

