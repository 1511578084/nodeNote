# debugger 调试
1. 启动node添加 --inspect=port
2. 不是服务器脚本，可能没来得及调试，进程就结束了，可以添加--inspect-brk在脚本第一行就加上断点
3. 调试可以使用chrome调试工具。 打开调试工具，有一个绿色的node图标，点击调试， 使用chrome-dev-tool协议