function pairElement(str) {
    let strArr = [];
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case "G":
                strArr.push(["G", "C"]);
                break;
            case "C":
                strArr.push(["C", "G"]);
                break;
            case "A":
                strArr.push(["A", "T"]);
                break;
            case "T":
                strArr.push(["T", "A"]);
                break;
        }
    }
    return strArr;
}

(pairElement("GCG");  