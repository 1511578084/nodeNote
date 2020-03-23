# 控制台
1. console.dir(obj, {depth: null, showHidden: true})， 默认打印两层， null位无限层， 默认不打印不可枚举的属性，showHidden为true则打印
2. console.table(tabularData) 表格样式打印数据
3. console.time([label]) 和 console.timeEnd([label]) label默认为default
4. new console.Console(writeStream, writeStream)