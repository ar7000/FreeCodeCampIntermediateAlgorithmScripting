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

  //Can also be done with regular expressions...

  function translatePigLatin(str) {
    let startVowel = /^[aeiou]+/;
    let consAndVowels = /\b[b-df-hj-np-tv-z]+(?=[aeiou])/;
    let noVowels = /[b-df-hj-np-tv-z]+/;
  
    if(str.match(startVowel)){
      return str + "way";
    } else if(str.match(consAndVowels)){
      return str.replace(str.match(consAndVowels), "") + str.match(consAndVowels) + "ay";
    } else if(str.match(noVowels)){
      return str + "ay";
    }
  
  }
  
  translatePigLatin("rhythm");