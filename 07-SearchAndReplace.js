function myReplace(str, before, after) {
  let startsWithCap = /^[A-Z]/;
  if(before.match(startsWithCap)){
    after = after[0].toUpperCase() + after.slice(1);
  } else {
    after = after[0].toLowerCase() + after.slice(1);
  }
  return str.replace(before,after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");