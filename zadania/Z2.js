function getResult() {
    let s = 0;

    for (let i = 0; i < a.length; i++) {
        s = s + a[i];
    }
    return s;
}

console.log(getResult([1, 2, 3, 4, 5]), '==', 15);
console.log(getResult([-1, -2, -3, -4, -5]), '==', 15);
console.log(getResult([-2, -2, 0, 4]), '==', 0);