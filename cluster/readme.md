# cluster（集群）
1. 单个node实例运行在单线程上，为了充分利用多核系统，需要启动一组node进程去处理负载任务
2. cluster可以创建共享服务器端口的子进程
3. cluster.fork 返回worker引用

# 方法
+ cluster.fork