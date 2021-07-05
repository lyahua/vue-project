// path模块
// const path=require("path")
// console.log(path.join("路径一","路径二","路径三"))
// console.log(path.resolve("./canvas.html","index.html"))


// url模块
// 作用：把url解析成对象，url.parse("str",[]),后面可接两个参数，第一个表示解析查询字符串
// url.format() 把对象解析成字符串
// const url=require("url")
// console.log(url.parse("http://www.baidu.com/api?name=123&age=456"))
// console.log(url.parse("http://www.baidu.com/api?name=123&age=436",true))


//==========================================
// console.log(url.format({
//   protocol: 'http:',
//   slashes: true,
//   auth: null,
//   host: 'www.baidu.com',
//   port: null,
//   hostname: 'www.baidu.com',
//   hash: null,
//   search: '?name=123&age=456',
//   query: 'name=123&age=456',
//   pathname: '/api',
//   path: '/api?name=123&age=456',
//   href: 'http://www.baidu.com/api?name=123&age=456'
// }))

//==========================================
//querystring模块:对查询字符串执行更强大的解析
// querystring.stringify() 把对象变成查询字符串 自定义分隔符 自定义建和值中间的分隔符
// querystring.parse() 把查询字符串解析成对象
// querystring.escape() 对字符串进行url编码
//querystring.unescape() 对url进行解码

// const querystring=require("querystring")
// console.log(querystring.stringify({
//   name:"zhangsan",
//   age:[12,22,32]
// },"#",":")) //name:zhangsan#age:12#age:22#age:32

// console.log(querystring.parse("name=zhangsan,age=23",","))//{ name: 'zhangsan', age: '23' }
// console.log(querystring.parse('name=qf,course=html5,course=java,course=python',',')) //


//==============================
// fs模块 fs.stat fs.mkdir fs.write
// const fs=require("fs")
// fs.stat("./canvas.html",function(err,stats){
//   if(err){
//     console.log(err)
//   }
//   console.log(stats)
//   console.log(stats.isFile());// 是否是文件
//   console.log(stats.isDirectory());// 是否是文件夹
// })

// fs.mkdir("./los",function(err){
//   if(!err){
//     console.log("目录文件夹创建成功")
//   }
// })

// 写文件
// let filePath="./logs/index.html"
// let text="hello world2"
// 覆写
// fs.writeFile(filePath,text,function(err){
//   if(!err){
//     console.log("文件写入成功")
//   }
// })
// // 追加写入
// fs.appendFile(filePath,text,function(err){
//   if(!err){
//     console.log("写入成功")
//   }
// })

// 读文件
// const filePath="./canvas.html"
// fs.readFile(filePath,"utf-8",function(err,data){
//   if(!err){
//     console.log("data",data)
//   }
// })

// fs.readFile(filePath,function(err,data){
//   if(!err){
//     console.log(data.toString())
//   }
// })

// stream模块
// let filePath="./canvas.html"
// let outPath="./logs/index.html"
// //创建一个读取文件流
// let inp=fs.createReadStream(filePath)
// // 创建一个写入文件流
// let out=fs.createWriteStream(outPath)
// // 读取流的相关事件
// // 当文件有数据读取的时候，会触发data事件
// inp.once("data",function(data){
//   console.log(data.length)
// })
// inp.on("end",function(){
//   console.log("读取完成")
// })
// inp.on("err",function(){
//   console.log("读取出错")
// })
// //写入流的相关事件
// out.on("close",function(){
//   console.log("数据写入完成")
// })
// // 管道流，通过pipe写入
// inp.pipe(out)

console.log(__dirname)
console.log(__filename)

