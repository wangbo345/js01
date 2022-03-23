function max(num1) {
    let maxNumber=num1[0];
    for (let i = 1; i < num1.length; i++) {
        if (num1[i] > maxNumber) {
            maxNumber=num1[i];
        }
    }
    return maxNumber;
}

let arr = [1, 2, 4, 3, 5];
let max1 = max(arr);
console.log(max1);