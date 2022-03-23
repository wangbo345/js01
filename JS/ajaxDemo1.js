
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
let xmlHttpRequest = new XMLHttpRequest();
xmlHttpRequest.open("GET", "https://localhost:8888/test/hello?name=wangbo");
xmlHttpRequest.send();
xmlHttpRequest.onreadystatechange = function () {
    if (xmlHttpRequest.readyState === 4 && xmlHttpRequest.status == 200) {
        console.log(xmlHttpRequest.responseText);
    }
};

