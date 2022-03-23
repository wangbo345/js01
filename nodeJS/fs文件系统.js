const fs = require('fs');
fs.readFile("./1.txt","utf-8",function (err,dataStr) {
    if (err) {
        console.log("文件读取失败");
        return;
    }
    console.log(dataStr);
});
fs.writeFile("./2.txt", "你好王博!!!", function (err) {
    if (err) {
        console.log("文件写入失败");
        return;
    }
    console.log("文件写入成功");
});
