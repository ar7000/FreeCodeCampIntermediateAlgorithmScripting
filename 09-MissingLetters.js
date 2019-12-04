function fearNotLetter(str) {
    
    for (let i = 0; str.charCodeAt(i) < 122; i++) {

        if (str.charCodeAt(i) !== (str.charCodeAt(i + 1) - 1)) {

            return String.fromCharCode(str.charCodeAt(i) + 1);

        }

    }

    return undefined;

}

console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));