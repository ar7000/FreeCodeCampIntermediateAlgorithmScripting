function steamrollArray(arr) {

    let newArr = [];

    let func = (x) => {
        if (Array.isArray(x)) {
            for (let i = 0; i < x.length; i++) {
                func(x[i]);
            }
        } else {
            newArr.push(x);
        }
    }

    func(arr);

    return newArr;

}

steamrollArray([1, [2], [3, [[4]]]]);