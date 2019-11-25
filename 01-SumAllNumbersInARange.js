function sumAll(arr) {
    let ordered = arr.sort((a, b) => a - b);
    let total = 0;
    for (let i = ordered[0]; i <= ordered[1]; i++) {
        total += i;
    }
    return total;
}

console.log(sumAll([4, 1]));