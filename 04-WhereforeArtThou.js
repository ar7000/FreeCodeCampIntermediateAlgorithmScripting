function whatIsInAName(collection, source) {

  const keys = Object.keys(source);

  const func = (item) => {

    for(let i = 0; i < keys.length; i++){
      if(!item.hasOwnProperty(keys[i]) || item[keys[i]] != source[keys[i]]){
        return false;
      }
    }

  return true;

  }

  return collection.filter(func);
  
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });