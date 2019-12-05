function convertHTML(str) {

    let charsObj = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\'": "&apos;",
        "\"": "&quot;"
    }

    let charsRegex = /[&<>\"\']/;

    let strSplit = str.split('');

    for (let i = 0; i < strSplit.length; i++) {
        if (strSplit[i].match(charsRegex)) {
            strSplit[i] = charsObj[strSplit[i]];
        }
    }

    return strSplit.join('');

}

convertHTML("Dolce & Gabbana");
