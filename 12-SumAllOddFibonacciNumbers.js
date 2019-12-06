function sumFibs(num) {
    let fibsArr = [1, 1];

    for (let i = 1; i <= fibsArr.length; i++) {
        if ((fibsArr[i] + fibsArr[i - 1]) <= num) {
            fibsArr.push(fibsArr[i] + fibsArr[i - 1])
        }
    }

    return fibsArr.filter(x => x % 2 != 0).reduce((a, b) => a + b);
}

sumFibs(75025);