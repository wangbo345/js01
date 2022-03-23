//匿名函数
let fn1 = function (a, b) {
    return a+b;
};
//使用箭头函数改良上述函数
let fn2=(a,b)=>{
    return a+b;
};

let fn = fn1(1,2);
console.log(fn);
