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

//Can also be done entirely on object and methods...

function convertHTML(str) {
    
    let charsObj = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\'": "&apos;",
        "\"": "&quot;"
    }

    return str.split('').map(x => charsObj[x] || x).join('');

}

convertHTML("Dolce & Gabbana");
