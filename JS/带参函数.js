function getSum(num1, num2) {
    //num1 num2不被赋值就默认为0
    num1=num1||0;
    num2=num2||0;
    console.log(num1 + num2);
}

let s = getSum(1);
console.log(s);