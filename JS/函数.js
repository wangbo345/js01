//九九乘法表
function nine() {
    let temp=1;
    let str="";
    for (let i = 1; i < 10; i++) {
        for (let j = 1; j <= i; j++) {
            str+=j+"*"+temp+"="+j*temp+" "
        }
        console.log(str);
        str="";
        temp++;
    }
}
nine();