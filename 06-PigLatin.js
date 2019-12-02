function translatePigLatin(str) {

    const vowels = ['a','e','i','o','u']
    
    if(vowels.includes(str[0])){
      str += "way";
      return str;
    }
    
    else if(!vowels.includes(str[0])) {
      let tempStr = "";
      for(let i = 0; i < str.length;i++){
        if(!vowels.includes(str[i])){
          tempStr += str[i];
        } else {
          return str.slice(tempStr.length) + tempStr + "ay";
        }
      }
    }
  
    return str + "ay";
  
  }
  
  translatePigLatin("rhythm");