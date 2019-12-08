function dropElements(arr, func) {
  
    let initLength = arr.length;
  
    for(let i = 0; i < initLength; i++){
  
      if(func(arr[0])){
        return arr;
      } else {
        arr.splice(0,1);
      }
      
    }
    
    return arr;
  
  }
  
  dropElements([1, 2, 3, 4], function(n) {return n > 3; });