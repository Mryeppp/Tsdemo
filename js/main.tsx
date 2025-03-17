console.log("a")
console.log("b")
console.log("c")
// 安装局部ts和ts-node 
// 运行 ./node_modules/.bin/ts-node ./js/main.ts
// tsc 同理 较麻烦
// 故而 配置package.json  
/* 在package.json中添加 如下内容
"scripts": {
  "build": "tsc",
  "build:w": "tsc -w"
}
*/
// 修改代码之后运行npm run build 或者 npm run build -w 即可