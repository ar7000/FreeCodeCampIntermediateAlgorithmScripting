function sumPrimes(num) {

    let arr = [];

    for (let i = 2; i <= num; i++) {
        arr.push(i);
    }

    let isPrime = (n) => {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }

    return arr.filter(x => isPrime(x)).reduce((a, b) => a + b);

}

sumPrimes(10);