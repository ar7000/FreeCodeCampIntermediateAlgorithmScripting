let alph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function fearNotLetter(str) {
  let index = alph.indexOf(str[0]);
  for(let i = 0; i < str.length; i++){
    if(str[i] === alph[index]){
      index++;
    } else {
      return alph[index];
    }
  }
  return undefined;
}

console.log(fearNotLetter("abce"));