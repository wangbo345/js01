const fs = require('fs');
fs.readFile("./成绩.txt","utf-8",function (err,dataStr) {
    if (err) {
        console.log("文件读取失败");
        return;
    }
    const arrOld = dataStr.split(' ');
    const arrNew = [];
    arrOld.forEach(item=>{
        arrNew.push(item.replace('=',': '));
    })
    const newStr = arrNew.join('\r\n');
    fs.writeFile("./成绩-ok.txt", newStr, function (err) {
        if (err) {
            console.log("文件写入失败");
            return;
        }
        console.log("文件写入成功");
    });
});