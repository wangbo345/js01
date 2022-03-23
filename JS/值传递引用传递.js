let a={
    name: "王博",
    age: 12
};

function f1(num1) {
    num1.age=14;
}

f1(a);
console.log(a.age);