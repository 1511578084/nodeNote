# path 路径
1. path.relative(form, to) 如果to和from不在一个盘符，则返回to
2. path.resolve([...paths]) 从右向左解析到绝对路径停止， 如果没有绝对路径，则拼接上当前工作目录
3. path.extname(path) 如果path中没有'.'或者除了第一个字符以外没有'.'，则返回空字符串
4. path.win32提供特定于windows的path实现方法，path.poxis实现特定于POXIS系统的path方法实现