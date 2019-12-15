function addTogether() {

    let args = Array.from(arguments);
    let a = args[0];
    let b = args[1];

    function checkNum(x) {
        if (typeof x === "number") {
            return true;
        }
        return false;
    }

    if (args.length > 1) {
        if (!checkNum(a) || !checkNum(b)) {
            return undefined;
        } else {
            return a + b;
        }
    }

    else if (args.length === 1) {
        if (checkNum(a)) {
            return function (c) {
                if (checkNum(c)) {
                    return a + c;
                }
            }
        }
    }
}

addTogether(2)(3);