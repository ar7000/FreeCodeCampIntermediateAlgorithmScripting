function diffArray(arr1, arr2) {
    let newArr = [...arr1, ...arr2];
    return newArr.filter(x => !arr1.includes(x) || !arr2.includes(x));;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);