function truthCheck(collection, pre) {

    if (collection.every(x => x[pre])){
      return true;
    }
    return false;
  
  }
  
  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");