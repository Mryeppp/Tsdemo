>浏览器只认识html css js

### 企业级项目都可能有哪些功能

1. typescript: 如果需要ts文件则需要tsc将ts文件编译为js文件
2. React/Vue： 安装react-ocmpiler/vue-compiler，将jsx或者vue文件转换为rendor函数
3. less/sass/postcss/component-style: 又需要安装less-loader/sass-loader等一系列的变编译工具
4. 语法降级： bable ---> 将es新的语法降级为旧的浏览器可以接受的语法
5. 体积优化： uglifyjs ---> 将我们的代码进行压缩变成体积更小的性能更高的文件

稍微一修改就非常麻烦

将App.jsx ---> tsc ---> App.jsx ---> React-compolier ---> js文件

有一个东西能帮你把tsc，react-compolier，less，babel，uglifyjs全部集成到一起

我们只需要关心我们的代码即可，中间复杂的编译过程不再需要考虑

我们写的代码一变化，有人就会帮我们tsc，react-compolier，less，babel，uglifyjs全部挨个走一遍 ---> js

这个东西叫做 **构建工具**

>打包：将我们写的浏览器不认识的代码，交给构建工具进行编译处理的过程叫做打包，打包完成后会给我们一个浏览器可以认识的文件

### 一个构建工具到底承担了哪些脏活累活

1. 模块化开发支持: 直接从node_modules引入代码 + 多种模块化支持
2. 处理代码兼容性: 比如babel语法降级，less，ts语法转换(**不是构建工具做的，而是构建工具引入对应语法的处理工具集成进来自动化处理**)
3. 提高项目性能: 压缩文件，**代码分割**
4. 优化开发体验：
      - 构建工具会自动监听文件的变化，当文件变化以后自动帮你调用对应的集成工具进行重新打包，然后再浏览器重新运行(这个就是热更新 hot replacement )
      - 开发服务器：跨域的问题，用react-cli(create-react-element) / vue-cli
