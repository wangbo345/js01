const http = require("http");
//创建服务器
const server = http.createServer();
server.on('request', (req, res) => {
    const str = `有请求访问我们的服务器了,请求地址是${req.url},请求方法是${req.method}`;
    console.log(str);
});
server.listen(80, () => {
    console.log("在http://127.0.0.1运行")
});
