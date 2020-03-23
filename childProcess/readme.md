# childProcess
1. 创建子进程
2. 当子进程的stdio三个值stdin,stdout, stderr设置为非pipe时都是null
3. 父进程可以传递server和socket给子进程
# 方法
+ cp.exec
+ cp.execFile
+ cp.fork 创建node子进程
+ cp.spawn